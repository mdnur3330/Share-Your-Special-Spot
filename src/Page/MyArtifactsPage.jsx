import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AritifactCard from "./AritifactCard";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Authantication/AuthProvider";
import axios from "axios";
// import { AuthContext } from '../Authantication/AuthProvider';

const MyArtifactsPage = () => {
  const params = useParams()
  const {currentUser} = useContext(AuthContext)
  // const token = currentUser?.accessToken
  const token = currentUser?.accessToken

  const [myArtifacts, setMyArtifacts] = useState([])
  useEffect(()=>{
    axios(`${import.meta.env.VITE_api}my-artifact?email=${params.email}`,{
      headers:{
        authorization: `Bearer ${token}`
      }
    }).then(res => setMyArtifacts(res.data)).catch()
  },[params,token])
  return (
    <div>
      <Helmet>
        <title>My Artifac</title>
      </Helmet>
    
        <section className="min-h-screen px-1 lg:px-6 py-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
              My Artifact Items
            </h2>
      
            {Array.isArray(myArtifacts) && myArtifacts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {myArtifacts.map((myArtifact) => (
                  myArtifact.myartifact = true,
                  <AritifactCard key={myArtifact._id} artifact={myArtifact} />
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-md">
                <p className="text-xl text-gray-500 text-center">
                  💔 You don’t have any artifact items
                </p>
              </div>
            )}
          </section>
    </div>
  );
};

export default MyArtifactsPage;
