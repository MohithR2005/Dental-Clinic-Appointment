import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  date: String,
  time: String,
}, { timestamps: true });

export const Appointment = mongoose.model("Appointment", AppointmentSchema);
