const express = require("express");
const router = express.Router();

const {getAllProducts,bst01,hdl01,st03,st04,bst02,hdl02,st05,walkera,pram} = require("../controllers/products")



router.route("/").get(getAllProducts);
router.route("/tricyclea").get(bst01);
router.route("/tricycleb").get(hdl01);
router.route("/tricyclec").get(st03);
router.route("/tricycled").get(st04);
router.route("/tricyclee").get(bst02);
router.route("/tricyclef").get(hdl02);
router.route("/tricycleg").get(st05);
router.route("/walkera").get(walkera);
router.route("/pramb").get(pram);




module.exports = router;