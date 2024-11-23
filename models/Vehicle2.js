// const mongoose = require('mongoose');

// const vehicleSchema = new mongoose.Schema({
//   licensePlate: {
//     type: String,
//     required: true,
//     unique: true,
//     uppercase: true,
//   },
//   owner: {
//     name: String,
//     contact: String,
//     email: String,
//   },
//   vehicleDetails: {
//     make: String,
//     model: String,
//     color: String,
//     year: Number,
//   },
//   registrationStatus: {
//     type: String,
//     enum: ['active', 'expired', 'blacklisted'],
//     default: 'active',
//   },
//   parkingPass: {
//     type: String,
//     enum: ['none', 'daily', 'monthly', 'annual'],
//     default: 'none',
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // models/ParkingRecord.js
// const parkingRecordSchema = new mongoose.Schema({
//   vehicleId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Vehicle',
//     required: true,
//   },
//   licensePlate: {
//     type: String,
//     required: true,
//   },
//   entryTime: {
//     type: Date,
//     required: true,
//   },
//   exitTime: {
//     type: Date,
//   },
//   parkingSpot: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ['active', 'completed'],
//     default: 'active',
//   },
//   fee: {
//     type: Number,
//     default: 0,
//   },
//   paymentStatus: {
//     type: String,
//     enum: ['pending', 'paid', 'waived'],
//     default: 'pending',
//   },
// });

// // models/ParkingSpot.js
// const parkingSpotSchema = new mongoose.Schema({
//   spotNumber: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   status: {
//     type: String,
//     enum: ['available', 'occupied', 'reserved', 'maintenance'],
//     default: 'available',
//   },
//   type: {
//     type: String,
//     enum: ['standard', 'handicap', 'electric', 'reserved'],
//     default: 'standard',
//   },
//   currentVehicle: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Vehicle',
//   },
// });

// module.exports = {
//   Vehicle: mongoose.model('Vehicle', vehicleSchema),
//   ParkingRecord: mongoose.model('ParkingRecord', parkingRecordSchema),
//   ParkingSpot: mongoose.model('ParkingSpot', parkingSpotSchema),
// };