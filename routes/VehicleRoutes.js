const express = require("express");
const {
  recordEntry,
  recordExit,
  getAllVehicles,
} = require("../controllers/vehicleController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Admin-Only Routes
router.get("/", authMiddleware("admin"), getAllVehicles);

// User/Admin Routes
router.post("/entry", authMiddleware(), recordEntry);
router.post("/exit", authMiddleware(), recordExit);

module.exports = router;
