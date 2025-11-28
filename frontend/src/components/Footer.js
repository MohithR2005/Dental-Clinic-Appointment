import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-2">Puttaparthi Dental Care</h3>
        <p className="text-blue-200 mb-4">
          Your smile, our passion. Excellence in dental care since 2014.
        </p>
        
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-blue-300">About</a>
          <a href="#" className="hover:text-blue-300">Services</a>
          <a href="#" className="hover:text-blue-300">Contact</a>
          <a href="#" className="hover:text-blue-300">Location</a>
        </div>

        <div className="text-sm text-blue-300">
          <p>📞 +91 123-456-7890 | 📧 puttaparthidental@gmail.com</p>
          <p className="mt-2">📍Door No.3-632, Sai Guru Towers,Gopuram Main Road, Puttaparthi City-515134</p>
        </div>

        <div className="border-t border-blue-700 mt-6 pt-4">
          <p className="text-sm text-blue-300">
            © {new Date().getFullYear()} Puttaparthi Dental Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
