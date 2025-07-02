

import React, { useContext, useEffect, useState } from 'react';

import AritifactCard from './AritifactCard';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../Authantication/AuthProvider';
import axios from 'axios';

const MyLikedItems = () => {
  
  const { currentUser } = useContext(AuthContext);
  const token = currentUser?.accessToken;

  const [myLikedArtifact, setMyLikedArtifact] = useState([]);

  useEffect(() => {
    if (!token) return;

    axios(`${import.meta.env.VITE_api}liked-artifacts?email=${currentUser.email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setMyLikedArtifact(res.data))
      .catch((err) => console.error("Error fetching liked artifacts:", err));
  }, [currentUser.email, token]);

  return (
    <section className="min-h-screen bg-[#fff8ee] px-4 md:px-10 py-14">
      <Helmet>
        <title>My Liked Artifacts</title>
      </Helmet>

      <h2 className="text-4xl font-bold text-center text-[#1b1f3b] mb-12">
        My <span className="text-yellow-500">Liked</span> Items
      </h2>

      {Array.isArray(myLikedArtifact) && myLikedArtifact.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myLikedArtifact.map((myliked) => (
            <AritifactCard key={myliked._id} artifact={myliked} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center bg-white h-64 rounded-2xl shadow-lg border border-yellow-200">
          <p className="text-lg md:text-xl text-gray-500 text-center px-6">
            💔 You don’t have any liked artifacts yet.
          </p>
        </div>
      )}
    </section>
  );
};

export default MyLikedItems;
