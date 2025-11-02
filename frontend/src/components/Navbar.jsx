// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ShoppingBag,
  Search,
  User,
  Heart,
  Crown,
  Sparkles,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "Collections",
    "Rings",
    "Necklaces",
    "Earrings",
    "About",
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-amber-200/50"
          : "bg-transparent"
      }`}
    >
      {/* Animated Golden Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 5,
              }}
              className="relative"
            >
              <Crown className="w-8 h-8 text-amber-600" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-1 bg-amber-400/30 rounded-full blur-sm"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-dreamAvenue text-2xl bg-gradient-to-r from-amber-800 to-yellow-700 bg-clip-text text-transparent tracking-widest">
                AUREUM
              </span>
              <span className="font-parisExtraLight text-xs text-amber-600 -mt-1 tracking-widest">
                J E W E L S
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <motion.a
                  href={`${item.toLowerCase()}`}
                  whileHover={{
                    scale: 1.1,
                  }}
                  className="font-parisMedium text-amber-900/80 hover:text-amber-700 transition-colors relative group"
                >
                  {item}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 group-hover:w-full transition-all duration-300"
                    layoutId="underline"
                  />
                </motion.a>
              </motion.div>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            {[Search, Heart, User, ShoppingBag].map((Icon, index) => (
              <motion.button
                key={index}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{ scale: 0.9 }}
                className="relative p-2 rounded-full bg-amber-50/50 backdrop-blur-sm border border-amber-200/50 group"
              >
                <Icon className="w-5 h-5 text-amber-700" />
                {Icon === ShoppingBag && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-parisBold"
                  >
                    0
                  </motion.span>
                )}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 rounded-full bg-amber-50/50 backdrop-blur-sm border border-amber-200/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6 text-amber-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-6 h-6 text-amber-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-amber-200/50 shadow-xl"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      x: 10,
                      backgroundColor: "rgba(251,191,36,0.1)",
                    }}
                    className="block py-4 px-6 font-parisMedium text-amber-900 rounded-lg border border-amber-100/50 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>{item}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
