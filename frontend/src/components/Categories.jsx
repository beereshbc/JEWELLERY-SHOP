// src/components/Categories.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Diamond,
  Crown,
  Gem,
  Sparkles,
  ArrowRight,
  Star,
  Award,
} from "lucide-react";

const Categories = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.03, 1]);

  const categories = [
    {
      id: 1,
      name: "Engagement Rings",
      description:
        "Symbolize your eternal love with masterfully crafted diamonds",
      icon: Diamond,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=350&h=450&fit=crop",
      count: "150+ Designs",
      rating: 4.9,
      gradient: "from-amber-400/40 via-yellow-500/30 to-orange-400/20",
      accent: "bg-gradient-to-br from-amber-300 to-yellow-400",
      badge: "BEST SELLER",
    },
    {
      id: 2,
      name: "Royal Necklaces",
      description: "Make a statement of timeless elegance",
      icon: Crown,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=350&h=450&fit=crop",
      count: "89+ Designs",
      rating: 4.8,
      gradient: "from-amber-500/35 via-orange-400/25 to-red-400/15",
      accent: "bg-gradient-to-br from-amber-400 to-orange-400",
      badge: "PREMIUM",
    },
    {
      id: 3,
      name: "Luxury Earrings",
      description: "Frame your beauty with exquisite precision",
      icon: Gem,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=350&h=450&fit=crop",
      count: "120+ Designs",
      rating: 5.0,
      gradient: "from-yellow-500/30 via-amber-600/25 to-brown-600/20",
      accent: "bg-gradient-to-br from-yellow-300 to-amber-500",
      badge: "NEW",
    },
    {
      id: 4,
      name: "Premium Bracelets",
      description: "Adorn your wrist with unparalleled grace",
      icon: Sparkles,
      image:
        "https://images.unsplash.com/photo-1588444650700-6c7f0c89d36b?w=350&h=450&fit=crop",
      count: "75+ Designs",
      rating: 4.7,
      gradient: "from-amber-600/25 via-yellow-700/20 to-brown-700/15",
      accent: "bg-gradient-to-br from-amber-500 to-yellow-600",
      badge: "TRENDING",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="categories"
      className="py-20 bg-gradient-to-b from-amber-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Golden Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Parallax Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-72 h-72 bg-amber-400/10 rounded-full blur-4xl -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        style={{ y: yReverse }}
        className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-600/10 rounded-full blur-4xl translate-x-1/2 translate-y-1/2"
      />

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ scale }}
        className="container mx-auto px-4 relative z-10 max-w-6xl"
      >
        {/* Section Header - Matching FeaturedProducts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-2 rounded-full mb-4 border border-amber-500 shadow-lg"
          >
            <Crown className="w-4 h-4 text-amber-900" />
            <span className="font-parisBold text-amber-900 text-xs tracking-wider uppercase">
              EXQUISITE COLLECTIONS
            </span>
            <Gem className="w-4 h-4 text-amber-900" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-dreamAvenue text-4xl md:text-5xl mb-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-800 bg-clip-text text-transparent"
          >
            Luxury Categories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-parisMedium text-[#703B3B] text-base max-w-2xl mx-auto leading-relaxed"
          >
            Discover our meticulously curated categories, each piece crafted to
            embody timeless elegance
          </motion.p>
        </motion.div>

        {/* Categories Grid - Matching FeaturedProducts Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => {
            const cardY = useTransform(
              scrollYProgress,
              [0, 1],
              [0, -15 * (index + 1)]
            );

            return (
              <motion.div
                key={category.id}
                style={{ y: cardY }}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                {/* Glowing Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />

                {/* Main Card */}
                <div className="relative bg-white rounded-2xl shadow-xl shadow-amber-200/50 overflow-hidden border border-amber-200/60 backdrop-blur-sm">
                  {/* Enhanced Shine Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/60 to-transparent z-10"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 z-20">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-parisBold flex items-center space-x-1 shadow-lg"
                    >
                      <Award className="w-3 h-3" />
                      <span>{category.badge}</span>
                    </motion.span>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-100">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-[#703B3B]/80 via-[#703B3B]/30 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500`}
                    />

                    {/* Icon Badge */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute top-3 right-3 ${category.accent} p-3 rounded-xl shadow-lg shadow-amber-500/20 border border-amber-300/20`}
                    >
                      <category.icon className="w-5 h-5 text-brown-900 font-bold" />
                    </motion.div>

                    {/* Rating */}
                    <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span className="font-parisBold text-[#703B3B] text-xs">
                        {category.rating}
                      </span>
                    </div>

                    {/* Shine Sweep */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent -skew-x-12 transform"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-5">
                    <motion.h3
                      whileHover={{ x: 3 }}
                      className="font-dreamAvenue text-xl mb-2 text-[#703B3B] group-hover:text-amber-800 transition-colors duration-300"
                    >
                      {category.name}
                    </motion.h3>
                    <p className="font-parisMedium text-[#703B3B]/70 mb-4 text-sm leading-relaxed">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-amber-600/20">
                      <span className="font-parisBold text-amber-700 text-sm tracking-wide">
                        {category.count}
                      </span>
                      <motion.button
                        whileHover={{ x: 4, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-yellow-700 px-4 py-2 rounded-lg font-parisBold text-white text-sm group/btn shadow-lg shadow-amber-700/20 border border-amber-500/20"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-500/15 to-amber-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 -z-10 transition-all duration-500"
                  initial={false}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="relative bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl p-10 text-white overflow-hidden border border-amber-400 shadow-2xl shadow-amber-500/30 backdrop-blur-sm max-w-2xl mx-auto">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                  }}
                />
              ))}
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-dreamAvenue text-3xl md:text-4xl mb-4 text-white"
            >
              Custom Design
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-parisMedium text-amber-100 mb-6 text-lg leading-relaxed max-w-xl mx-auto"
            >
              Let our master artisans create a unique piece that captures your
              vision
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.05,
                background:
                  "linear-gradient(135deg, #f59e0b, #d97706, #f59e0b)",
                boxShadow: "0 15px 30px rgba(245, 158, 11, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-white font-dreamAvenue px-8 py-4 rounded-xl text-amber-700 text-lg flex items-center space-x-2 mx-auto shadow-lg shadow-amber-700/30 border border-amber-300 overflow-hidden group"
            >
              {/* Button Shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent -skew-x-12 transform"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.7 }}
              />
              <span className="relative">Create Masterpiece</span>
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Categories;
