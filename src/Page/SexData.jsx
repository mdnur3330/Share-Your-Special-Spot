import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const SeexData = () => {
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
    <h2 className="text-3xl font-bold text-center my-10">
🧠Featured Artifacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularArtifacts.map((artifact) => (
          <div key={artifact._id} className="bg-base-100 w-80 shadow-md pb-3  space-y-2.5 border border-gray-300 rounded-lg mx-auto">
            <figure className="">
          <img src={artifact.image} alt="Shoes" className="w-full h-50" />
        </figure>
            <div className="card-body">
              <h2 className="card-title">{artifact.name}</h2>
              <p>
                Short description :- <br />
                {artifact.description.split(" ").slice(0, 16).join(" ") +
                  "...."}
              </p>
              <div className="flex justify-between mt-2">
                <div>
                  <p className="border rounded-lg py-2 px-4">
                    🖐️ {artifact.likedBy?.length || 0}
                  </p>
                </div>

                <Link
                  className="btn btn-primary"
                  to={`/details/${artifact._id}`}
                >
                  View Detais
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          className="btn btn-primary mx-auto hover:bg-indigo-600"
          to="/all-artifact"
        >
          Show AllArtifact
        </Link>
      </div>
    </>
  );
};

export default SeexData;
