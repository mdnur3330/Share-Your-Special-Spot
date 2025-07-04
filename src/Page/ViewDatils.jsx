import React, { createContext, useState, useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Authantication/AuthProvider';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export const CountContext = createContext();

const ViewDatils = () => {
  const singalArtifact = useLoaderData();
  const { currentUser } = useContext(AuthContext);

  const {
    _id,
    name,
    image,
    description,
    adderEmail,
    adderName,
    location,
    likedBy,
  } = singalArtifact || {};

  const [likes, setLikes] = useState(likedBy.includes(currentUser.email));
  const [count, setCount] = useState(likedBy.length);

  const handelLike = () => {
    if (!currentUser.email) {
      return alert('Please login');
    }
    axios
      .patch(`${import.meta.env.VITE_api}artifacts/${_id}`, {
        email: currentUser?.email,
      })
      .then((res) => {
        const result = res.data.message;
        setLikes(result);
        setCount((prev) => (result ? prev + 1 : prev - 1));
      })
      .catch(() => {});
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d0ecff] via-white to-[#d0ecff]">
      <div className="px-4 py-16 mx-auto max-w-screen-xl">
        <Helmet>
          <title>Details</title>
        </Helmet>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#045b96]">🧾 Full Details</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            Explore complete information about this. All the data has been shared by real contributors.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-5">
            <h3 className="text-3xl font-bold text-[#045b96]">{name}</h3>
            <p className="text-gray-700 text-[16px] leading-relaxed">
              <span className="font-semibold text-xl text-[#085693]">Description:</span> <br />{description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <p className="font-semibold text-gray-700">Location</p>
                <p className="text-sm text-gray-600">{location}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <p className="font-semibold text-gray-700">Adder Email</p>
                <p className="text-sm text-gray-600">{adderEmail}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <p className="font-semibold text-gray-700">Adder Name</p>
                <p className="text-sm text-gray-600">{adderName}</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src={image}
              alt={name}
              className="rounded-3xl w-full shadow-lg border border-blue-200"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={handelLike}
            className={`cursor-pointer flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all border ${
              likes ? 'bg-red-100 text-red-600 border-red-300 hover:bg-red-200' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            {likes ? <FaHeart className="text-red-500" /> : <FaRegHeart />} {likes ? 'Dislike' : 'Like'}
          </button>
          <p className="text-lg font-medium text-gray-700">{count} Likes</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDatils;
