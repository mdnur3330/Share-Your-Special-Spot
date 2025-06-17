import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AritifactCard from './AritifactCard';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../Authantication/AuthProvider';
import axios from 'axios';

const MyLikedItems = () => {
    const params = useParams()
      const {currentUser} = useContext(AuthContext)
      const token = currentUser?.accessToken
      
      const [myLikedArtifact, setmyLikedArtifact] = useState([])
      useEffect(()=>{
        axios(`${import.meta.env.VITE_api}liked-artifacts?email=${params.email}`,{
          headers:{
            authorization: `Bearer ${token}`
          }
        }).then(res => setmyLikedArtifact(res.data)).catch(() =>{})
      },[params,token])

    return (
        <section className="min-h-screen px-6 py-10 bg-gray-50">
          <Helmet>
        <title>My Linked Artifact</title>
      </Helmet>
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
