import React from 'react';
import { useLoaderData } from 'react-router';
import AritifactCard from './AritifactCard';

const MyLikedItems = () => {
    const myLikedArtifact = useLoaderData()
    console.log(myLikedArtifact);
    return (
        <section className="min-h-screen px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
        My Liked Items
      </h2>

      {Array.isArray(myLikedArtifact) && myLikedArtifact.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {myLikedArtifact.map((myliked) => (
            <AritifactCard key={myliked._id} artifact={myliked} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-md">
          <p className="text-xl text-gray-500">
            💔 You don’t have any liked items
          </p>
        </div>
      )}
    </section>
    );
};

export default MyLikedItems;
