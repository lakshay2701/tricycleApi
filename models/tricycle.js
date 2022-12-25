const mongoose = require("mongoose");

const TricycleSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        enum:{
            values:["stepupp"],
            message:`{VALUE} is not supported`,
        },
    },
    price:{
        type:Number,
        required:[true,"price must be provided"],
    },
    colors:{
        type:Array,
        
        required:true,
    },
    description:{
        type:String,
        reequired:true,
    },
    category:{
        type:String,
        required:true,
    },
    featured:{
        type:Boolean,
        default:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    reviews:{
        type:Number,
        required:true,
    },
    stars:{
        type:Number,
        required:true,
    },

    image:{
        type:Array,
        required:true,
    },
});


module.exports = mongoose.model("Tricycle",TricycleSchema);