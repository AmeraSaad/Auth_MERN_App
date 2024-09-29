const mongoose = require("mongoose");

// User Schema
const UserSchema = new mongoose.Schema(
  {
  email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		lastLogin: {
			type: Date,
			default: Date.now,
		},
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
			type: Boolean,
			default: false,
		},
    resetPasswordToken: String,
		resetPasswordExpiresAt: Date,
		verificationToken: String,
		verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

// User Model
const User = mongoose.model("User", UserSchema);

module.exports = {
  User
};