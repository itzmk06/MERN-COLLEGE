const express=require('express');
const app=express();
const port=3000;
const cors=require('cors');
const mongoose=require('mongoose');

const FoodModel=require('./model/food.model.js');
const mongoUrl="mongodb+srv://jet15fuze:zk7eKhF3VLouM6db@cluster0.lu6te.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(express.json());
app.use(cors());

const connectToDb=async()=>{
    try {
        await mongoose.connect(mongoUrl);
        console.log("connection to mongodb successful");
    } catch (error) {
        console.log("connection to mongodb failed!");
        throw error;
    }
};

connectToDb();

app.get('/read',async(req,res)=>{
    try {
        const result=await FoodModel.find({});
        res.send(result);
    } catch (error) {
        console.log("connection to mongodb failed!");
        throw error;
    }
})

app.put('/update',async(req,res)=>{
    const newFoodName=req.body.foodName;
    const id=req.body.id;
    try {
        const oldFoodName=await FoodModel.findById(id);
        oldFoodName.foodName = newFoodName;
        await oldFoodName.save();
    } catch (error) {
        console.log("Failed to update");
        throw error;
    }
});



app.post('/insert',async(req,res)=>{
    const foodName=req.body.foodName;
    const daySinceIAte=req.body.daySinceIAte;
    const food=new FoodModel({foodName:foodName,daySinceIAte:daySinceIAte});
    try {
        await food.save();
        res.send("inserted data");
    } catch (error) {
        console.log("Failed to insert");
        throw error;
    }
});

app.delete('/delete/:id',async(req,res)=>{
    const id=req.params.id;
    try {
        await FoodModel.findByIdAndDelete(id);
        res.send("Deleted data");
    } catch (error) {
        console.log("Failed to delete");
    }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});