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
            <div>
                {artifacts.map(artifact => <AritifactCard artifact={artifact}></AritifactCard>)}
            </div>
        </div>
    );
};

export default Home;