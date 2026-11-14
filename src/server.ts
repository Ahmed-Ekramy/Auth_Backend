import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.route";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
//Middleware
app.use(express.json());
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//! Authentication => email, password
//! Authorization => role, permission صلاحيه المستخدم ده يعمل اى
//!bcrypt => package use in hashing password
//!jsonwebtoken => package use in creating token
//!dotenv => package use in storing environment variables( like database url, secret key, etc)
