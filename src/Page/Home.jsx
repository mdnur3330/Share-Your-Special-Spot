import React from 'react';
import Banner from '../Component/banner';
import SeexData from './sexData';
import ArtifactHistory from './ArtifactHistory';
import RecentBlog from './RecentBlog';
import FarmarMotion from './FarmarMotion';

const Home = () => {

    return (
        <div className='space-y-8'>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <FarmarMotion></FarmarMotion>
            </section>
            <section>
                <RecentBlog></RecentBlog>
            </section>
            <section>
                <SeexData></SeexData>
            </section>
            <section>
                <ArtifactHistory></ArtifactHistory>
            </section>
            <section>
                
            </section>
             
        </div>
    );
};

export default Home;