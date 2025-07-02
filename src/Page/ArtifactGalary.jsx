// import React from 'react';

// const ArtifactGalary = () => {
//     return (
//         <>
//         <div className='text-center mt-15 mb-5'>
//             <h1 className='text-xl md:text-3xl font-bold text-center mb-3'>📜 "Echoes of Time: A Journey Through Historical Artifacts"</h1>

//             <p>Step into a curated gallery of timeless artifacts that tell the story of human civilization. From ancient tools and sacred relics to royal regalia and technological marvels — each piece in this collection captures a moment from our shared past, offering insight into the cultures, beliefs, and innovations that shaped the world we live in today.

// </p>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
//   <div className="grid gap-4">
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://i.ibb.co/YCNSCYX/il-fullxfull-4727143430-8590.webp"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://i.ibb.co/w2vDZhj/download.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://i.ibb.co/NdHMvdgH/download-5.jpg"
//         alt=""
//       />
//     </div>
//   </div>
//   <div className="grid gap-4">
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://i.ibb.co/BVz8j9JF/download-4.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://i.ibb.co/VWR0Ymzb/download-2.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://i.ibb.co/8gsJRkzF/item1.jpg"
//         alt=""
//       />
//     </div>
//   </div>
//   <div className="grid gap-4">
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://i.ibb.co/Zp7pCcPG/1.webp"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://i.ibb.co/qMXkCbd1/download-1.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://i.ibb.co/HfjDSGT9/images-6.jpg"
//         alt=""
//       />
//     </div>
//   </div>
//   <div className="grid gap-4">
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://i.ibb.co/tMGGBWdC/images-5.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://i.ibb.co/wZ1NPKZ3/images-3.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://i.ibb.co/yczgbq1w/images-2.jpg"
//         alt=""
//       />
//     </div>
//   </div>
// </div>
// </>
//     );
// };

// export default ArtifactGalary;


import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://i.ibb.co/YCNSCYX/il-fullxfull-4727143430-8590.webp",
  "https://i.ibb.co/w2vDZhj/download.jpg",
  "https://i.ibb.co/NdHMvdgH/download-5.jpg",
  "https://i.ibb.co/BVz8j9JF/download-4.jpg",
  "https://i.ibb.co/VWR0Ymzb/download-2.jpg",
  "https://i.ibb.co/8gsJRkzF/item1.jpg",
  "https://i.ibb.co/Zp7pCcPG/1.webp",
  "https://i.ibb.co/qMXkCbd1/download-1.jpg",
  "https://i.ibb.co/HfjDSGT9/images-6.jpg",
  "https://i.ibb.co/tMGGBWdC/images-5.jpg",
  "https://i.ibb.co/wZ1NPKZ3/images-3.jpg",
  "https://i.ibb.co/yczgbq1w/images-2.jpg",
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








