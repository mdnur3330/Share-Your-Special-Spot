import React from "react";
import { useLoaderData } from "react-router";
import AritifactCard from "./AritifactCard";
// import { AuthContext } from '../Authantication/AuthProvider';

const MyArtifactsPage = () => {
  const myArtifacts = useLoaderData();
  console.log(myArtifacts);

  return (
    <div>
      {/* <section  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-16  gap-8 justify-between">
        {myArtifacts.map((artifact) => (
            artifact.myArtifact = true,
          <AritifactCard artifact={artifact} key={artifact._id}></AritifactCard>
        ))}
      </section> */}


        <section className="min-h-screen px-6 py-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
              My Artifact Items
            </h2>
      
            {Array.isArray(myArtifacts) && myArtifacts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {myArtifacts.map((myArtifact) => (
                  <AritifactCard key={myArtifact._id} artifact={myArtifact} />
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-md">
                <p className="text-xl text-gray-500">
                  💔 You don’t have any artifact items
                </p>
              </div>
            )}
          </section>
    </div>
  );
};

export default MyArtifactsPage;
