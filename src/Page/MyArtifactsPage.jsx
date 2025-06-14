import React from "react";
import { useLoaderData } from "react-router";
import AritifactCard from "./AritifactCard";
// import { AuthContext } from '../Authantication/AuthProvider';

const MyArtifactsPage = () => {
  const myArtifacts = useLoaderData();
  console.log(myArtifacts);

  return (
    <div>
      <h4>harea jabo akdin ame {myArtifacts.length}</h4>
      <section>
        {myArtifacts.map((artifact) => (
            artifact.myArtifact = true,
          <AritifactCard artifact={artifact} key={artifact._id}></AritifactCard>
        ))}
      </section>
    </div>
  );
};

export default MyArtifactsPage;
