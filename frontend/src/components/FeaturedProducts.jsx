// src/components/FeaturedProducts.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Eye,
  Heart,
  Scale,
  Gem,
  Crown,
  Sparkles,
  Shield,
  Award,
  Zap,
} from "lucide-react";

const FeaturedProducts = () => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const products = [
    {
      id: 1,
      name: "Eternal Love Diamond Ring",
      price: "₹1,29,999",
      originalPrice: "₹1,59,999",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 142,
      isNew: true,
      isBestSeller: false,
      category: "Engagement Ring",
      purity: "24K Gold (99.9%)",
      weight: "3.2 grams",
      bisHallmark: "BIS 917",
      stoneType: "Natural Diamond",
      stoneWeight: "0.5 carat",
      stoneClarity: "VS1",
      stoneColor: "D",
      certification: "IGI Certified",
      makingCharges: "15%",
      deliveryTime: "3-5 days",
      warranty: "Lifetime",
    },
    {
      id: 2,
      name: "Golden Serenity Necklace",
      price: "₹2,49,999",
      originalPrice: "₹2,99,999",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 89,
      isNew: false,
      isBestSeller: true,
      category: "Necklace Set",
      purity: "22K Gold (91.6%)",
      weight: "18.5 grams",
      bisHallmark: "BIS 916",
      stoneType: "Emerald & Diamond",
      stoneWeight: "2.1 carats",
      stoneClarity: "VVS",
      stoneColor: "AAA",
      certification: "SGL Certified",
      makingCharges: "12%",
      deliveryTime: "5-7 days",
      warranty: "2 Years",
    },
    {
      id: 3,
      name: "Diamond Cascade Earrings",
      price: "₹1,79,999",
      originalPrice: "₹2,19,999",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
      rating: 5.0,
      reviews: 203,
      isNew: true,
      isBestSeller: false,
      category: "Earrings",
      purity: "18K Gold (75%)",
      weight: "8.7 grams",
      bisHallmark: "BIS 750",
      stoneType: "Pearl & Diamond",
      stoneWeight: "1.8 carats",
      stoneClarity: "SI1",
      stoneColor: "F",
      certification: "GIA Certified",
      makingCharges: "18%",
      deliveryTime: "2-4 days",
      warranty: "1 Year",
    },
    {
      id: 4,
      name: "Royal Heritage Bracelet",
      price: "₹3,29,999",
      originalPrice: "₹3,79,999",
      image:
        "https://images.unsplash.com/photo-1588444650700-6c7f0c89d36b?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 67,
      isNew: false,
      isBestSeller: true,
      category: "Bracelet",
      purity: "24K Gold (99.9%)",
      weight: "12.3 grams",
      bisHallmark: "BIS 917",
      stoneType: "Ruby & Diamond",
      stoneWeight: "3.5 carats",
      stoneClarity: "IF",
      stoneColor: "Pigeon Blood",
      certification: "GRS Certified",
      makingCharges: "20%",
      deliveryTime: "7-10 days",
      warranty: "Lifetime",
    },
    {
      id: 5,
      name: "Heritage Temple Necklace",
      price: "₹4,99,999",
      originalPrice: "₹5,49,999",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 156,
      isNew: true,
      isBestSeller: true,
      category: "Traditional Necklace",
      purity: "22K Gold (91.6%)",
      weight: "45.2 grams",
      bisHallmark: "BIS 916",
      stoneType: "Kundan & Polki",
      stoneWeight: "25 carats",
      stoneClarity: "Heirloom",
      stoneColor: "Traditional",
      certification: "Family Heritage",
      makingCharges: "25%",
      deliveryTime: "15-20 days",
      warranty: "Generational",
    },
    {
      id: 6,
      name: "Celestial Diamond Band",
      price: "₹89,999",
      originalPrice: "₹1,09,999",
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 98,
      isNew: false,
      isBestSeller: false,
      category: "Wedding Band",
      purity: "18K Gold (75%)",
      weight: "4.1 grams",
      bisHallmark: "BIS 750",
      stoneType: "Channel Set Diamond",
      stoneWeight: "0.8 carats",
      stoneClarity: "VS2",
      stoneColor: "G",
      certification: "HRD Certified",
      makingCharges: "10%",
      deliveryTime: "2-3 days",
      warranty: "2 Years",
    },
    {
      id: 7,
      name: "Vintage Pearl Set",
      price: "₹1,49,999",
      originalPrice: "₹1,79,999",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 87,
      isNew: true,
      isBestSeller: false,
      category: "Pearl Set",
      purity: "18K Gold (75%)",
      weight: "22.1 grams",
      bisHallmark: "BIS 750",
      stoneType: "South Sea Pearls",
      stoneWeight: "12 carats",
      stoneClarity: "AAA",
      stoneColor: "Cream",
      certification: "Pearl Certification",
      makingCharges: "18%",
      deliveryTime: "4-6 days",
      warranty: "5 Years",
    },
    {
      id: 8,
      name: "Platinum Eternity Band",
      price: "₹2,19,999",
      originalPrice: "₹2,49,999",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 134,
      isNew: false,
      isBestSeller: true,
      category: "Platinum Ring",
      purity: "95% Platinum",
      weight: "6.8 grams",
      bisHallmark: "BIS 950",
      stoneType: "Brilliant Diamond",
      stoneWeight: "1.2 carats",
      stoneClarity: "VVS1",
      stoneColor: "E",
      certification: "IGI Certified",
      makingCharges: "22%",
      deliveryTime: "3-5 days",
      warranty: "Lifetime",
    },
    {
      id: 9,
      name: "Rose Gold Bangle Set",
      price: "₹1,89,999",
      originalPrice: "₹2,29,999",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 76,
      isNew: true,
      isBestSeller: false,
      category: "Bangle Set",
      purity: "18K Rose Gold",
      weight: "28.4 grams",
      bisHallmark: "BIS 750",
      stoneType: "Pink Sapphire",
      stoneWeight: "4.3 carats",
      stoneClarity: "VS",
      stoneColor: "Hot Pink",
      certification: "GUB Certified",
      makingCharges: "16%",
      deliveryTime: "6-8 days",
      warranty: "3 Years",
    },
    {
      id: 10,
      name: "Diamond Solitaire Pendant",
      price: "₹79,999",
      originalPrice: "₹99,999",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 211,
      isNew: false,
      isBestSeller: true,
      category: "Pendant",
      purity: "14K White Gold",
      weight: "2.3 grams",
      bisHallmark: "BIS 585",
      stoneType: "Round Diamond",
      stoneWeight: "0.75 carat",
      stoneClarity: "VS2",
      stoneColor: "F",
      certification: "IGI Certified",
      makingCharges: "14%",
      deliveryTime: "2-3 days",
      warranty: "2 Years",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="featured"
      className="py-16 font-bold bg-gradient-to-b from-amber-50 to-yellow-50 relative overflow-hidden"
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

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-300"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-2 rounded-full mb-4 border border-amber-500 shadow-lg"
          >
            <Crown className="w-4 h-4 text-amber-900" />
            <span className="font-parisBold text-amber-900 text-xs tracking-wider uppercase">
              EXQUISITE COLLECTION
            </span>
            <Gem className="w-4 h-4 text-amber-900" />
          </motion.div>
          <h2 className="font-dreamAvenue text-4xl md:text-5xl bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-800 bg-clip-text text-transparent mb-4">
            Featured Masterpieces
          </h2>
          <p className="font-parisMedium text-[#703B3B] text-base max-w-2xl mx-auto leading-relaxed">
            Discover our exquisite collection of BIS-hallmarked, certified
            jewellery pieces crafted with precision and passion.
          </p>
        </motion.div>

        {/* Products Grid - 5 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative"
            >
              {/* Product Card */}
              <div className="relative bg-white rounded-2xl shadow-xl shadow-amber-200/50 overflow-hidden border border-amber-200/60">
                {/* Enhanced Shine Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/60 to-transparent z-10"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "100%", opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Golden Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 via-amber-100/40 to-yellow-200/30 z-5"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "100%", opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 z-20 flex flex-col space-y-1">
                  {product.isNew && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-parisBold flex items-center space-x-1 shadow-lg"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>NEW</span>
                    </motion.span>
                  )}
                  {product.isBestSeller && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-parisBold flex items-center space-x-1 shadow-lg"
                    >
                      <Award className="w-3 h-3" />
                      <span>BEST SELLER</span>
                    </motion.span>
                  )}
                </div>

                {/* Favorite Button */}
                <motion.button
                  onClick={() => toggleFavorite(product.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-3 right-3 z-20 p-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-amber-300 shadow-lg"
                >
                  <AnimatePresence mode="wait">
                    {favorites.has(product.id) ? (
                      <motion.div
                        key="filled"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="outline"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Heart className="w-4 h-4 text-amber-600" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Product Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-100">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />

                  {/* Enhanced Golden Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/50 to-transparent"
                    animate={{
                      x: [-100, 300],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                      repeatDelay: 5,
                    }}
                  />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-xl shadow-lg"
                    >
                      <Eye className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-2 left-2">
                    <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-2 py-1 rounded-full text-xs font-parisBold shadow-lg">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Product Name */}
                  <h3 className="font-parisBold text-[#703B3B] text-sm leading-tight mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? "fill-amber-500 text-amber-500"
                              : "fill-amber-200 text-amber-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-parisMedium text-[#703B3B] text-xs">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Key Specifications */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-parisMedium text-[#703B3B]">
                        Purity:
                      </span>
                      <span className="font-parisBold text-amber-700">
                        {product.purity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-parisMedium text-[#703B3B]">
                        Weight:
                      </span>
                      <span className="font-parisBold text-amber-700">
                        {product.weight}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-parisMedium text-[#703B3B]">
                        Stone:
                      </span>
                      <span className="font-parisBold text-amber-700">
                        {product.stoneType}
                      </span>
                    </div>
                  </div>

                  {/* BIS Hallmark & Certification */}
                  <div className="flex items-center justify-between mb-3 p-2 bg-amber-100 rounded-lg border border-amber-200">
                    <div className="flex items-center space-x-1">
                      <Shield className="w-3 h-3 text-green-600" />
                      <span className="text-green-700 text-xs font-parisBold">
                        {product.bisHallmark}
                      </span>
                    </div>
                    <div className="text-amber-700 text-xs font-parisMedium">
                      {product.certification}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="font-dreamAvenue text-xl text-[#703B3B]">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="font-parisMedium text-amber-600 line-through text-sm">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Additional Info */}
                  <div className="flex items-center justify-between text-xs text-amber-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Scale className="w-3 h-3" />
                      <span className="font-parisMedium">
                        Making: {product.makingCharges}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-3 h-3" />
                      <span className="font-parisMedium">
                        {product.deliveryTime}
                      </span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      background: "linear-gradient(to right, #d97706, #f59e0b)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-parisBold py-2 rounded-lg flex items-center justify-center space-x-2 text-sm shadow-lg shadow-amber-200"
                  >
                    <Eye className="w-3 h-3" />
                    <span>View Details</span>
                  </motion.button>
                </div>
              </div>

              {/* Enhanced Golden Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-200/50 via-yellow-100/60 to-amber-200/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 -z-10 transition-opacity duration-500"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(245, 158, 11, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-parisBold px-10 py-3 rounded-xl border-2 border-amber-400 shadow-xl"
          >
            Explore Complete Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
