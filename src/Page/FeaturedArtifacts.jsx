
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const FeaturedArtifacts = () => {
  const [popularArtifacts, setPopularArtifacts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_api}popular-artifacts`)
      .then((res) => setPopularArtifacts(res.data))
      .catch((err) => console.error("Popular fetch error:", err));
  }, []);

  return (
    <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-[#d8f1ff] via-white to-[#d8f1ff]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#045b96]">
          🔎 Explore <span className="text-yellow-500">Hidden Gems</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Discover unique and popular artifacts shared by our community.
          Dive into the beauty of history, culture, and mystery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {popularArtifacts.map((artifact, index) => (
          <motion.div
            key={artifact._id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.03 }}
            className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl border border-[#aad4ec] bg-white"
          >
            <div className="overflow-hidden h-36 md:h-48 lg:h-56">
              <img
                src={artifact.image}
                alt={artifact.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-[#06477a] truncate mb-1">
                {artifact.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {artifact.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full shadow">
                  🖐 {artifact.likedBy?.length || 0} Likes
                </span>
                <Link
                  to={`/details/${artifact._id}`}
                  className="text-white bg-[#045b96] hover:bg-[#033e6b] transition-all duration-300 text-sm px-5 py-2 rounded-full shadow"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-3 left-3 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              Featured
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-14">
        <Link
          to="/all-artifact"
          className="inline-block bg-gradient-to-r from-[#045b96] to-[#0585d4] hover:from-[#03406a] hover:to-[#066fb8] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        >
          View All Spots
        </Link>
      </div>
    </section>
  );
};

export default FeaturedArtifacts;
