// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles, Crown } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Fashion Influencer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The craftsmanship is exceptional! My engagement ring from Aureum gets compliments everywhere I go. The attention to detail is simply breathtaking.",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Business Executive",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I purchased a necklace for my wife's anniversary and she was moved to tears. The quality and elegance surpassed all expectations.",
      verified: true,
    },
    {
      id: 3,
      name: "Emily Thompson",
      role: "Bride",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with Aureum for my wedding jewelry was a dream. They understood my vision and created pieces that made me feel like royalty.",
      verified: true,
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Collector",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a jewelry collector, I'm very particular about quality. Aureum's pieces are museum-worthy. The gold work is impeccable.",
      verified: true,
    },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Recommend Us" },
    { number: "25+", label: "Years Experience" },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 top-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-4"
          >
            <Crown className="w-4 h-4 text-amber-600" />
            <span className="font-parisBold text-amber-700 text-sm tracking-wide">
              CLIENT TESTIMONIALS
            </span>
          </motion.div>
          <h2 className="font-dreamAvenue text-5xl md:text-6xl text-amber-900 mb-6">
            Loved by Customers
          </h2>
          <p className="font-parisLight text-amber-700 text-lg max-w-2xl mx-auto">
            Discover why thousands of customers trust Aureum for their most
            precious moments and cherished gifts
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-3xl shadow-lg shadow-amber-200/30 border border-amber-200/20"
            >
              <div className="font-dreamAvenue text-3xl text-amber-600 mb-2">
                {stat.number}
              </div>
              <div className="font-parisLight text-amber-700 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-amber-200/20 p-8 border border-amber-200/30 h-full">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="absolute top-6 right-6 w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center"
                >
                  <Quote className="w-6 h-6 text-amber-600" />
                </motion.div>

                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-parisLight text-amber-700 text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-200"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-parisBold text-amber-900">
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                          className="bg-green-500 rounded-full p-1"
                        >
                          <Sparkles className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </div>
                    <p className="font-parisLight text-amber-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  initial={false}
                />
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 -z-20 transition-opacity duration-500"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-parisLight text-amber-600 mb-6">
            Join thousands of satisfied customers
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-parisBold px-12 py-4 rounded-2xl shadow-lg shadow-amber-500/25"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
