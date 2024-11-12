const mongoose = require("mongoose");

const mongoUrl = "mongodb+srv://jet15fuze:WZe4ZDnAr6Nz9MlY@cluster0.xsmsb.mongodb.net/test";

const connectToDb = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};

const studentSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    technology: String,
    phone_number: String 
  },
  { timestamps: false } 
);

const studentModel = mongoose.model("students", studentSchema);

const createStudent = async () => {
  await connectToDb();
  try {
    const student = new studentModel({
      name: "Manoj",
      location: "Mysore",
      technology: "NodeJS",
      phone_number: "8095692149" 
    });
    const createdDocument = await student.save();
    console.log("Student Created Successfully:", createdDocument);
  } catch (error) {
    console.error("Error creating student:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

createStudent();
