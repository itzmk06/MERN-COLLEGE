const mongoose=require('mongoose');

const FoodSchema=new mongoose.Schema({
    foodName:{
        type:String,
        required:true,
    },
    daySinceIAte:{
        type:Number,
        required:true,
    }
});

const FoodModel=mongoose.model('FoodModel',FoodSchema);

module.exports=FoodModel;