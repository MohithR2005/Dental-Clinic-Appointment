import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            About Our Dental Clinic
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            At <strong>Puttaparthi Dental Care</strong>, we are dedicated to providing
            high-quality dental services in a comfortable and friendly environment.
            Our mission is to ensure every patient leaves with a healthy and confident smile.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With modern equipment, experienced professionals, and a patient-first approach,
            we offer a wide range of dental solutions including preventive care, cosmetic
            dentistry, and advanced treatments.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="dental-about.png"
            alt="Dental Clinic"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
