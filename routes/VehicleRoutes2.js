// // routes/vehicleRoutes.js
// const express = require('express');
// const router = express.Router();
// const { Vehicle } = require('../models/Vehicle');

// // Get all vehicles
// router.get('/vehicles', async (req, res) => {
//   try {
//     const vehicles = await Vehicle.find();
//     res.json(vehicles);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Register new vehicle
// router.post('/vehicles', async (req, res) => {
//   const vehicle = new Vehicle({
//     licensePlate: req.body.licensePlate,
//     owner: req.body.owner,
//     vehicleDetails: req.body.vehicleDetails,
//   });

//   try {
//     const newVehicle = await vehicle.save();
//     res.status(201).json(newVehicle);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Update vehicle
// router.patch('/vehicles/:id', async (req, res) => {
//   try {
//     const vehicle = await Vehicle.findById(req.params.id);
//     if (req.body.licensePlate) vehicle.licensePlate = req.body.licensePlate;
//     if (req.body.owner) vehicle.owner = req.body.owner;
//     if (req.body.vehicleDetails) vehicle.vehicleDetails = req.body.vehicleDetails;
//     if (req.body.registrationStatus) vehicle.registrationStatus = req.body.registrationStatus;
    
//     const updatedVehicle = await vehicle.save();
//     res.json(updatedVehicle);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // routes/parkingRoutes.js
// const router = express.Router();
// const { ParkingRecord, ParkingSpot } = require('../models/Parking');

// // Record vehicle entry
// router.post('/parking/entry', async (req, res) => {
//   try {
//     // Find available parking spot
//     const spot = await ParkingSpot.findOne({ status: 'available' });
//     if (!spot) {
//       return res.status(400).json({ message: 'No parking spots available' });
//     }

//     // Create parking record
//     const parkingRecord = new ParkingRecord({
//       vehicleId: req.body.vehicleId,
//       licensePlate: req.body.licensePlate,
//       entryTime: new Date(),
//       parkingSpot: spot.spotNumber,
//     });

//     // Update spot status
//     spot.status = 'occupied';
//     spot.currentVehicle = req.body.vehicleId;
    
//     await spot.save();
//     const newRecord = await parkingRecord.save();
    
//     res.status(201).json(newRecord);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Record vehicle exit
// router.post('/parking/exit/:recordId', async (req, res) => {
//   try {
//     const record = await ParkingRecord.findById(req.params.recordId);
//     if (!record) {
//       return res.status(404).json({ message: 'Parking record not found' });
//     }

//     // Calculate parking duration and fee
//     record.exitTime = new Date();
//     const duration = (record.exitTime - record.entryTime) / (1000 * 60 * 60); // hours
//     record.fee = Math.ceil(duration) * 10; // $10 per hour
//     record.status = 'completed';

//     // Free up parking spot
//     const spot = await ParkingSpot.findOne({ spotNumber: record.parkingSpot });
//     spot.status = 'available';
//     spot.currentVehicle = null;

//     await spot.save();
//     const updatedRecord = await record.save();
    
//     res.json(updatedRecord);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// module.exports = router;