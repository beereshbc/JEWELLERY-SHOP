// src/components/Collections.jsx
import React, { useState, useEffect } from "react";
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
  X,
  ShoppingCart,
  Share2,
  Truck,
  Clock,
  CheckCircle,
  Search,
  Filter,
  Plus,
  Minus,
  RotateCcw,
} from "lucide-react";

const Collections = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const collections = [
    { id: "all", name: "All Collections", icon: Crown, count: 60 },
    { id: "rings", name: "Rings", icon: Gem, count: 15 },
    { id: "necklaces", name: "Necklaces", icon: Sparkles, count: 12 },
    { id: "earrings", name: "Earrings", icon: Award, count: 10 },
    { id: "bracelets", name: "Bracelets", icon: Shield, count: 8 },
    { id: "bangles", name: "Bangles", icon: Zap, count: 7 },
    { id: "pendants", name: "Pendants", count: 8 },
  ];

  const products = [
    {
      id: 1,
      name: "Eternal Love Diamond Ring",
      price: "₹1,29,999",
      originalPrice: "₹1,59,999",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 142,
      isNew: true,
      isBestSeller: false,
      category: "Engagement Ring",
      collection: "rings",
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
      description:
        "A breathtaking diamond engagement ring symbolizing eternal love and commitment. Crafted with precision and set in pure 24K gold.",
      features: [
        "Lifetime Warranty",
        "Free Resizing",
        "Insurance Appraisal",
        "Gift Packaging",
      ],
      details: [
        "24K Pure Gold Setting",
        "0.5 Carat Center Diamond",
        "VS1 Clarity, D Color",
        "IGI Certified",
        "Comfort Fit Band",
      ],
      images: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      ],
    },
    {
      id: 2,
      name: "Golden Serenity Necklace",
      price: "₹2,49,999",
      originalPrice: "₹2,99,999",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 89,
      isNew: false,
      isBestSeller: true,
      category: "Necklace Set",
      collection: "necklaces",
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
      description:
        "An exquisite necklace set featuring emeralds and diamonds, perfect for special occasions and celebrations.",
      features: [
        "2 Years Warranty",
        "Professional Cleaning",
        "Custom Length",
        "Premium Box",
      ],
      details: [
        "22K Gold Chain",
        "2.1 Carat Total Stones",
        "VVS Clarity Emeralds",
        "SGL Certified",
        "Adjustable Length",
      ],
      images: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
      ],
    },
    {
      id: 3,
      name: "Diamond Cascade Earrings",
      price: "₹1,79,999",
      originalPrice: "₹2,19,999",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      rating: 5.0,
      reviews: 203,
      isNew: true,
      isBestSeller: false,
      category: "Earrings",
      collection: "earrings",
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
      description:
        "Elegant cascade earrings combining the timeless beauty of pearls with the brilliance of diamonds.",
      features: [
        "1 Year Warranty",
        "Hypoallergenic",
        "Secure Clasp",
        "Gift Ready",
      ],
      details: [
        "18K Gold Setting",
        "1.8 Carat Total Stones",
        "SI1 Clarity Diamonds",
        "GIA Certified",
        "French Hook Back",
      ],
      images: [
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      ],
    },
    {
      id: 4,
      name: "Royal Heritage Bracelet",
      price: "₹3,29,999",
      originalPrice: "₹3,79,999",
      image:
        "https://images.unsplash.com/photo-1588444650700-6c7f0c89d36b?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 67,
      isNew: false,
      isBestSeller: true,
      category: "Bracelet",
      collection: "bracelets",
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
      description:
        "A majestic bracelet featuring pigeon blood rubies and brilliant diamonds, inspired by royal heritage designs.",
      features: [
        "Lifetime Warranty",
        "Size Adjustment",
        "Insurance Certificate",
        "Heritage Box",
      ],
      details: [
        "24K Gold Base",
        "3.5 Carat Total Stones",
        "IF Clarity Rubies",
        "GRS Certified",
        "Adjustable Clasp",
      ],
      images: [
        "https://images.unsplash.com/photo-1588444650700-6c7f0c89d36b?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
      ],
    },
    {
      id: 5,
      name: "Heritage Temple Necklace",
      price: "₹4,99,999",
      originalPrice: "₹5,49,999",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 156,
      isNew: true,
      isBestSeller: true,
      category: "Traditional Necklace",
      collection: "necklaces",
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
      description:
        "A magnificent traditional necklace featuring Kundan and Polki work, perfect for weddings and grand celebrations.",
      features: [
        "Generational Warranty",
        "Custom Design",
        "Family Heritage Certificate",
        "Premium Wooden Box",
      ],
      details: [
        "22K Gold Base",
        "25 Carat Total Stones",
        "Heirloom Quality",
        "Family Heritage Certified",
        "Traditional Craftsmanship",
      ],
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
      ],
    },
    {
      id: 6,
      name: "Celestial Diamond Band",
      price: "₹89,999",
      originalPrice: "₹1,09,999",
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 98,
      isNew: false,
      isBestSeller: false,
      category: "Wedding Band",
      collection: "rings",
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
      description:
        "A beautiful wedding band with channel-set diamonds, symbolizing eternal love and commitment.",
      features: [
        "2 Years Warranty",
        "Comfort Fit",
        "Laser Engraving",
        "Velvet Box",
      ],
      details: [
        "18K Gold Band",
        "0.8 Carat Channel Diamonds",
        "VS2 Clarity",
        "HRD Certified",
        "Comfort Fit Design",
      ],
      images: [
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      ],
    },
    {
      id: 7,
      name: "Platinum Eternity Band",
      price: "₹2,19,999",
      originalPrice: "₹2,49,999",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 134,
      isNew: false,
      isBestSeller: true,
      category: "Platinum Ring",
      collection: "rings",
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
      description:
        "A stunning platinum eternity band with brilliant diamonds, perfect for anniversaries and special occasions.",
      features: [
        "Lifetime Warranty",
        "Platinum Quality",
        "Diamond Certification",
        "Luxury Box",
      ],
      details: [
        "95% Platinum",
        "1.2 Carat Total Diamonds",
        "VVS1 Clarity",
        "IGI Certified",
        "Eternity Setting",
      ],
      images: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      ],
    },
    {
      id: 8,
      name: "Rose Gold Bangle Set",
      price: "₹1,89,999",
      originalPrice: "₹2,29,999",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 76,
      isNew: true,
      isBestSeller: false,
      category: "Bangle Set",
      collection: "bangles",
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
      description:
        "Elegant rose gold bangles adorned with pink sapphires, creating a romantic and sophisticated look.",
      features: [
        "3 Years Warranty",
        "Rose Gold Finish",
        "Sapphire Quality",
        "Gift Packaging",
      ],
      details: [
        "18K Rose Gold",
        "4.3 Carat Pink Sapphires",
        "VS Clarity",
        "GUB Certified",
        "Set of 3 Bangles",
      ],
      images: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
      ],
    },
    {
      id: 9,
      name: "Diamond Solitaire Pendant",
      price: "₹79,999",
      originalPrice: "₹99,999",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 211,
      isNew: false,
      isBestSeller: true,
      category: "Pendant",
      collection: "pendants",
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
      description:
        "A classic solitaire diamond pendant that adds elegance to any outfit, perfect for daily wear.",
      features: [
        "2 Years Warranty",
        "White Gold Finish",
        "Diamond Certificate",
        "Chain Included",
      ],
      details: [
        "14K White Gold",
        "0.75 Carat Solitaire",
        "VS2 Clarity",
        "IGI Certified",
        "18-inch Chain Included",
      ],
      images: [
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      ],
    },
    {
      id: 10,
      name: "Vintage Pearl Set",
      price: "₹1,49,999",
      originalPrice: "₹1,79,999",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 87,
      isNew: true,
      isBestSeller: false,
      category: "Pearl Set",
      collection: "necklaces",
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
      description:
        "A vintage-inspired pearl set featuring South Sea pearls, perfect for traditional and formal occasions.",
      features: [
        "5 Years Warranty",
        "Pearl Quality",
        "Vintage Design",
        "Complete Set",
      ],
      details: [
        "18K Gold Setting",
        "12 Carat South Sea Pearls",
        "AAA Quality",
        "Pearl Certified",
        "Complete Set with Earrings",
      ],
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
      ],
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeFilter === "all" || product.collection === activeFilter)
  );

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    document.body.style.overflow = "hidden";
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  };

  return (
    <>
      <motion.div
        className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
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
                Luxury Collections
              </h1>
              <p className="font-parisLight text-amber-200 text-xl mb-8">
                Discover our exquisite jewelry collections, each piece
                meticulously crafted with precision, passion, and the finest
                materials to celebrate your special moments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search Section */}
        <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-amber-200/50 sticky top-24 z-30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Collection Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {collections.map((collection) => {
                  const IconComponent = collection.icon || Crown;
                  return (
                    <motion.button
                      key={collection.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveFilter(collection.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full font-parisMedium text-sm transition-all ${
                        activeFilter === collection.id
                          ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg shadow-amber-500/25"
                          : "bg-amber-100 text-amber-800 hover:bg-amber-200 border border-amber-200/50"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{collection.name}</span>
                      <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded-full text-xs">
                        {collection.count}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative w-full lg:w-auto"
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search collections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-amber-50 border border-amber-200/50 rounded-2xl font-parisLight text-amber-900 placeholder-amber-600/60 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 w-full lg:w-80"
                />
                {searchQuery && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 bg-amber-200 rounded-full hover:bg-amber-300 transition-colors"
                  >
                    <X className="w-3 h-3 text-amber-700" />
                  </motion.button>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center py-6"
        >
          <p className="font-parisMedium text-amber-700">
            Showing {filteredProducts.length} of {products.length} products
            {searchQuery && (
              <span>
                {" "}
                for "<span className="font-bold">{searchQuery}</span>"
              </span>
            )}
          </p>
        </motion.div>

        {/* Products Grid - 5 columns */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="group cursor-pointer"
                  onClick={() => openProductModal(product)}
                >
                  {/* Product Card - Medium Size */}
                  <div className="bg-white rounded-2xl shadow-lg shadow-amber-900/10 border border-amber-200/50 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-900/20 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-100 flex-1">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1">
                        {product.isNew && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-parisBold shadow-lg"
                          >
                            NEW
                          </motion.span>
                        )}
                        {product.isBestSeller && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-parisBold shadow-lg"
                          >
                            BEST SELLER
                          </motion.span>
                        )}
                      </div>

                      {/* Favorite Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-amber-700 border border-amber-200/50 hover:bg-amber-50 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(product.id);
                        }}
                      >
                        <Heart
                          className={`w-3 h-3 ${
                            favorites.has(product.id)
                              ? "fill-red-500 text-red-500"
                              : ""
                          }`}
                        />
                      </motion.button>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Product Info */}
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-parisBold text-amber-900 text-sm leading-tight flex-1">
                          {product.name}
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
                                i < Math.floor(product.rating)
                                  ? "fill-amber-500 text-amber-500"
                                  : "fill-amber-200 text-amber-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-parisLight text-amber-600 text-xs">
                          ({product.reviews})
                        </span>
                      </div>

                      {/* Quick Specs */}
                      <div className="space-y-1 mb-3">
                        <div className="flex justify-between text-xs">
                          <span className="text-amber-700">Purity:</span>
                          <span className="font-parisBold text-amber-800">
                            {product.purity}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-amber-700">Weight:</span>
                          <span className="font-parisBold text-amber-800">
                            {product.weight}
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-dreamAvenue text-xl text-amber-800">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="font-parisLight text-amber-600 line-through text-sm">
                            {product.originalPrice}
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

            {/* No Results Message */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="text-amber-600 mb-4">
                  <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                </div>
                <h3 className="font-dreamAvenue text-2xl text-amber-800 mb-2">
                  No products found
                </h3>
                <p className="font-parisLight text-amber-700 mb-6">
                  Try adjusting your search terms or browse all our collections
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearchQuery("");
                    setActiveFilter("all");
                  }}
                  className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-parisBold px-8 py-3 rounded-full shadow-lg"
                >
                  View All Collections
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>
      </motion.div>

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
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
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
                        className="w-full h-full object-contain p-8"
                      />
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="p-4 border-t border-amber-200/50">
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {selectedProduct.images.map((thumb, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 border-amber-300/50 hover:border-amber-500 transition-colors"
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
                <div className="p-6 lg:p-8 overflow-y-auto">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {selectedProduct.isNew && (
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-parisBold">
                            NEW
                          </span>
                        )}
                        {selectedProduct.isBestSeller && (
                          <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-parisBold">
                            BEST SELLER
                          </span>
                        )}
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-parisBold">
                          {selectedProduct.category.toUpperCase()}
                        </span>
                      </div>
                      <h2 className="font-dreamAvenue text-2xl lg:text-3xl text-amber-900 mb-2">
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
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="font-dreamAvenue text-3xl lg:text-4xl text-amber-800">
                        {selectedProduct.price}
                      </span>
                      {selectedProduct.originalPrice && (
                        <>
                          <span className="font-parisLight text-amber-600 line-through text-xl lg:text-2xl">
                            {selectedProduct.originalPrice}
                          </span>
                          <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-parisBold">
                            Save ₹
                            {selectedProduct.originalPrice
                              ? parseInt(
                                  selectedProduct.originalPrice.replace(
                                    /[^0-9]/g,
                                    ""
                                  )
                                ) -
                                parseInt(
                                  selectedProduct.price.replace(/[^0-9]/g, "")
                                )
                              : "0"}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="font-parisLight text-amber-700 text-lg leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    {/* Key Specifications */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-parisMedium text-amber-700">
                            Purity:
                          </span>
                          <span className="font-parisBold text-amber-800">
                            {selectedProduct.purity}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-parisMedium text-amber-700">
                            Weight:
                          </span>
                          <span className="font-parisBold text-amber-800">
                            {selectedProduct.weight}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-parisMedium text-amber-700">
                            Stone Type:
                          </span>
                          <span className="font-parisBold text-amber-800">
                            {selectedProduct.stoneType}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-parisMedium text-amber-700">
                            Stone Weight:
                          </span>
                          <span className="font-parisBold text-amber-800">
                            {selectedProduct.stoneWeight}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-parisMedium text-amber-700">
                            Making Charges:
                          </span>
                          <span className="font-parisBold text-amber-800">
                            {selectedProduct.makingCharges}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-parisMedium text-amber-700">
                            Warranty:
                          </span>
                          <span className="font-parisBold text-amber-800">
                            {selectedProduct.warranty}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
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

                    {/* Features */}
                    <div>
                      <h4 className="font-parisBold text-amber-900 mb-3">
                        Features & Benefits
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProduct.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-amber-700 font-parisLight">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Features */}
                    <div className="grid grid-cols-2 gap-4 py-4">
                      {[
                        {
                          icon: Truck,
                          text: "Free Shipping",
                          subtext: "All over India",
                        },
                        {
                          icon: Shield,
                          text: "BIS Hallmark",
                          subtext: selectedProduct.bisHallmark,
                        },
                        {
                          icon: RotateCcw,
                          text: "Easy Returns",
                          subtext: "7-day return policy",
                        },
                        {
                          icon: Clock,
                          text: "Delivery Time",
                          subtext: selectedProduct.deliveryTime,
                        },
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-amber-50 rounded-2xl border border-amber-200/50"
                        >
                          <feature.icon className="w-5 h-5 text-amber-600" />
                          <div>
                            <div className="font-parisMedium text-amber-900 text-sm">
                              {feature.text}
                            </div>
                            <div className="font-parisLight text-amber-600 text-xs">
                              {feature.subtext}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4 flex-col sm:flex-row">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-4 rounded-2xl font-parisBold shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 transition-all flex items-center justify-center gap-3"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart - {selectedProduct.price}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 bg-amber-100 text-amber-800 py-4 rounded-2xl font-parisBold border border-amber-200/50 hover:bg-amber-200 transition-colors flex items-center justify-center"
                        onClick={() => toggleFavorite(selectedProduct.id)}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favorites.has(selectedProduct.id)
                              ? "fill-red-500 text-red-500"
                              : ""
                          }`}
                        />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Collections;
