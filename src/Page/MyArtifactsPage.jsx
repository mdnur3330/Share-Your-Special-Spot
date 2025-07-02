

import React, { useContext, useEffect, useState } from "react";

import AritifactCard from "./AritifactCard";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Authantication/AuthProvider";
import axios from "axios";

const MyArtifactsPage = () => {
  const { currentUser } = useContext(AuthContext);
  const token = currentUser?.accessToken;

  const [myArtifacts, setMyArtifacts] = useState([]);


  useEffect(() => {
    if (!token) return;

    axios(`${import.meta.env.VITE_api}my-artifact?email=${currentUser.email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setMyArtifacts(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, [currentUser.email, token]);

  return (
    <div className="bg-[#fff8ee] min-h-screen pb-16">
      <Helmet>
        <title>My Artifacts</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12">
        <h2 className="text-4xl font-bold text-center text-[#1b1f3b] mb-10">
          My <span className="text-yellow-500">Artifacts</span>
        </h2>

        {Array.isArray(myArtifacts) && myArtifacts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {myArtifacts.map((artifact) => {
              artifact.myartifact = true; // Flag for edit/delete access
              return (
                <AritifactCard key={artifact._id} artifact={artifact} />
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center bg-white h-64 rounded-2xl shadow-lg border border-yellow-200">
            <p className="text-lg md:text-xl text-gray-500 text-center px-6">
              💔 You don’t have any artifact items yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyArtifactsPage;
