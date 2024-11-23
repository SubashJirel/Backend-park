const Vehicle = require("../models/Vehicle");

// Record Vehicle Entry
exports.recordEntry = async (req, res) => {
  const { licensePlate } = req.body;
  try {
    const vehicle = new Vehicle({ licensePlate });
    await vehicle.save();

    res.status(201).json({ message: "Vehicle entry recorded", vehicle });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Record Vehicle Exit
exports.recordExit = async (req, res) => {
  const { licensePlate } = req.body;
  try {
    const vehicle = await Vehicle.findOne({ licensePlate, status: "parked" });
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found or already exited" });

    const exitTime = new Date();
    const hoursParked = Math.ceil((exitTime - vehicle.entryTime) / (1000 * 60 * 60));
    const fee = hoursParked * 10; // $10 per hour

    vehicle.exitTime = exitTime;
    vehicle.status = "exited";
    vehicle.fee = fee;
    await vehicle.save();

    res.status(200).json({ message: "Vehicle exit recorded", fee });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get All Vehicles
exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
