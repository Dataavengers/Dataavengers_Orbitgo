import express from "express"
import { createUser, loginUser, verifyToken, refreshToken, logout} from "../controllers/users.js"

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/logout", verifyToken, logout);

export default router;