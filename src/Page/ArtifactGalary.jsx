

import React from "react";
import { motion } from "framer-motion";

const images = [
"https://i.ibb.co/TBPWN7fj/clouds-3876901-1280.jpg",
"https://i.ibb.co/FLN87yBG/1.png",
"https://i.ibb.co/9mvLWBvr/2.png",
"https://i.ibb.co/TDpNQsCq/3.png",
"https://i.ibb.co/MyY6372j/4.png",
"https://i.ibb.co/JwXDVbvf/5.png",
"https://i.ibb.co/zWBcVBM3/6.png",
"https://i.ibb.co/XZ1GTLpT/arch-7470764-1280.jpg",
"https://i.ibb.co/S73kbRgq/blog3.jpg",
"https://i.ibb.co/TBPWN7fj/clouds-3876901-1280.jpg",
"https://i.ibb.co/Z6kFSNQ9/coxs-bazar-2885043-1280.jpg",
"https://i.ibb.co/Pv7cX3rY/see-even-2407631-1280.jpg",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ArtifactGallery = () => {
  return (
    <section className="bg-gradient-to-b from-[#e6f4ff] via-white to-[#d4e9fa] py-20 px-4 md:px-10">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#045b96] mb-4">
          🖼️ Timeless Gallery of Civilizations
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Explore a stunning collection of historical artifacts that echo the beauty,
          mystery, and power of ancient civilizations. Each artifact in this gallery
          opens a window into the past — a moment frozen in time.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-lg border border-blue-100 bg-white hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={img}
              alt={`artifact-${idx}`}
              className="w-full h-52 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ArtifactGallery;








