import React, { useState } from "react";
import axios from "axios";

export default function BookAppointment() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await axios.post("http://localhost:5000/api/appointments", form);
            setMessage("✅ Appointment booked successfully! You will receive a confirmation email shortly.");
            setForm({
                name: "",
                email: "",
                phone: "",
                service: "",
                date: "",
                time: "",
            });
        } catch (err) {
            console.error("Booking Error:", err);
            const errorMessage = err.response?.data?.error || err.message || "Something went wrong";
            setMessage(`❌ Error: ${errorMessage}. Please try again.`);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-blue-700 mb-3">
                        Book Your Appointment
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Schedule your visit with our experienced dental professionals
                    </p>
                </div>

                {/* Appointment Form Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="your.email@example.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+91 123-456-7890"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Service Selection */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Select Service *
                            </label>
                            <select
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                            >
                                <option value="">-- Choose a service --</option>
                                <option value="Teeth Cleaning">Teeth Cleaning</option>
                                <option value="Root Canal">Root Canal Treatment</option>
                                <option value="Braces">Braces & Orthodontics</option>
                                <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                                <option value="Dental Implants">Dental Implants</option>
                                <option value="Teeth Whitening">Teeth Whitening</option>
                                <option value="General Checkup">General Checkup</option>
                            </select>
                        </div>

                        {/* Date and Time */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Preferred Date *
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Preferred Time *
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    value={form.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                        >
                            {loading ? "Booking..." : "Book Appointment"}
                        </button>
                    </form>

                    {/* Message Display */}
                    {message && (
                        <div className={`mt-6 p-4 rounded-lg text-center font-semibold ${message.includes("✅")
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                            }`}>
                            {message}
                        </div>
                    )}
                </div>

                {/* Additional Info */}
                <div className="mt-8 text-center text-gray-600">
                    <p className="mb-2">📞 Need immediate assistance? Call us at +91 123-456-7890</p>
                    <p>⏰ Clinic Hours: Mon-Sat, 9:00 AM - 7:00 PM</p>
                </div>
            </div>
        </div>
    );
}
