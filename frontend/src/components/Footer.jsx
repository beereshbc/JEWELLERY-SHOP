// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 text-amber-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-dreamAvenue text-2xl bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent tracking-widest">
                AUREUM JEWELS
              </h3>

              <p className="font-parisLight text-amber-200 leading-relaxed max-w-md">
                Crafting timeless elegance with precision and passion. Visit our
                showroom for a personalized jewelry experience.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-3 text-amber-200"
                >
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span className="font-parisLight">
                    Jewelry Street, Davangere - 577001
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center space-x-3 text-amber-200"
                >
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="font-parisLight">+91 98765 43210</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-3 text-amber-200"
                >
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="font-parisLight">
                    hello@aureumjewels.com
                  </span>
                </motion.div>
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-amber-800/30 backdrop-blur-sm rounded-xl p-4 border border-amber-700/50"
              >
                <h4 className="font-parisBold text-amber-300 mb-2">
                  Store Hours
                </h4>
                <div className="font-parisLight text-amber-200 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Mon - Sat:</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>11:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-parisBold text-amber-300 text-lg flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Visit Our Shop in Davangere</span>
              </h4>

              <div className="bg-amber-800/20 rounded-xl overflow-hidden border border-amber-700/50">
                {/* Google Maps Embed */}
                <div className="h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15561.97426438153!2d75.922409!3d14.464429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b12cd72d5c5%3A0x6c38e51e64e7c0f6!2sDavangere%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aureum Jewels Davangere Location"
                    className="rounded-xl"
                  />
                </div>
              </div>

              <p className="font-parisLight text-amber-200 text-sm text-center">
                Located in the heart of Davangere's jewelry district
              </p>

              {/* Directions Button */}
              <motion.a
                href="https://maps.google.com/maps?q=Davangere+Karnataka&hl=en&gl=in"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-center py-3 rounded-xl font-parisBold hover:from-amber-700 hover:to-yellow-700 transition-all shadow-lg shadow-amber-900/30"
              >
                Get Directions
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-amber-700/50 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="font-parisLight text-amber-400 text-sm flex items-center space-x-2"
            >
              <span>© {currentYear} Aureum Jewels. Made with</span>
              <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>in Davangere</span>
            </motion.p>

            <div className="flex items-center space-x-6">
              {["Privacy Policy", "Terms of Service"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ color: "#fcd34d" }}
                  className="font-parisLight text-amber-400 hover:text-amber-300 text-sm transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
