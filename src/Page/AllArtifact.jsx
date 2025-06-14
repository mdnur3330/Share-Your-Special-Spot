import React from 'react';
import { useLoaderData } from 'react-router';
import AritifactCard from './AritifactCard';

const AllArtifact = () => {
     const artifacts = useLoaderData()
     console.log(artifacts);
    return (
          <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-8 justify-between'>
                {artifacts.map(artifact => ( 
                    artifact.myArtifact = false,
                    <AritifactCard artifact={artifact} key={artifact._id}></AritifactCard>
                ))}
            </section>
    );
};

export default AllArtifact;