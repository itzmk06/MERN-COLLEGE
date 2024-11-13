const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const port=process.env.PORT ||3000;
const app=express();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

app.use(express.json());
app.use(cors);

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const userModel=mongoose.model('User',userSchema);

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    lastEatenDate:{
        type:Date,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const foodModel=mongoose.model('food',foodSchema);

const verifyToken=(req,res,next)=>{
    let token=req.headers['authorization'];
    token=token.replace('Bearer',"");
    if(!token){
        return res.status(403).json({message:'Token key is not provided!'});
    }
    jwt.verify(token,'#manoj',(err,decoded)=>{
        if(err){
            return res.status(403).json({message:'Token is not valid!'});
        }
        req.user=decoded.userId;
        next();
    })
}
// protected route
app.post('/api/foods',verifyToken,async(req,res)=>{
    try {
        const {name,lastEatenDate}=req.body;
        const food=new foodModel({name,lastEatenDate:new Date(lastEatenDate),user:req.userId})
        await food.save();
        res.status(201).json({message:"Food data saved successfully!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Failed to save food data!'});
    }
});

app.get('/api/foods',verifyToken,async(req,res)=>{
    try{
        const foods =await foodModel.find({user:req?.userId});
        res.json(foods);
    }catch(error){  
        res.status(500).json({
            error:'Failed to fetch food data from database!'
        })
    }
});

app.put('/api/foods/:id',verifyToken,async(req,res)=>{
    try {
        const {lastEatenDate}=req.body;
        const food=await foodModel.findByIdAndUpdate(
            {_id:req.params.id,user:req.userId},
            {lastEatenDate:new Date(lastEatenDate)},
            {new:true}
        );
        if(!food){
            return res.status(404).json({message:'Food not found!'});
        }
        res.json(food);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Failed to update food data!'});
    }
});

// pass hashing 
app.post('/api/register',async(req,res)=>{
    try {
        const {username,password}=req.body;
        const hashedPassword=await bcrypt.hash(password,10);
        const user=new userModel({username:username,password:hashedPassword});
        await user.save();
        res.status(201).json({
            message:"user registered successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error:'Failed to register user!'
        });
    }
});

app.post('/api/login',async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user=await userModel.findOne({username:username});
        if(!user){
            return res.status(401).json({
                message:'Invalid username!'
            })
        }
        const isMatch=await bcrypt.compare(password,user?.password);
        if(!isMatch){
            return res.status(401).json({
                message:'Invalid password!'
            })
        }
        const token=jwt.sign({userId:user?._id},'#manoj',{expiresIn:'1h'})
        res.json({
            token:token,
            userId:userId,
            message:'Logged in successfully!'
        })
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error:'Failed to login!'
        });
    }
});

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`);
});

