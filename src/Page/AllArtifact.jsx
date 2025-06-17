import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router";
import AritifactCard from "./AritifactCard";
import axios from "axios";
import { Helmet } from "react-helmet";

const AllArtifact = () => {
  const artifacts = useLoaderData();

  const searchRef = useRef()

  const [artifact, setArtifact] = useState(artifacts)

  const hadelSearch = (e)=>{
    e.preventDefault()
    const searchName = searchRef.current.value

    axios(`${import.meta.env.VITE_api}search?name=${searchName}`).then(res => {
      setArtifact(res.data)
      searchRef.current.value = "";
      }).catch()
  }
  return (
    <div>
      <Helmet>
        <title>All Artifact</title>
      </Helmet>
      <div>
       <form onSubmit={hadelSearch} className="flex items-center max-w-md mx-auto my-6">
  <label className="relative flex-grow">
    <svg
      className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
    <input
      type="search"
      ref={searchRef}
      required
      placeholder="Search artifacts..."
      className="w-full pl-10 pr-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </label>
  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-r-md transition-colors duration-200"
  >
    Search
  </button>
</form>

      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-16  gap-8 justify-between">
        {artifact.length > 0 &&  artifact.map(
          (artifact) => (
            (artifact.myArtifact = false),
            (
              <AritifactCard
                artifact={artifact}
                key={artifact._id}
              ></AritifactCard>
            )
          )
        )}
      </section>
    </div>
  );
};

export default AllArtifact;
