// src/pages/Rings.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Heart,
  Share2,
  ZoomIn,
  Crown,
  Sparkles,
  Star,
  Award,
  Gem,
  Shield,
  Truck,
  Clock,
  Check,
  X,
  ArrowRight,
  ShoppingBag,
  Scale,
} from "lucide-react";

const Rings = () => {
  const [selectedRing, setSelectedRing] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRings, setFilteredRings] = useState([]);

  const ringsData = [
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
      isBestSeller: true,
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
      description:
        "A magnificent diamond engagement ring symbolizing eternal love and commitment. Crafted with precision and set in premium 24K gold.",
      features: [
        "Conflict-Free Diamond",
        "Lifetime Warranty",
        "Free Resizing",
        "Insurance Appraisal",
      ],
      images: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 2,
      name: "Royal Heritage Wedding Band",
      price: "₹89,999",
      originalPrice: "₹1,09,999",
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 89,
      isNew: false,
      isBestSeller: true,
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
      description:
        "Elegant wedding band featuring channel-set diamonds in luxurious 18K gold. Perfect for eternal commitment.",
      features: [
        "Comfort Fit",
        "Scratch Resistant",
        "Free Engraving",
        "30-day Exchange",
      ],
      images: [
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 3,
      name: "Celestial Diamond Band",
      price: "₹2,49,999",
      originalPrice: "₹2,89,999",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 5.0,
      reviews: 203,
      isNew: true,
      isBestSeller: false,
      category: "Designer Ring",
      purity: "22K Gold (91.6%)",
      weight: "8.7 grams",
      bisHallmark: "BIS 916",
      stoneType: "Pearl & Diamond",
      stoneWeight: "1.8 carats",
      stoneClarity: "SI1",
      stoneColor: "F",
      certification: "GIA Certified",
      makingCharges: "18%",
      deliveryTime: "4-6 days",
      warranty: "Lifetime",
      description:
        "A celestial-inspired ring featuring exquisite pearls and brilliant diamonds in 22K gold setting.",
      features: [
        "Handcrafted",
        "Limited Edition",
        "Custom Sizing",
        "Premium Packaging",
      ],
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 4,
      name: "Platinum Eternity Band",
      price: "₹2,19,999",
      originalPrice: "₹2,49,999",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      rating: 4.8,
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
      description:
        "Stunning platinum eternity band with brilliant-cut diamonds in secure channel setting.",
      features: [
        "Hypoallergenic",
        "Premium Platinum",
        "Secure Setting",
        "International Certification",
      ],
      images: [
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1588444650700-6c7f0c89d36b?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 5,
      name: "Rose Gold Bangle Ring",
      price: "₹1,49,999",
      originalPrice: "₹1,79,999",
      image:
        "https://images.unsplash.com/photo-1588444650700-6c7f0c89d36b?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 76,
      isNew: true,
      isBestSeller: false,
      category: "Fashion Ring",
      purity: "18K Rose Gold",
      weight: "7.4 grams",
      bisHallmark: "BIS 750",
      stoneType: "Pink Sapphire",
      stoneWeight: "2.3 carats",
      stoneClarity: "VS",
      stoneColor: "Hot Pink",
      certification: "GUB Certified",
      makingCharges: "16%",
      deliveryTime: "6-8 days",
      warranty: "3 Years",
      description:
        "Elegant rose gold ring featuring stunning pink sapphire in contemporary design.",
      features: [
        "Rose Gold Finish",
        "Contemporary Design",
        "Gift Ready",
        "Size Guide Included",
      ],
      images: [
        "https://images.unsplash.com/photo-1588444650700-6c7f0c89d36b?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 6,
      name: "Vintage Pearl Ring",
      price: "₹99,999",
      originalPrice: "₹1,29,999",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 87,
      isNew: false,
      isBestSeller: true,
      category: "Vintage Ring",
      purity: "14K White Gold",
      weight: "5.2 grams",
      bisHallmark: "BIS 585",
      stoneType: "South Sea Pearls",
      stoneWeight: "3 carats",
      stoneClarity: "AAA",
      stoneColor: "Cream",
      certification: "Pearl Certification",
      makingCharges: "14%",
      deliveryTime: "4-6 days",
      warranty: "5 Years",
      description:
        "Vintage-inspired ring featuring premium South Sea pearls in elegant white gold setting.",
      features: [
        "Vintage Design",
        "Pearl Certification",
        "Antique Finish",
        "Heirloom Quality",
      ],
      images: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 7,
      name: "Golden Solitaire Ring",
      price: "₹1,79,999",
      originalPrice: "₹2,09,999",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 156,
      isNew: true,
      isBestSeller: false,
      category: "Solitaire Ring",
      purity: "18K Gold (75%)",
      weight: "4.5 grams",
      bisHallmark: "BIS 750",
      stoneType: "Round Diamond",
      stoneWeight: "1.0 carat",
      stoneClarity: "VVS2",
      stoneColor: "F",
      certification: "IGI Certified",
      makingCharges: "17%",
      deliveryTime: "3-4 days",
      warranty: "Lifetime",
      description:
        "Classic solitaire ring with a brilliant round diamond in elegant 18K gold setting.",
      features: [
        "Classic Design",
        "Secure Prong Setting",
        "Comfort Fit",
        "Lifetime Warranty",
      ],
      images: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 8,
      name: "Diamond Cluster Ring",
      price: "₹2,89,999",
      originalPrice: "₹3,29,999",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 92,
      isNew: false,
      isBestSeller: true,
      category: "Cluster Ring",
      purity: "22K Gold (91.6%)",
      weight: "9.2 grams",
      bisHallmark: "BIS 916",
      stoneType: "Multiple Diamonds",
      stoneWeight: "2.5 carats",
      stoneClarity: "VS1",
      stoneColor: "G",
      certification: "GIA Certified",
      makingCharges: "20%",
      deliveryTime: "5-7 days",
      warranty: "Lifetime",
      description:
        "Stunning cluster ring featuring multiple diamonds arranged in a beautiful floral pattern.",
      features: [
        "Floral Design",
        "Multiple Diamonds",
        "Secure Setting",
        "Premium Finish",
      ],
      images: [
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1588444650700-6c7f0c89d36b?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 9,
      name: "Emerald Cut Ring",
      price: "₹3,49,999",
      originalPrice: "₹3,89,999",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 78,
      isNew: true,
      isBestSeller: false,
      category: "Emerald Ring",
      purity: "24K Gold (99.9%)",
      weight: "6.8 grams",
      bisHallmark: "BIS 917",
      stoneType: "Emerald Cut Diamond",
      stoneWeight: "2.0 carats",
      stoneClarity: "VVS1",
      stoneColor: "D",
      certification: "IGI Certified",
      makingCharges: "25%",
      deliveryTime: "7-10 days",
      warranty: "Lifetime",
      description:
        "Elegant emerald cut diamond ring with step-cut facets in premium 24K gold.",
      features: [
        "Emerald Cut",
        "Step-Cut Facets",
        "Vintage Appeal",
        "Premium Gold",
      ],
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 10,
      name: "Art Deco Ring",
      price: "₹1,99,999",
      originalPrice: "₹2,29,999",
      image:
        "https://images.unsplash.com/photo-1588444650700-6c7f0c89d36b?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 113,
      isNew: false,
      isBestSeller: true,
      category: "Art Deco Ring",
      purity: "18K White Gold",
      weight: "7.1 grams",
      bisHallmark: "BIS 750",
      stoneType: "Sapphire & Diamond",
      stoneWeight: "1.8 carats",
      stoneClarity: "VS2",
      stoneColor: "Blue",
      certification: "GUB Certified",
      makingCharges: "19%",
      deliveryTime: "4-6 days",
      warranty: "5 Years",
      description:
        "Art Deco inspired ring with geometric patterns featuring sapphires and diamonds.",
      features: [
        "Art Deco Design",
        "Geometric Patterns",
        "Vintage Style",
        "Unique Craftsmanship",
      ],
      images: [
        "https://images.unsplash.com/photo-1588444650700-6c7f0c89d36b?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      ],
    },
  ];

  // Filter and search functionality
  useEffect(() => {
    let results = ringsData;

    // Search filter
    if (searchTerm) {
      results = results.filter(
        (ring) =>
          ring.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ring.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ring.stoneType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort functionality
    switch (sortBy) {
      case "price-low":
        results.sort(
          (a, b) =>
            parseFloat(a.price.replace(/[^0-9.]/g, "")) -
            parseFloat(b.price.replace(/[^0-9.]/g, ""))
        );
        break;
      case "price-high":
        results.sort(
          (a, b) =>
            parseFloat(b.price.replace(/[^0-9.]/g, "")) -
            parseFloat(a.price.replace(/[^0-9.]/g, ""))
        );
        break;
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        results.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - best sellers and new items first
        results.sort((a, b) => {
          if (a.isBestSeller && !b.isBestSeller) return -1;
          if (!a.isBestSeller && b.isBestSeller) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
    }

    setFilteredRings(results);
  }, [searchTerm, sortBy]);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleFavorite = (ringId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(ringId)) {
      newFavorites.delete(ringId);
    } else {
      newFavorites.add(ringId);
    }
    setFavorites(newFavorites);
  };

  const openRingModal = (ring) => {
    setSelectedRing(ring);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeRingModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedRing(null), 300);
    document.body.style.overflow = "unset";
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

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-50 pt-24"
    >
      {/* Header Section */}
      <section className="relative py-16 bg-gradient-to-r from-amber-500 to-yellow-500 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-200 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-amber-300/30"
            >
              <Crown className="w-5 h-5" />
              <span className="font-bold text-sm tracking-widest">
                EXQUISITE COLLECTION
              </span>
              <Gem className="w-5 h-5" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-5xl md:text-6xl mb-6"
            >
              Premium Rings
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-medium text-amber-100 text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Discover our exquisite collection of BIS-hallmarked, certified
              rings crafted with precision and passion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-amber-200/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative flex-1 max-w-md"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Search rings by name, category, or stone type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-amber-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium text-amber-900 placeholder-amber-600/60"
              />
            </motion.div>

            {/* Sort and Filter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-amber-900"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-amber-500/30"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rings Grid - 5 columns */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {filteredRings.map((ring, index) => (
              <motion.div
                key={ring.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl shadow-xl shadow-amber-200/50 overflow-hidden border border-amber-200/60">
                  {/* Enhanced Shine Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/60 to-transparent z-10"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 z-20 flex flex-col space-y-1">
                    {ring.isNew && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>NEW</span>
                      </motion.span>
                    )}
                    {ring.isBestSeller && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg"
                      >
                        <Award className="w-3 h-3" />
                        <span>BEST SELLER</span>
                      </motion.span>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <motion.button
                    onClick={() => toggleFavorite(ring.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-3 right-3 z-20 p-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-amber-300 shadow-lg"
                  >
                    <AnimatePresence mode="wait">
                      {favorites.has(ring.id) ? (
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

                  {/* Image Container */}
                  <div
                    className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-100 cursor-pointer"
                    onClick={() => openRingModal(ring)}
                  >
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                      src={ring.image}
                      alt={ring.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-xl shadow-lg"
                      >
                        <ZoomIn className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span className="font-bold text-amber-900 text-xs">
                        {ring.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-serif text-lg text-[#703B3B] mb-1 line-clamp-2">
                      {ring.name}
                    </h3>
                    <p className="font-medium text-amber-600 text-xs mb-3">
                      {ring.category}
                    </p>

                    {/* Specifications */}
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-amber-700">
                          Purity:
                        </span>
                        <span className="font-bold text-amber-900">
                          {ring.purity.split(" ")[0]}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-amber-700">
                          Stone:
                        </span>
                        <span className="font-bold text-amber-900">
                          {ring.stoneType.split(" ")[0]}
                        </span>
                      </div>
                    </div>

                    {/* BIS Hallmark */}
                    <div className="flex items-center justify-between mb-3 p-2 bg-amber-100 rounded-lg border border-amber-200">
                      <div className="flex items-center space-x-1">
                        <Shield className="w-3 h-3 text-green-600" />
                        <span className="text-green-700 text-xs font-bold">
                          {ring.bisHallmark}
                        </span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-serif text-xl text-[#703B3B]">
                          {ring.price}
                        </span>
                        {ring.originalPrice && (
                          <span className="font-medium text-amber-600 line-through text-xs ml-1">
                            {ring.originalPrice}
                          </span>
                        )}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openRingModal(ring)}
                        className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold px-3 py-2 rounded-lg flex items-center space-x-1 shadow-lg shadow-amber-500/30 text-xs"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-500/15 to-amber-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 -z-10 transition-all duration-500"
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredRings.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <Gem className="w-16 h-16 text-amber-300 mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-[#703B3B] mb-2">
                No rings found
              </h3>
              <p className="text-amber-600">
                Try adjusting your search criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Ring Inspection Modal */}
      <AnimatePresence>
        {isModalOpen && selectedRing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeRingModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Golden Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-yellow-100/20 to-amber-100/30 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeRingModal}
                className="absolute top-4 right-4 z-50 p-2 bg-white/80 backdrop-blur-sm rounded-full border border-amber-300 shadow-lg"
              >
                <X className="w-5 h-5 text-amber-700" />
              </motion.button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Image Gallery */}
                <div className="relative bg-gradient-to-br from-amber-100 to-yellow-100">
                  <motion.img
                    key={selectedRing.image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={selectedRing.image}
                    alt={selectedRing.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />

                  {/* Favorite Button */}
                  <motion.button
                    onClick={() => toggleFavorite(selectedRing.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full border border-amber-300 shadow-lg"
                  >
                    <AnimatePresence mode="wait">
                      {favorites.has(selectedRing.id) ? (
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
                </div>

                {/* Product Details */}
                <div className="p-6 overflow-y-auto">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-3">
                      {selectedRing.isNew && (
                        <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                          NEW
                        </span>
                      )}
                      {selectedRing.isBestSeller && (
                        <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          BEST SELLER
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-2xl text-[#703B3B] mb-1">
                      {selectedRing.name}
                    </h2>
                    <p className="font-medium text-amber-600 text-sm">
                      {selectedRing.category}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(selectedRing.rating)
                              ? "fill-amber-500 text-amber-500"
                              : "fill-amber-200 text-amber-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-bold text-amber-700 text-sm">
                      {selectedRing.rating} ({selectedRing.reviews} reviews)
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-amber-700 text-sm mb-4 leading-relaxed">
                    {selectedRing.description}
                  </p>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                      <div className="flex items-center space-x-2 mb-1">
                        <Gem className="w-3 h-3 text-amber-600" />
                        <span className="font-bold text-[#703B3B] text-sm">
                          Purity
                        </span>
                      </div>
                      <p className="font-medium text-amber-700 text-sm">
                        {selectedRing.purity}
                      </p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                      <div className="flex items-center space-x-2 mb-1">
                        <Scale className="w-3 h-3 text-amber-600" />
                        <span className="font-bold text-[#703B3B] text-sm">
                          Weight
                        </span>
                      </div>
                      <p className="font-medium text-amber-700 text-sm">
                        {selectedRing.weight}
                      </p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                      <div className="flex items-center space-x-2 mb-1">
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        <span className="font-bold text-[#703B3B] text-sm">
                          Stone Type
                        </span>
                      </div>
                      <p className="font-medium text-amber-700 text-sm">
                        {selectedRing.stoneType}
                      </p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                      <div className="flex items-center space-x-2 mb-1">
                        <Shield className="w-3 h-3 text-amber-600" />
                        <span className="font-bold text-[#703B3B] text-sm">
                          Certification
                        </span>
                      </div>
                      <p className="font-medium text-amber-700 text-sm">
                        {selectedRing.certification}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-bold text-[#703B3B] text-sm mb-2">
                      Features
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {selectedRing.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Check className="w-3 h-3 text-green-500" />
                          <span className="font-medium text-amber-700 text-xs">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery & Warranty */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-amber-100 rounded-lg border border-amber-200">
                    <div className="flex items-center space-x-2">
                      <Truck className="w-4 h-4 text-amber-600" />
                      <div>
                        <p className="font-bold text-[#703B3B] text-sm">
                          Delivery
                        </p>
                        <p className="font-medium text-amber-700 text-xs">
                          {selectedRing.deliveryTime}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <div>
                        <p className="font-bold text-[#703B3B] text-sm">
                          Warranty
                        </p>
                        <p className="font-medium text-amber-700 text-xs">
                          {selectedRing.warranty}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t border-amber-200 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="font-serif text-3xl text-[#703B3B]">
                          {selectedRing.price}
                        </span>
                        {selectedRing.originalPrice && (
                          <span className="font-medium text-amber-600 line-through text-base ml-2">
                            {selectedRing.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-amber-600 text-sm">
                          Making Charges
                        </p>
                        <p className="font-bold text-[#703B3B] text-sm">
                          {selectedRing.makingCharges}
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/30 text-sm"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-4 bg-white border border-amber-300 text-amber-700 font-bold py-3 rounded-lg flex items-center justify-center"
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Rings;
