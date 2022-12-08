const express=require("express")
const {createProduct,getAllProducts,getSingleProduct,updateProduct,deleteProduct}=require("../controllers/productsController")
const router=express.Router();

router.post('/',createProduct);
// router.get('/',getAllProducts)
router.get('/',getSingleProduct);
// router.get('/:id',getSingleProduct);
router.patch('/:id',updateProduct)
router.delete('/:id',deleteProduct)
module.exports = router;