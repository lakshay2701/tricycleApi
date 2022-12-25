const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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
    image:{
        type:String,
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
});

module.exports = mongoose.model("Product",productSchema);