// src/App.jsx
import React from "react";
import { MotionConfig } from "framer-motion";

import "../index.css";

import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen font-bold bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <Hero />
        <FeaturedProducts />
        <Categories />
        <Testimonials />
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default Home;
