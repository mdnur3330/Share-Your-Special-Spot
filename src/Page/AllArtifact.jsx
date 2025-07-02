// import React, { useRef, useState } from "react";
// import { useLoaderData } from "react-router";
// import AritifactCard from "./AritifactCard";
// import axios from "axios";
// import { Helmet } from "react-helmet";

// const AllArtifact = () => {
//   const artifacts = useLoaderData();

//   const searchRef = useRef()

//   const [artifact, setArtifact] = useState(artifacts)

//   const hadelSearch = (e)=>{
//     e.preventDefault()
//     const searchName = searchRef.current.value

//     axios(`${import.meta.env.VITE_api}search?name=${searchName}`).then(res => {
//       setArtifact(res.data)
//       searchRef.current.value = "";
//       }).catch()
//   }
//   return (
//     <div>
//       <Helmet>
//         <title>All Artifact</title>
//       </Helmet>
//       <div>
//        <form onSubmit={hadelSearch} className="flex items-center max-w-md mx-auto my-6">
//   <label className="relative flex-grow">
//     <svg
//       className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <line x1="21" y1="21" x2="16.65" y2="16.65" />
//     </svg>
//     <input
//       type="search"
//       ref={searchRef}
//       required
//       placeholder="Search artifacts..."
//       className="w-full pl-10 pr-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//     />
//   </label>
//   <button
//     type="submit"
//     className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-r-md transition-colors duration-200"
//   >
//     Search
//   </button>
// </form>

//       </div>
//       <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-16  gap-8 justify-between">
//         {artifact.length > 0 &&  artifact.map(
//           (artifact) => (
//             (artifact.myArtifact = false),
//             (
//               <AritifactCard
//                 artifact={artifact}
//                 key={artifact._id}
//               ></AritifactCard>
//             )
//           )
//         )}
//       </section>
//     </div>
//   );
// };

// export default AllArtifact;
import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router";
import AritifactCard from "./AritifactCard";
import axios from "axios";
import { Helmet } from "react-helmet";

const AllArtifact = () => {
  const artifacts = useLoaderData();
  const searchRef = useRef();
  const [artifact, setArtifact] = useState(artifacts);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchName = searchRef.current.value;

    axios(`${import.meta.env.VITE_api}search?name=${searchName}`)
      .then((res) => {
        setArtifact(res.data);
        searchRef.current.value = "";
      })
      .catch((err) => console.error("Search error:", err));
  };

  return (
    <div className="min-h-screen bg-[#fff8ee] py-10 px-4 md:px-8">
      <Helmet>
        <title>All Artifacts</title>
      </Helmet>

      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1b1f3b] mb-10">
        All <span className="text-yellow-500">Artifacts</span>
      </h2>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center max-w-xl mx-auto mb-12"
      >
        <label className="relative flex-grow">
          <svg
            className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            ref={searchRef}
            required
            placeholder="Search artifacts..."
            className="w-full pl-10 pr-4 py-2.5 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </label>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-[#1b1f3b] font-semibold px-6 py-2.5 rounded-r-full transition duration-200"
        >
          Search
        </button>
      </form>

      {/* Artifact Grid */}
      {artifact.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {artifact.map((item) => {
            item.myArtifact = false;
            return (
              <AritifactCard key={item._id} artifact={item} />
            );
          })}
        </section>
      ) : (
        <div className="text-center text-gray-500 py-32 text-xl">
          ❌ No artifacts found.
        </div>
      )}
    </div>
  );
};

export default AllArtifact;
