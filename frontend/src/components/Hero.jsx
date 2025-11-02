// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Gem, Crown, Star } from "lucide-react";

const Hero = () => {
  const floatingIcons = [
    { Icon: Gem, delay: 0 },
    { Icon: Crown, delay: 1 },
    { Icon: Star, delay: 2 },
    { Icon: Sparkles, delay: 1.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-amber-200 to-yellow-200"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${20 + index * 20}%`,
            top: `${20 + (index % 2) * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay,
          }}
        >
          <Icon className="w-8 h-8 text-amber-400/40" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span className="font-parisBold text-white text-sm tracking-wider">
              PREMIUM COLLECTION 2024
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-dreamAvenue text-6xl md:text-8xl lg:text-9xl text-amber-900 mb-6 leading-tight"
          >
            <motion.span
              className="block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(245,158,11,0.5)",
                  "0 0 30px rgba(245,158,11,0.8)",
                  "0 0 20px rgba(245,158,11,0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              SIDDESHWARA
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-800 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              JEWELLRY
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-parisLight text-xl md:text-2xl text-amber-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Where timeless craftsmanship meets modern luxury. Discover our
            exquisite collection of handcrafted golden jewellery that tells your
            unique story.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: "spring" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(245,158,11,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-parisBold px-12 py-5 rounded-2xl flex items-center space-x-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Explore Collection</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(251,191,36,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-amber-400 text-amber-700 font-parisMedium px-12 py-5 rounded-2xl backdrop-blur-sm"
            >
              Book Consultation
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "50+", label: "Designs" },
              { number: "10K+", label: "Customers" },
              { number: "25+", label: "Awards" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-dreamAvenue text-3xl text-amber-600 mb-1">
                  {stat.number}
                </div>
                <div className="font-parisLight text-amber-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="font-parisLight text-amber-600 text-sm">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-amber-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Golden Shine Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-50/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
