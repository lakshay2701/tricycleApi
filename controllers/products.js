const Product = require("../models/product");
const Tricycle = require("../models/tricycle");





const getAllProducts = async(req,res)=>{
    const myData = await Product.find({});
      
      res.status(200).json({myData});
};

const bst01 = async(req,res)=>{
  const myData = await Tricycle.find({id:"tricyclea"});
  res.status(200).json({myData});
}


const hdl01 = async(req,res)=>{
  const myData = await Tricycle.find({id:"tricycleb"});
  res.status(200).json({myData});
}

const st03 = async(req,res)=>{
  const myData = await Tricycle.find({id:"tricyclec"});
  res.status(200).json({myData});
}

const st04 = async(req,res)=>{
  const myData = await Tricycle.find({id:"tricycled"});
  res.status(200).json({myData});
}

const bst02 = async(req,res)=>{
  const myData = await Tricycle.find({id:"tricyclee"});
  res.status(200).json({myData});
}

const hdl02 = async(req,res)=>{
  const myData = await Tricycle.find({id:"tricyclef"});
  res.status(200).json({myData});
}

const st05 = async(req,res)=>{
  const myData = await Tricycle.find({id:"tricycleg"});
  res.status(200).json({myData});
}

const walkera = async(req,res)=>{
  const myData = await Tricycle.find({id:"walkera"});
  res.status(200).json({myData});
}

const pram = async(req,res)=>{
  const myData = await Tricycle.find({id:"pramb"});
  res.status(200).json({myData});
}







module.exports = {getAllProducts,bst01,hdl01,st03,st04,bst02,hdl02,st05,walkera,pram}; 