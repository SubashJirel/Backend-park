const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  licensePlate: { type: String, required: true },
  entryTime: { type: Date, default: Date.now },
  exitTime: { type: Date },
  status: { type: String, default: "parked" }, // "parked" or "exited"
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
