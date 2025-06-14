
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SeexData = () => {
  const [popularArtifacts, setPopularArtifacts] = useState([]);

  
useEffect(() => {
  axios.get("http://localhost:4000/popular-artifacts")
    .then(res => {
      setPopularArtifacts(res.data);
    })
    .catch(err => {
      console.error("Popular fetch error:", err);
    });
}, []);




  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {popularArtifacts.map(artifact => (
        <div key={artifact._id} className="card bg-base-100 shadow-md">
          <figure><img src={artifact.image} alt={artifact.name} /></figure>
          <div className="card-body">
            <h2 className="card-title">{artifact.name}</h2>
            <p>{artifact.description.slice(0, 100)}...</p>
            <div className="flex justify-between mt-2">
              <span> {artifact.likedBy?.length || 0}</span>
              <button className="btn btn-sm btn-primary">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeexData;
