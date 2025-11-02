// src/pages/Earrings.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Heart,
  ShoppingBag,
  Star,
  Sparkles,
  Crown,
  Gem,
  Clock,
  Shield,
  MapPin,
  Store,
  Phone,
  RotateCcw,
  X,
  Plus,
  Minus,
} from "lucide-react";

const Earrings = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");

  // Auto scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Sample earrings data - expanded to 15 items for 3 rows of 5
  const earrings = [
    {
      id: 1,
      name: "Diamond Stud Elegance",
      price: 1899,
      originalPrice: 2299,
      image: "/api/placeholder/300/300",
      category: "stud",
      rating: 4.9,
      reviews: 156,
      description:
        "Classic round brilliant diamond stud earrings in premium 18K white gold, perfect for everyday luxury.",
      details: [
        "18K White Gold",
        "2.0 Carat Total Diamond Weight",
        "VS1 Clarity, F Color",
        "Push Back Security",
        "Lifetime Warranty",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: true,
    },
    {
      id: 2,
      name: "Pearl Drop Romance",
      price: 750,
      originalPrice: 899,
      image: "/api/placeholder/300/300",
      category: "drop",
      rating: 4.7,
      reviews: 89,
      description:
        "Elegant freshwater pearl drops suspended from delicate gold hooks for timeless sophistication.",
      details: [
        "14K Yellow Gold",
        "8-9mm Freshwater Pearls",
        "French Hook Backs",
        "Pearl Grade: AAA",
        "Gift Box Included",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: true,
    },
    {
      id: 3,
      name: "Vintage Hoop Collection",
      price: 520,
      originalPrice: 650,
      image: "/api/placeholder/300/300",
      category: "hoop",
      rating: 4.8,
      reviews: 203,
      description:
        "Intricately designed vintage hoops with filigree patterns, inspired by Renaissance artistry.",
      details: [
        "14K Rose Gold",
        "30mm Diameter",
        "Latch Back Closure",
        "Hand-engraved Details",
        "Antique Finish",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: false,
    },
    {
      id: 4,
      name: "Geometric Statement Earrings",
      price: 980,
      originalPrice: 1200,
      image: "/api/placeholder/300/300",
      category: "statement",
      rating: 4.6,
      reviews: 67,
      description:
        "Bold geometric designs with alternating textures of gold and diamond accents for modern glamour.",
      details: [
        "18K White and Yellow Gold",
        "1.5 Carat Diamond Accents",
        "Lever Back Security",
        "Contemporary Design",
        "Lightweight Construction",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: true,
    },
    {
      id: 5,
      name: "Celestial Moon Drops",
      price: 1250,
      originalPrice: 1500,
      image: "/api/placeholder/300/300",
      category: "drop",
      rating: 4.9,
      reviews: 134,
      description:
        "Enchanting moon and star design featuring pearls and diamonds in a celestial arrangement.",
      details: [
        "Sterling Silver with Gold Vermeil",
        "Moonstone & Diamond Accents",
        "French Hook Backs",
        "Celestial Theme",
        "Evening Wear Essential",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: true,
    },
    {
      id: 6,
      name: "Classic Gold Hoops",
      price: 320,
      originalPrice: 399,
      image: "/api/placeholder/300/300",
      category: "hoop",
      rating: 4.7,
      reviews: 278,
      description:
        "Timeless gold hoops in three sizes, perfect for layering or wearing alone for everyday elegance.",
      details: [
        "14K Yellow Gold",
        "20mm, 25mm, 30mm Sizes",
        "Secure Latch Back",
        "Hollow Lightweight Design",
        "Everyday Essential",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: true,
    },
    {
      id: 7,
      name: "Art Deco Emerald Studs",
      price: 2200,
      originalPrice: 2600,
      image: "/api/placeholder/300/300",
      category: "stud",
      rating: 4.8,
      reviews: 92,
      description:
        "Square-cut emeralds surrounded by diamond halos in a geometric Art Deco inspired setting.",
      details: [
        "Platinum Setting",
        "4.0 Carat Emerald Total",
        "Diamond Halo Surround",
        "Push Back Closure",
        "Art Deco Design",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: false,
    },
    {
      id: 8,
      name: "Minimalist Gold Huggies",
      price: 280,
      originalPrice: 350,
      image: "/api/placeholder/300/300",
      category: "hoop",
      rating: 4.9,
      reviews: 345,
      description:
        "Dainty huggie hoops that nestle close to the ear, perfect for stacking or sensitive ears.",
      details: [
        "14K Yellow Gold",
        "12mm Diameter",
        "Hinged Snap Closure",
        "Hypoallergenic",
        "Sleep-in Comfort",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: true,
    },
    {
      id: 9,
      name: "Sapphire Cascade Drops",
      price: 1650,
      originalPrice: 1950,
      image: "/api/placeholder/300/300",
      category: "drop",
      rating: 4.7,
      reviews: 78,
      description:
        "Graduated sapphire stones cascading from diamond tops, creating movement and royal elegance.",
      details: [
        "18K White Gold",
        "3.8 Carat Sapphires",
        "1.2 Carat Diamonds",
        "Lever Back Security",
        "Blue Sapphire Theme",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: true,
    },
    {
      id: 10,
      name: "Pearl Cluster Statement",
      price: 890,
      originalPrice: 1100,
      image: "/api/placeholder/300/300",
      category: "statement",
      rating: 4.6,
      reviews: 112,
      description:
        "Cluster of baroque pearls in organic formation for a modern take on classic pearl earrings.",
      details: [
        "Sterling Silver",
        "Mixed Pearl Sizes",
        "French Hook Backs",
        "Organic Cluster Design",
        "Contemporary Pearl Style",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: true,
    },
    {
      id: 11,
      name: "Rose Gold Threader Earrings",
      price: 180,
      originalPrice: 220,
      image: "/api/placeholder/300/300",
      category: "drop",
      rating: 4.8,
      reviews: 189,
      description:
        "Delicate threader earrings with tiny diamond ends, creating an illusion of floating diamonds.",
      details: [
        "14K Rose Gold",
        "0.1 Carat Diamond Ends",
        "Adjustable Length",
        "Threader Style",
        "Minimalist Design",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: true,
    },
    {
      id: 12,
      name: "Victorian Cameo Earrings",
      price: 650,
      originalPrice: 750,
      image: "/api/placeholder/300/300",
      category: "vintage",
      rating: 4.7,
      reviews: 56,
      description:
        "Exquisite carved cameo portraits set in ornate gold frames, inspired by Victorian elegance.",
      details: [
        "14K Yellow Gold",
        "Hand-carved Shell Cameo",
        "Lever Back Closure",
        "Antique Finish",
        "Victorian Style",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: false,
    },
    {
      id: 13,
      name: "Diamond Chandeliers",
      price: 3200,
      originalPrice: 3800,
      image: "/api/placeholder/300/300",
      category: "statement",
      rating: 4.9,
      reviews: 45,
      description:
        "Luxurious chandelier earrings featuring multiple tiers of brilliant round diamonds.",
      details: [
        "Platinum Setting",
        "5.5 Carat Total Weight",
        "Multi-tier Design",
        "Secure French Hooks",
        "Black Tie Events",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: true,
    },
    {
      id: 14,
      name: "Moon Phase Crystal Studs",
      price: 420,
      originalPrice: 520,
      image: "/api/placeholder/300/300",
      category: "stud",
      rating: 4.6,
      reviews: 167,
      description:
        "Mystical moon phase design with crystal and moonstone accents in sterling silver.",
      details: [
        "Sterling Silver",
        "Moonstone & Crystal",
        "Push Back Closure",
        "Celestial Theme",
        "Boho Style",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: true,
    },
    {
      id: 15,
      name: "Tassel Drop Earrings",
      price: 380,
      originalPrice: 450,
      image: "/api/placeholder/300/300",
      category: "drop",
      rating: 4.5,
      reviews: 134,
      description:
        "Playful tassel design in gold with delicate chains that create movement with every step.",
      details: [
        "Gold Vermeil",
        "Multiple Chain Lengths",
        "French Hook Backs",
        "Tassel Design",
        "Bohemian Style",
      ],
      images: [
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
        "/api/placeholder/400/400",
      ],
      inStock: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Earrings", count: earrings.length },
    {
      id: "stud",
      name: "Stud Earrings",
      count: earrings.filter((e) => e.category === "stud").length,
    },
    {
      id: "hoop",
      name: "Hoop Earrings",
      count: earrings.filter((e) => e.category === "hoop").length,
    },
    {
      id: "drop",
      name: "Drop Earrings",
      count: earrings.filter((e) => e.category === "drop").length,
    },
    {
      id: "statement",
      name: "Statement Earrings",
      count: earrings.filter((e) => e.category === "statement").length,
    },
    {
      id: "vintage",
      name: "Vintage Style",
      count: earrings.filter((e) => e.category === "vintage").length,
    },
  ];

  // Store information
  const storeInfo = {
    name: "Luxury Jewelers Boutique",
    address: "123 Diamond District, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    hours: {
      Monday: "10:00 AM - 6:00 PM",
      Tuesday: "10:00 AM - 6:00 PM",
      Wednesday: "10:00 AM - 6:00 PM",
      Thursday: "10:00 AM - 8:00 PM",
      Friday: "10:00 AM - 6:00 PM",
      Saturday: "11:00 AM - 5:00 PM",
      Sunday: "Closed",
    },
  };

  const filteredEarrings =
    activeFilter === "all"
      ? earrings
      : earrings.filter((earring) => earring.category === activeFilter);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    document.body.style.overflow = "hidden";
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-amber-900 to-rose-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-amber-300/20 rounded-full"
              style={{
                width: `${100 + i * 40}px`,
                height: `${100 + i * 40}px`,
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Sparkling dots */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-300 rounded-full"
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + (i % 4) * 25}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Animated Icon */}
            <motion.div
              animate={{
                rotate: [0, -5, 5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="inline-block mb-6"
            >
              <Gem className="w-16 h-16 text-amber-300 mx-auto drop-shadow-lg" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="font-dreamAvenue text-6xl md:text-7xl bg-gradient-to-r from-amber-200 via-amber-300 to-rose-200 bg-clip-text text-transparent mb-6 drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Earrings Collection
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="font-parisLight text-amber-100 text-xl md:text-2xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Visit our exclusive boutique to experience these stunning earrings
              in person. Our expert jewelers will help you find the perfect pair
              that complements your unique style.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-2xl font-parisBold text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all flex items-center gap-3"
              >
                <MapPin className="w-5 h-5" />
                Visit Our Store
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-amber-100 border border-amber-300/30 rounded-2xl font-parisMedium text-lg hover:bg-white/30 transition-all flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call to Inquire
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-amber-300/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              {[
                { number: "500+", label: "Styles Available" },
                { number: "4.9★", label: "Customer Rating" },
                { number: "1", label: "Exclusive Boutique" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="font-dreamAvenue text-2xl text-amber-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="font-parisLight text-amber-200 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-amber-300 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Store Information Banner */}
      <section className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Store className="w-6 h-6 text-amber-300" />
              <div>
                <h3 className="font-parisBold text-lg">{storeInfo.name}</h3>
                <p className="font-parisLight text-amber-200 text-sm">
                  {storeInfo.address}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-amber-300" />
              <span className="font-parisMedium">{storeInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-300" />
              <span className="font-parisLight text-amber-200 text-sm">
                Mon-Sat: 10AM-6PM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-amber-200/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-parisMedium text-sm transition-all ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg shadow-amber-500/25"
                      : "bg-amber-100 text-amber-800 hover:bg-amber-200 border border-amber-200/50"
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Search earrings..."
                className="pl-12 pr-4 py-3 bg-amber-50 border border-amber-200/50 rounded-2xl font-parisLight text-amber-900 placeholder-amber-600/60 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 w-80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid - 5 columns on medium screens and up */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {filteredEarrings.map((earring, index) => (
              <motion.div
                key={earring.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group cursor-pointer"
                onClick={() => openProductModal(earring)}
              >
                {/* Product Card - Medium Size */}
                <div className="bg-white rounded-2xl shadow-lg shadow-amber-900/10 border border-amber-200/50 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-900/20 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-100 flex-1">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={earring.image}
                      alt={earring.name}
                      className="w-full h-48 object-cover"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {earring.originalPrice > earring.price && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-2 py-1 rounded-full text-xs font-parisBold shadow-lg"
                        >
                          SALE
                        </motion.span>
                      )}
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className={`px-2 py-1 rounded-full text-xs font-parisMedium border ${
                          earring.inStock
                            ? "bg-green-100 text-green-800 border-green-200/50"
                            : "bg-amber-100 text-amber-800 border-amber-200/50"
                        }`}
                      >
                        {earring.inStock ? "IN STORE" : "CHECK AVAILABILITY"}
                      </motion.span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex gap-1">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-amber-700 border border-amber-200/50 hover:bg-amber-50 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add to wishlist functionality
                        }}
                      >
                        <Heart className="w-3 h-3" />
                      </motion.button>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-parisBold text-amber-900 text-sm leading-tight flex-1">
                        {earring.name}
                      </h3>
                      <Gem className="w-4 h-4 text-amber-600 flex-shrink-0 ml-1 mt-0.5" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(earring.rating)
                                ? "fill-amber-500 text-amber-500"
                                : "fill-amber-200 text-amber-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-parisLight text-amber-600 text-xs">
                        ({earring.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-dreamAvenue text-xl text-amber-800">
                        ${earring.price}
                      </span>
                      {earring.originalPrice > earring.price && (
                        <span className="font-parisLight text-amber-600 line-through text-sm">
                          ${earring.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-2 rounded-xl font-parisBold text-sm shadow-lg transition-all flex items-center justify-center gap-1 mt-auto ${
                        earring.inStock
                          ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35"
                          : "bg-amber-200 text-amber-700 shadow-amber-900/10 hover:bg-amber-300"
                      }`}
                    >
                      <Store className="w-3 h-3" />
                      {earring.inStock
                        ? "Visit Store to Buy"
                        : "Check Availability"}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProductModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Image Gallery */}
                <div className="relative bg-gradient-to-br from-amber-100 to-yellow-100">
                  <button
                    onClick={closeProductModal}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-amber-700 border border-amber-200/50 hover:bg-amber-50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="h-full flex flex-col">
                    {/* Main Image */}
                    <div className="flex-1 relative">
                      <motion.img
                        key={selectedProduct.image}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="p-4 border-t border-amber-200/50">
                      <div className="flex gap-3">
                        {selectedProduct.images.map((thumb, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-16 h-16 rounded-xl overflow-hidden border-2 border-amber-300/50 hover:border-amber-500 transition-colors"
                          >
                            <img
                              src={thumb}
                              alt={`${selectedProduct.name} view ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-8 overflow-y-auto">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-parisBold">
                          {selectedProduct.category.toUpperCase()}
                        </span>
                        {selectedProduct.originalPrice >
                          selectedProduct.price && (
                          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-parisBold">
                            SALE
                          </span>
                        )}
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-parisBold ${
                            selectedProduct.inStock
                              ? "bg-green-100 text-green-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {selectedProduct.inStock
                            ? "IN STORE"
                            : "CHECK AVAILABILITY"}
                        </span>
                      </div>
                      <h2 className="font-dreamAvenue text-3xl text-amber-900 mb-2">
                        {selectedProduct.name}
                      </h2>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(selectedProduct.rating)
                                    ? "fill-amber-500 text-amber-500"
                                    : "fill-amber-200 text-amber-200"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-parisLight text-amber-600">
                            {selectedProduct.rating} ({selectedProduct.reviews}{" "}
                            reviews)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-4">
                      <span className="font-dreamAvenue text-4xl text-amber-800">
                        ${selectedProduct.price}
                      </span>
                      {selectedProduct.originalPrice >
                        selectedProduct.price && (
                        <>
                          <span className="font-parisLight text-amber-600 line-through text-2xl">
                            ${selectedProduct.originalPrice}
                          </span>
                          <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-parisBold">
                            Save $
                            {selectedProduct.originalPrice -
                              selectedProduct.price}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="font-parisLight text-amber-700 text-lg leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-3">
                      <h4 className="font-parisBold text-amber-900 text-lg">
                        Product Details
                      </h4>
                      <ul className="space-y-2">
                        {selectedProduct.details.map((detail, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 font-parisLight text-amber-700"
                          >
                            <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Store Information */}
                    <div className="bg-amber-50 border border-amber-200/50 rounded-2xl p-6">
                      <h4 className="font-parisBold text-amber-900 text-lg mb-4 flex items-center gap-2">
                        <Store className="w-5 h-5 text-amber-600" />
                        Visit Our Store
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                          <div>
                            <div className="font-parisMedium text-amber-900">
                              {storeInfo.name}
                            </div>
                            <div className="font-parisLight text-amber-700 text-sm">
                              {storeInfo.address}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                          <span className="font-parisMedium text-amber-900">
                            {storeInfo.phone}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                          <div>
                            <div className="font-parisMedium text-amber-900 mb-1">
                              Store Hours
                            </div>
                            {Object.entries(storeInfo.hours).map(
                              ([day, hours]) => (
                                <div
                                  key={day}
                                  className="flex justify-between gap-4 font-parisLight text-amber-700 text-sm"
                                >
                                  <span>{day}:</span>
                                  <span>{hours}</span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 py-4 rounded-2xl font-parisBold shadow-lg transition-all flex items-center justify-center gap-3 ${
                          selectedProduct.inStock
                            ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35"
                            : "bg-amber-200 text-amber-700 shadow-amber-900/10 hover:bg-amber-300"
                        }`}
                      >
                        <Store className="w-5 h-5" />
                        {selectedProduct.inStock
                          ? "Visit Store to Purchase"
                          : "Call to Check Availability"}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 bg-amber-100 text-amber-800 py-4 rounded-2xl font-parisBold border border-amber-200/50 hover:bg-amber-200 transition-colors flex items-center justify-center"
                      >
                        <Heart className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Earrings;
