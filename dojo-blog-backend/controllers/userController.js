import User from "../models/User";
import bcrypt from "bcrypt";
import { createJWT } from "../utils/jwtutil";

export const registerUser = async (req, res) => {
  const { name, password, email, role } = req.body;
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(400).json({ message: "Email already in use" });
  }
  const user = await User.create({ name, password, email, role });
  const token = createJWT(user);
  res.status(201).json({ token });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
  const token = createJWT(user);
  res.status(200).json({token});
};
