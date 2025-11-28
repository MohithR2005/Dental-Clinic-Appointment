import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-blue-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4 leading-tight">
            Puttaparthi Dental Care
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Advanced Dental Care with Compassion & Precision. Experience world-class dentistry with a personal touch.
          </p>
          <Link to="/book-appointment">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/dental-hero.webp"
            alt="Dental Care"
            className="w-full max-w-md rounded-xl shadow-2xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}
