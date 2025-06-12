import React from 'react';
import Banner from '../Component/banner';
import { useLoaderData } from 'react-router';
import AritifactCard from './AritifactCard';

const Home = () => {
    const artifacts = useLoaderData()
    console.log(artifacts);
    return (
        <div>
            <Banner></Banner>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {artifacts.map(artifact => ( 
                    artifact.myArtifact = false,
                    <AritifactCard artifact={artifact}></AritifactCard>
                ))}
            </section>
        </div>
    );
};

export default Home;