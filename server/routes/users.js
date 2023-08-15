import express from "express"
import { createUser, loginUser, verifyToken, refreshToken, logout} from "../controllers/users"

const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/logout", verifyToken, logout);

module.exports = router;