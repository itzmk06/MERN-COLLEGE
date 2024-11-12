const mongoose=require('mongoose');

const mongoUrl = "mongodb+srv://jet15fuze:WZe4ZDnAr6Nz9MlY@cluster0.xsmsb.mongodb.net/test";

const connectToDb=async()=>{
    try{
        await mongoose.connect(mongoUrl);
        console.log("Connection to mongodb failed!");
    }catch(error){
        console.log("Connection to mongodb failed!",error);
    }
};

const student_schema=new mongoose.Schema({
    name:String,
    location:String,
    technology:String,
    phone_number:String,
});

const student_model=mongoose.model("Student",student_schema);

const deleteStudent=async()=>{
    await connectToDb();
    try{
        const deleted_student_record=await student_model.findOneAndDelete({name:'Manoj'});
        console.log("Student record deleted successfully!",deleted_student_record);
    }catch(error){
        console.log("Not able to delete student record!");
        throw error;
    }finally{
        console.log("Mongodb connection terminated!");
    }
}
deleteStudent();