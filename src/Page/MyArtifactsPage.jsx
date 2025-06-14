import React from "react";
import { useLoaderData } from "react-router";
import AritifactCard from "./AritifactCard";
// import { AuthContext } from '../Authantication/AuthProvider';

const MyArtifactsPage = () => {
  const myArtifacts = useLoaderData();
  console.log(myArtifacts);

  return (
    <div>
      <section  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-16  gap-8 justify-between">
        {myArtifacts.map((artifact) => (
            artifact.myArtifact = true,
          <AritifactCard artifact={artifact} key={artifact._id}></AritifactCard>
        ))}
      </section>
    </div>
  );
};

export default MyArtifactsPage;
