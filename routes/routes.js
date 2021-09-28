const express=require('express');
const router=express.Router()
const {register,signin,forgot,submitapplication,preview,editdetails,updatedetails,changepassword,getalldetails,getregistrationdetails}=require('../controllers/controller');
router.route('/registrationdetails/:email').get(getregistrationdetails);
router.route('/registration').post(register);
router.route('/signin/:registration_no').patch(signin);
router.route('/forgot/:email').get(forgot);
router.route('/getalldetails/:registration_no').get(getalldetails);     
router.route('/application/submit').post(submitapplication); //------------> will provide register number in  the body from frontend
router.route('/application/preview/:registration_no').get(preview)
router.route('/application/editdetails/:registration_no').get(editdetails);
router.route('/application/updatedetails/:registration_no').patch(updatedetails);
router.route('/changepassword/:registration_no').patch(changepassword);

module.exports=router;