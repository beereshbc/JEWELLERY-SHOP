// src/pages/Necklaces.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingBag,
  Star,
  Sparkles,
  Crown,
  Gem,
  Clock,
  Shield,
  MapPin,
  RotateCcw,
  X,
  Plus,
  Minus,
  Phone,
  Mail,
} from "lucide-react";

const Necklaces = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");

  // Auto scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Sample necklace data with working image URLs
  const necklaces = [
    {
      id: 1,
      name: "Eternal Diamond Cascade",
      price: 2499,
      originalPrice: 2999,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
      category: "diamond",
      rating: 4.8,
      reviews: 124,
      description:
        "A breathtaking cascade of brilliant diamonds set in 18K white gold, perfect for special occasions.",
      details: [
        "18K White Gold",
        "2.5 Carat Total Diamond Weight",
        "VS1 Clarity, F Color",
        "18-inch Chain Length",
        "Lifetime Warranty",
      ],
      images: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 2,
      name: "Golden Pearl Elegance",
      price: 899,
      originalPrice: 1099,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
      category: "pearl",
      rating: 4.6,
      reviews: 89,
      description:
        "Lustrous South Sea pearls complemented by golden accents for timeless sophistication.",
      details: [
        "14K Yellow Gold",
        "8-9mm South Sea Pearls",
        "16-inch Chain",
        "Pearl Grade: AAA",
        "Includes Velvet Box",
      ],
      images: [
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1596944946755-63b77bf5dc33?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 3,
      name: "Vintage Rose Gold Locket",
      price: 650,
      originalPrice: 799,
      image:
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&h=300&fit=crop",
      category: "vintage",
      rating: 4.9,
      reviews: 67,
      description:
        "Heirloom-quality locket with intricate filigree work, holding precious memories close to heart.",
      details: [
        "14K Rose Gold",
        "2 Photo Compartments",
        "20-inch Adjustable Chain",
        "Hand-engraved Details",
        "Antique Finish",
      ],
      images: [
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 4,
      name: "Modern Geometric Statement",
      price: 1250,
      originalPrice: 1500,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop",
      category: "modern",
      rating: 4.7,
      reviews: 93,
      description:
        "Contemporary design featuring geometric patterns with alternating diamond and gold elements.",
      details: [
        "18K White and Yellow Gold",
        "1.2 Carat Diamond Accents",
        "Statement 22-inch Length",
        "Contemporary Design",
        "Customizable Length",
      ],
      images: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 5,
      name: "Celestial Star Cluster",
      price: 1750,
      originalPrice: 2100,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
      category: "diamond",
      rating: 4.8,
      reviews: 156,
      description:
        "Inspired by the night sky, this necklace features a cluster of stars with brilliant diamond centers.",
      details: [
        "Platinum Setting",
        "3.1 Carat Total Diamonds",
        "Starry Cluster Design",
        "17-inch Chain",
        "Astrological Theme",
      ],
      images: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 6,
      name: "Classic Solitaire Pendant",
      price: 3200,
      originalPrice: 3800,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
      category: "diamond",
      rating: 4.9,
      reviews: 203,
      description:
        "Timeless solitaire diamond pendant showcasing exceptional clarity and brilliance in a classic setting.",
      details: [
        "Platinum Setting",
        "2.0 Carat Center Diamond",
        "Excellent Cut Grade",
        "16-18 inch Chain",
        "GIA Certified",
      ],
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 7,
      name: "Art Deco Emerald Drop",
      price: 2850,
      originalPrice: 3200,
      image:
        "https://images.unsplash.com/photo-1596944946755-63b77bf5dc33?w=300&h=300&fit=crop",
      category: "vintage",
      rating: 4.7,
      reviews: 78,
      description:
        "Inspired by the roaring 20s, this emerald drop necklace features geometric art deco patterns.",
      details: [
        "18K White Gold",
        "3.5 Carat Emerald Center",
        "Diamond Accents",
        "20-inch Chain",
        "Art Deco Design",
      ],
      images: [
        "https://images.unsplash.com/photo-1596944946755-63b77bf5dc33?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 8,
      name: "Minimalist Gold Bar",
      price: 450,
      originalPrice: 550,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop",
      category: "modern",
      rating: 4.5,
      reviews: 167,
      description:
        "Sleek and contemporary gold bar pendant for everyday elegance and modern sophistication.",
      details: [
        "14K Yellow Gold",
        "Minimalist Design",
        "16-inch Chain",
        "Everyday Wear",
        "Modern Style",
      ],
      images: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 9,
      name: "Royal Sapphire Cascade",
      price: 3850,
      originalPrice: 4200,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
      category: "diamond",
      rating: 4.9,
      reviews: 92,
      description:
        "Regal sapphire stones surrounded by brilliant diamonds in a cascading waterfall design.",
      details: [
        "Platinum Setting",
        "4.2 Carat Sapphires",
        "2.8 Carat Diamonds",
        "18-inch Chain",
        "Royal Blue Theme",
      ],
      images: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 10,
      name: "Pearl Choker with Diamond Clasp",
      price: 1250,
      originalPrice: 1450,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
      category: "pearl",
      rating: 4.6,
      reviews: 134,
      description:
        "Elegant pearl choker featuring a stunning diamond clasp for added sparkle and sophistication.",
      details: [
        "Freshwater Pearls",
        "Diamond Clasp",
        "15-inch Choker Length",
        "Timeless Design",
        "Evening Wear",
      ],
      images: [
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1596944946755-63b77bf5dc33?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Necklaces", count: necklaces.length },
    {
      id: "diamond",
      name: "Diamond",
      count: necklaces.filter((n) => n.category === "diamond").length,
    },
    {
      id: "pearl",
      name: "Pearl",
      count: necklaces.filter((n) => n.category === "pearl").length,
    },
    {
      id: "vintage",
      name: "Vintage",
      count: necklaces.filter((n) => n.category === "vintage").length,
    },
    {
      id: "modern",
      name: "Modern",
      count: necklaces.filter((n) => n.category === "modern").length,
    },
  ];

  const filteredNecklaces =
    activeFilter === "all"
      ? necklaces
      : necklaces.filter((necklace) => necklace.category === activeFilter);

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
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-amber-900 via-amber-800 to-yellow-900 text-amber-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Shining Stars */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-200 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 8 }}
              className="inline-block mb-4"
            >
              <Crown className="w-12 h-12 text-amber-300 mx-auto" />
            </motion.div>
            <h1 className="font-dreamAvenue text-5xl md:text-6xl bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent mb-4">
              Necklaces
            </h1>
            <p className="font-parisLight text-amber-200 text-xl mb-8">
              Visit our Davangere showroom to experience these exquisite
              handcrafted necklaces in person. Each piece tells its own story of
              timeless beauty.
            </p>

            {/* Store Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-amber-800/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-700/50 inline-block"
            >
              <div className="flex items-center justify-center gap-6 text-amber-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-300" />
                  <span className="font-parisLight">
                    Jewelry Street, Davangere
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-amber-300" />
                  <span className="font-parisLight">+91 98765 43210</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
                placeholder="Search necklaces..."
                className="pl-12 pr-4 py-3 bg-amber-50 border border-amber-200/50 rounded-2xl font-parisLight text-amber-900 placeholder-amber-600/60 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 w-80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid - 5 columns on large screens */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {filteredNecklaces.map((necklace, index) => (
              <motion.div
                key={necklace.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group cursor-pointer"
                onClick={() => openProductModal(necklace)}
              >
                {/* Product Card - Medium Size */}
                <div className="bg-white rounded-2xl shadow-lg shadow-amber-900/10 border border-amber-200/50 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-900/20 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-100 flex-1">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={necklace.image}
                      alt={necklace.name}
                      className="w-full h-48 object-cover"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {necklace.originalPrice > necklace.price && (
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
                        className="bg-white/90 backdrop-blur-sm text-amber-800 px-2 py-1 rounded-full text-xs font-parisMedium border border-amber-200/50"
                      >
                        {necklace.category.toUpperCase()}
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
                        {necklace.name}
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
                              i < Math.floor(necklace.rating)
                                ? "fill-amber-500 text-amber-500"
                                : "fill-amber-200 text-amber-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-parisLight text-amber-600 text-xs">
                        ({necklace.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-dreamAvenue text-xl text-amber-800">
                        ${necklace.price}
                      </span>
                      {necklace.originalPrice > necklace.price && (
                        <span className="font-parisLight text-amber-600 line-through text-sm">
                          ${necklace.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-2 rounded-xl font-parisBold text-sm shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 transition-all flex items-center justify-center gap-1 mt-auto"
                    >
                      <Sparkles className="w-3 h-3" />
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visit Store Banner */}
      <section className="py-12 bg-gradient-to-r from-amber-700 to-amber-800 text-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-dreamAvenue text-3xl md:text-4xl mb-4">
              Visit Our Davangere Showroom
            </h2>
            <p className="font-parisLight text-amber-200 text-lg mb-8">
              Experience the brilliance of our jewelry collection in person. Our
              expert consultants are ready to help you find the perfect piece.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-amber-600/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30"
              >
                <MapPin className="w-8 h-8 text-amber-300 mx-auto mb-3" />
                <h3 className="font-parisBold text-amber-100 mb-2">Location</h3>
                <p className="font-parisLight text-amber-200">
                  Jewelry Street
                  <br />
                  Davangere - 577001
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-amber-600/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30"
              >
                <Clock className="w-8 h-8 text-amber-300 mx-auto mb-3" />
                <h3 className="font-parisBold text-amber-100 mb-2">
                  Store Hours
                </h3>
                <p className="font-parisLight text-amber-200">
                  Mon-Sat: 10AM - 8PM
                  <br />
                  Sunday: 11AM - 6PM
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-amber-600/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30"
              >
                <Phone className="w-8 h-8 text-amber-300 mx-auto mb-3" />
                <h3 className="font-parisBold text-amber-100 mb-2">Contact</h3>
                <p className="font-parisLight text-amber-200">
                  +91 98765 43210
                  <br />
                  hello@aureumjewels.com
                </p>
              </motion.div>
            </div>
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

                    {/* Store Visit Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border border-amber-200/50"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="w-6 h-6 text-amber-600" />
                        <h4 className="font-parisBold text-amber-900 text-lg">
                          Visit Our Store to Purchase
                        </h4>
                      </div>
                      <p className="font-parisLight text-amber-700 mb-4">
                        This exquisite piece is available for viewing and
                        purchase at our Davangere showroom. Experience its
                        beauty in person and receive expert consultation.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-amber-600" />
                          <span className="font-parisLight text-amber-700 text-sm">
                            +91 98765 43210
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-amber-600" />
                          <span className="font-parisLight text-amber-700 text-sm">
                            hello@aureumjewels.com
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Features - Updated for offline store */}
                    <div className="grid grid-cols-2 gap-4 py-4">
                      {[
                        {
                          icon: MapPin,
                          text: "In-Store Viewing",
                          subtext: "See it in person",
                        },
                        {
                          icon: Shield,
                          text: "Lifetime Warranty",
                          subtext: "Full coverage",
                        },
                        {
                          icon: Clock,
                          text: "Expert Consultation",
                          subtext: "Professional advice",
                        },
                        {
                          icon: RotateCcw,
                          text: "7-Day Exchange",
                          subtext: "In-store exchange",
                        },
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-amber-50 rounded-2xl border border-amber-200/50"
                        >
                          <feature.icon className="w-6 h-6 text-amber-600" />
                          <div>
                            <div className="font-parisMedium text-amber-900">
                              {feature.text}
                            </div>
                            <div className="font-parisLight text-amber-600 text-sm">
                              {feature.subtext}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-4 rounded-2xl font-parisBold shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 transition-all flex items-center justify-center gap-3"
                      >
                        <MapPin className="w-5 h-5" />
                        Visit Store to Purchase
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

export default Necklaces;
