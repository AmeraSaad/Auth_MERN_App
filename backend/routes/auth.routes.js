const express= require('express');
const { signup, logout, login ,
  verifyEmail,
  forgotPassword,
	resetPassword,
  protectRoute} = require('../controllers/auth.controller');
const { verifyToken } = require('../middleware/verifyToken');

const router = express.Router();

router.get("/check-auth", verifyToken, protectRoute);  //checkAuth

router.post("/signup", signup);
router.post("/login", login)
router.post("/logout", logout)

router.post("/verify-email", verifyEmail);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

module.exports = router;