import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedArtifacts = () => {
  const [popularArtifacts, setPopularArtifacts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_api}popular-artifacts`)
      .then((res) => {
        setPopularArtifacts(res.data);
      })
      .catch((err) => {
        console.error("Popular fetch error:", err);
      });
  }, []);

  return (
    <>
      <h2 className="text-xl md:text-3xl font-bold text-center mb-3 mt-10">
        🧠Featured Artifacts
      </h2>
      <p className="mb-7 text-center">
        Discover the most iconic and thought-provoking artifacts from across
        history. These handpicked treasures highlight humanity’s greatest
        achievements, mysteries, and cultural milestones — from ancient
        innovations to legendary relics that continue to inspire awe and
        curiosity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {popularArtifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="bg-base-100 w-full shadow-md pb-3  space-y-2.5 border border-gray-300 rounded-lg mx-auto"
          >
            <figure className="">
              <img src={artifact.image} alt="" className="w-full h-50" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{artifact.name}</h2>
              <p>
                Short description :- <br />
                {artifact.description.split(" ").slice(0, 16).join(" ") +
                  "...."}
              </p>
              <div className="flex justify-between mt-2 items-center">
                <span className="border rounded-lg px-2 py-2">
                  🖐️ {artifact.likedBy?.length || 0}
                </span>
      
                  <Link
                  className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
                  to={`/details/${artifact._id}`}
                >
                  View Details
                </Link>
         
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-10">
        <Link
          className="btn bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
          to="/all-artifact"
        >
          Show All Artifact
        </Link>
      </div>
    </>
  );
};

export default FeaturedArtifacts;
