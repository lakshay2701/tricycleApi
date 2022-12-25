require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const Tricycle = require("./models/tricycle");




const ProductJson = require('./products.json');
const Bst01Json = require("./bst01.json");
const Hdl01Json = require("./hdl01.json");
const St03Json = require("./st03.json");
const St04Json = require("./st04.json");
const Bst02Json = require("./bst02.json");
const Hdl02Json = require("./hdl02.json");
const St05Json = require("./st05.json");
const WalkerJson = require("./walkera.json")
const PramJson = require("./pramb.json");





const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.create(ProductJson);
        await Tricycle.create(Bst01Json);
        await Tricycle.create(Hdl01Json);
        await Tricycle.create(St03Json);
        await Tricycle.create(St04Json);
        await Tricycle.create(Bst02Json);
        await Tricycle.create(Hdl02Json);
        await Tricycle.create(St05Json);
        await Tricycle.create(WalkerJson);
        await Tricycle.create(PramJson);
        
        console.log("success");
    } catch (error) {
        console.log(error);
        
    }

};





start(); 
 