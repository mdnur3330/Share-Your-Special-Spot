
import React from "react";
import item2 from "../assets/photo/1.png";
import item3 from "../assets/photo/2.png";
import item1 from "../assets/photo/3.png";

import { Link } from "react-router";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ShortArtifact = () => {
  return (
    <motion.section
      className="bg-[#FFF8EE] py-20 px-6 md:px-12 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
       {/* Image Collage */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="flex justify-center lg:justify-end gap-5"
          variants={childVariants}
        >
          <div className="flex flex-col gap-4">
            <motion.img
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3 }}
              src={item1}
              alt="Artifact 1"
              className="w-28 h-28 sm:w-40 sm:h-40 xl:w-48 xl:h-48 object-cover rounded-2xl shadow-lg border border-yellow-200"
            />
            <motion.img
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3 }}
              src={item2}
              alt="Artifact 2"
              className="w-24 h-24 sm:w-32 sm:h-32 xl:w-40 xl:h-40 object-cover rounded-2xl shadow-lg border border-yellow-200"
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <img
              src={item3}
              alt="Artifact 3"
              className="w-36 h-36 sm:w-56 sm:h-56 xl:w-72 xl:h-72 object-cover rounded-3xl shadow-2xl border border-yellow-300"
            />
          </motion.div>
        </motion.div>
        
        {/* Text Section */}
        <motion.div variants={childVariants} className="text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B1F3B] leading-snug mb-6">
            Timeless Treasures of the Ancient World
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Discover legendary artifacts that once shaped civilizations — from golden relics
            to sacred sculptures. Each piece reflects the art, power, and soul of ancient societies.
          </p>
          <div className="mt-8">
            <Link
              to="/all-artifact"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-[#1B1F3B] font-semibold px-7 py-3 rounded-full transition-transform duration-300 shadow-md hover:scale-105"
            >
              Explore All Spot
            </Link>
          </div>
        </motion.div>

       
        
      </div>
    </motion.section>
  );
};

export default ShortArtifact;
