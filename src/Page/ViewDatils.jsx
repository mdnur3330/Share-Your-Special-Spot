
import React, { createContext, use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Authantication/AuthProvider';
import axios from 'axios';
import { Helmet } from 'react-helmet';

export const CountContext = createContext();

const ViewDatils = () => {
  const singalArtifact = useLoaderData();
  const { currentUser } = use(AuthContext);

  const {
    _id,
    name,
    image,
    description,
    location,
    context,
    createdAt,
    discoveredBy,
    discoveredAt,
    authorName,
    adderEmail,
    type,
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
    <div className="bg-gradient-to-b from-[#d0ecff] via-white to-[#d0ecff] px-4 py-16 mx-auto max-w-screen-xl">
      <Helmet>
        <title>Artifact Details</title>
      </Helmet>

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#045b96]">🧾 Artifact Full Details</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
          Explore complete information about this historical artifact. All the data has been shared by real contributors.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-5">
          <h3 className="text-3xl font-bold text-[#045b96]">{name}</h3>
          <p className="text-gray-700 text-[16px] leading-relaxed">
            <span className="font-semibold text-xl text-[#085693] underline">Description:</span> <br />{description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <p className="font-semibold text-gray-700">Historical Context</p>
              <p className="text-sm text-gray-600">{context}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <p className="font-semibold text-gray-700">Created At</p>
              <p className="text-sm text-gray-600">{createdAt}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <p className="font-semibold text-gray-700">Discovered By</p>
              <p className="text-sm text-gray-600">{discoveredBy}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <p className="font-semibold text-gray-700">Discovered At</p>
              <p className="text-sm text-gray-600">{discoveredAt}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <p className="font-semibold text-gray-700">Location</p>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <p className="font-semibold text-gray-700">Artifact Type</p>
              <p className="text-sm text-gray-600">{type}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <p className="font-semibold text-gray-700">Added By</p>
              <p className="text-sm text-gray-600">{authorName}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <p className="font-semibold text-gray-700">Adder Email</p>
              <p className="text-sm text-gray-600">{adderEmail}</p>
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
          className="px-6 py-2 bg-[#066fb8] text-white rounded-full font-semibold hover:bg-[#045b96] transition-all"
        >
          {likes ? "👎 Disliked" : "👍 Like"}
        </button>
        <p className="text-lg font-medium text-gray-700">{count} Likes</p>
      </div>
    </div>
  );
};

export default ViewDatils;
