import express from "express";
import {
  registerUser,
  loginUser,
  adminRoute,
  getUserData,
} from "../controller/auth.controller";
import { checkRole } from "../middleware/role.middleware";
import { verifyToken } from "../middleware/auth.middleware";
const router = express.Router();
// api/auth/register
router.post("/register", registerUser);
// api/auth/login
router.post("/login", loginUser);
// api/auth/admin
router.get("/admin", verifyToken, checkRole(["admin", "user"]), (req, res) => {
  res.json({ message: "Welcome" });
});
router.get("/getUser", verifyToken, getUserData);
export default router;
