import { transporter } from "../config/mail.js";
import dotenv from "dotenv";

dotenv.config();

/**
 * Send appointment confirmation email to admin
 * @param {Object} appointmentData - Appointment details
 */
export const sendAppointmentEmail = async (appointmentData) => {
    const { name, email, phone, service, date, time } = appointmentData;

    const adminEmail = process.env.ADMIN_EMAIL;

    if (!adminEmail) {
        console.error("ADMIN_EMAIL not configured in .env file");
        throw new Error("Admin email not configured");
    }

    // Email content for admin
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: adminEmail,
        subject: `🦷 New Appointment Booking - ${service}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
        <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0;">SmileCare Dental Clinic</h1>
          <p style="margin: 10px 0 0 0;">New Appointment Notification</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #2563eb; margin-top: 0;">📅 Appointment Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Patient Name:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Service:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Preferred Date:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #374151;">Preferred Time:</td>
              <td style="padding: 12px 0; color: #6b7280;">${time}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-left: 4px solid #2563eb; border-radius: 4px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Action Required:</strong> Please confirm this appointment with the patient via email or phone.
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
          <p>SmileCare Dental Clinic - Your Smile, Our Passion</p>
          <p>This is an automated notification from your appointment booking system.</p>
        </div>
      </div>
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Appointment email sent to admin: ${info.messageId}`);
        return info;
    } catch (error) {
        console.error("❌ Error sending appointment email:", error);
        throw error;
    }
};
