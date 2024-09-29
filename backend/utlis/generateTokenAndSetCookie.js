const  jwt =  require("jsonwebtoken")

module.exports.generateTokenAndSetCookie = (res, userId) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});

	res.cookie("token", token, {
		httpOnly: true,       //prevent xss attacks
		secure: process.env.NODE_ENV === "production",  //prevent man-in-the-middle attacks
		sameSite: "strict",   //prevent CSRF attacks
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});

	return token;
};