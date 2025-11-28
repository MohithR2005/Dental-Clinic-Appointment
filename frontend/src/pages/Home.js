import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Doctor from "../components/Doctor";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Doctor />
        </div>
    );
}
