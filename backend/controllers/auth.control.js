import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genToken from "../config/token.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const regEmail = User.findOne({ email });

    if (regEmail) {
      return res
        .status(400)
        .json({ message: "This Email is Already registered !!!.." });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be longer than 6 !!" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      password: hashedPass,
      email,
    });

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 10 * 24 * 24 * 60 * 1000,
      sameSite: "strict",
      secure: true,
    });

    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({ message: `Signup Error  ${err}` });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user1 = User.findOne({ email });

    if (!user1) {
      return res.status(400).json({ message: "email not registererd" });
    }

    const isMatch = await bcrypt.compare(password, user1.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 10 * 24 * 24 * 60 * 1000,
      sameSite: "strict",
      secure: true,
    });

    return res.status(200).json(user1);
  } catch (err) {
    return res.status(500).json({ message: `Login Error  ${err}` });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout Successfully" });
  } catch (err) {
    return res.status(500).json({ message: `Logout Error  ${err}` });
  }
};
