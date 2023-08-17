import express from "express"
import { createUser, loginUser, getProfile, updateProfile, getTrips, getPlanets, tripRequest, getPackages, searchPlanets, verifyEntryPass, verifyToken, refreshToken, logout} from "../controllers/users.js"

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, refreshToken, getProfile);
router.put("/profile/:id", verifyToken, refreshToken, updateProfile);
router.get("/trips", verifyToken, refreshToken, getTrips);
router.get("/planets", verifyToken, refreshToken, getPlanets);
router.get("/packages", verifyToken, refreshToken, getPackages);
router.post("/request", verifyToken, refreshToken, tripRequest);
router.post("/search", verifyToken, refreshToken, searchPlanets);
router.post("/verify", verifyToken, refreshToken, verifyEntryPass);
router.get("/logout", verifyToken, logout);

export default router;