const express=require("express")
const {addCategory,getCategories}=require("../controllers/categoryController")
const router=express.Router();
router.post('/',addCategory);
router.get('/',getCategories);
// router.patch('/',updateCategory);
// router.delete('/',deleteCategory);


module.exports = router;