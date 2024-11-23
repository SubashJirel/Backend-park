const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  licensePlate: { type: String, required: true },
  entryTime: { type: Date, default: Date.now },
  exitTime: { type: Date },
  status: { type: String, default: "parked" }, // "parked" or "exited"
  fee: { type: Number, default: 0 },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
