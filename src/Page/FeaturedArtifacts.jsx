// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";

// const FeaturedArtifacts = () => {
//   const [popularArtifacts, setPopularArtifacts] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_api}popular-artifacts`)
//       .then((res) => {
//         setPopularArtifacts(res.data);
//       })
//       .catch((err) => {
//         console.error("Popular fetch error:", err);
//       });
//   }, []);

//   return (
//     <>
//       <h2 className="text-xl md:text-3xl font-bold text-center mb-3 mt-10">
//         🧠Featured Artifacts
//       </h2>
//       <p className="mb-7 text-center">
//         Discover the most iconic and thought-provoking artifacts from across
//         history. These handpicked treasures highlight humanity’s greatest
//         achievements, mysteries, and cultural milestones — from ancient
//         innovations to legendary relics that continue to inspire awe and
//         curiosity.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
//         {popularArtifacts.map((artifact) => (
//           <div
//             key={artifact._id}
//             className="bg-base-100 w-full shadow-md pb-3  space-y-2.5 border border-gray-300 rounded-lg mx-auto"
//           >
//             <figure className="">
//               <img src={artifact.image} alt="" className="w-full h-50" />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">{artifact.name}</h2>
//               <p>
//                 Short description :- <br />
//                 {artifact.description.split(" ").slice(0, 16).join(" ") +
//                   "...."}
//               </p>
//               <div className="flex justify-between mt-2 items-center">
//                 <span className="border rounded-lg px-2 py-2">
//                   🖐️ {artifact.likedBy?.length || 0}
//                 </span>
      
//                   <Link
//                   className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
//                   to={`/details/${artifact._id}`}
//                 >
//                   View Details
//                 </Link>
         
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center my-10">
//         <Link
//           className="btn bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
//           to="/all-artifact"
//         >
//           Show All Artifact
//         </Link>
//       </div>
//     </>
//   );
// };

// export default FeaturedArtifacts;


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
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#045b96] drop-shadow-sm">
          🔎 Explore Hidden Gems
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Discover unique and popular artifacts shared by our community.
          Dive into the beauty of history, culture, and mystery.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {popularArtifacts.map((artifact, index) => (
          <motion.div
            key={artifact._id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.03 }}
            className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl border border-[#aad4ec] bg-white"
          >
            <div className="overflow-hidden h-52">
              <img
                src={artifact.image}
                alt={artifact.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-5 flex flex-col justify-between">
              <h3 className="text-xl font-medium text-[#06477a] mb-1">
                {artifact.name.split(" ").slice(0, 1).join(" ") + "..."}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {artifact.description.split(" ").slice(0, 4).join(" ") + "..."}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full shadow">
                  🖐 {artifact.likedBy?.length || 0} Likes
                </span>
                <Link
                  to={`/details/${artifact._id}`}
                  className="text-white bg-[#0a70b8] hover:bg-[#085693] transition-all duration-300 text-sm px-4 py-2 rounded-full shadow"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Floating Badge (optional) */}
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
          View All Artifacts
        </Link>
      </div>
    </section>
  );
};

export default FeaturedArtifacts;
