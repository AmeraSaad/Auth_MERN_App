const bcryptjs = require("bcryptjs");
const crypto = require("crypto");

const {User} = require("../models/user.model");
const { generateverificationToken } = require("../utlis/generateverificationToken");
const { generateTokenAndSetCookie } = require("../utlis/generateTokenAndSetCookie");

module.exports.signup = async (req,res)=>{
  const { email, password, firstName, lastName } = req.body;
  try{
    if (!email || !password || !firstName || !lastName) {
			throw new Error("All fields are required");
		}
    const userAlreadyExists = await User.findOne({ email });
		console.log("userAlreadyExists", userAlreadyExists);

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}

		const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = generateverificationToken;

		const user = new User({
			email,
			password: hashedPassword,
			firstName,
      lastName,
			verificationToken,
			verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
		});

    await user.save();

    // jwt
		generateTokenAndSetCookie(res, user._id);

		// await sendVerificationEmail(user.email, verificationToken);

		res.status(201).json({
			success: true,
			message: "User created successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});

  }catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};
module.exports.login = async (req,res)=>{
  res.send("login");
};
module.exports.logout = async (req,res)=>{
  res.send("logout");
};