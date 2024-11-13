const mongoose=require('mongoose');

const mongoUrl = "mongodb+srv://jet15fuze:WZe4ZDnAr6Nz9MlY@cluster0.xsmsb.mongodb.net/test";

const connectToDb=()=>{
    try{
        mongoose.connect(mongoUrl);
        console.log("connection to mongodb established!");
    }catch(error){
        console.log("connection to mongodb failed!",error);
        throw error;
    }
};

const studentSchema=new mongoose.Schema({
    name:String,
    location:String,
    technology:String,
    phone_number:String
});

const student_model=new mongoose.model("Student",studentSchema);

const updateStudentData=async()=>{
    await connectToDb();
    try{
        await student_model.findOneAndUpdate({name:"Manoj"},{$set:{location:"New York",phone_number:"1234567890"}},{new:true});
        const updatedStudentData=await student_model.findOne({name:'Manoj'})
        console.log("Student data updated successfully!",updatedStudentData);
    }catch(error){
        console.log("Student data updation failed!",error);
        throw error;
    }finally{
        console.log("Terminated mongodb connection!");
        mongoose.disconnect();
    }
};

updateStudentData();