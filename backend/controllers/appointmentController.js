import { Appointment } from "../models/Appointment.js";
import { sendAppointmentEmail } from "../services/emailService.js";

export const createAppointment = async (req, res) => {
  try {
    const { name, email, phone, service, date, time } = req.body;

    // Create appointment in database
    const newAppointment = await Appointment.create({
      name, email, phone, service, date, time
    });

    // Send email notification to admin
    try {
      await sendAppointmentEmail({ name, email, phone, service, date, time });
      console.log("✅ Admin notified via email");
    } catch (emailError) {
      // Log email error but don't fail the appointment creation
      console.error("⚠️ Failed to send email notification:", emailError.message);
    }

    res.json({
      message: "Appointment booked successfully! You will receive a confirmation soon.",
      appointment: newAppointment
    });

  } catch (error) {
    console.error("❌ Error creating appointment:", error);
    res.status(500).json({ error: "Server error" });
  }
};

