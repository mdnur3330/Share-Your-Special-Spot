import React from 'react';
import Banner from '../Component/banner';
import SeexData from './sexData';
import ArtifactHistory from './ArtifactHistory';
import RecentBlog from './RecentBlog';
import FarmarMotion from './FarmarMotion';
import ShortArtifact from './ShortArtifact';
import { Helmet } from 'react-helmet';

const Home = () => {

    return (
        <div>
            <Helmet>
        <title>Home</title>
      </Helmet>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <FarmarMotion></FarmarMotion>
            </section>
            <section className='py-20'>
                <RecentBlog></RecentBlog>
            </section>
            <section className='pb-10'>
                <SeexData></SeexData>
            </section>
            <section className='bg-blue-50 py-10 my-10'>
                <ArtifactHistory></ArtifactHistory>
            </section>
            <section>
                <ShortArtifact></ShortArtifact>
            </section>
             
        </div>
    );
};

export default Home;