const mongoose=require('mongoose');

const mongoUrl = "mongodb+srv://jet15fuze:WZe4ZDnAr6Nz9MlY@cluster0.xsmsb.mongodb.net/test";

const connectToDb=async()=>{
    try{
        await mongoose.connect(mongoUrl);
        console.log("connection to mongodb established!");
    }catch(error){
        console.log("connection to mongodb failed!");
        throw error;
    }
};

const studentSchema=new mongoose.Schema({
    name:String,
    location:String,
    technology:String,
    phone_number:String,
},{
    timestamps: false,
});

const student_model=mongoose.model('Student',studentSchema);

const ReadStudentData=async()=>{
    await connectToDb();
    try{
        const students=await student_model.find({});
        console.log(students);
    }catch(error){
        console.log("Error reading data from mongodb!");
        throw error;
    }finally{
        await mongoose.disconnect();
        console.log("connection to mongodb terminated!")
    }
}
ReadStudentData();