import React from 'react';
import Banner from '../Component/banner';
import ArtifactHistory from './ArtifactHistory';
import RecentBlog from './RecentBlog';
import FarmarMotion from './FarmarMotion';
import ShortArtifact from './ShortArtifact';
import { Helmet } from 'react-helmet';
import ArtifactGalary from './ArtifactGalary';
import FeaturedArtifacts from './FeaturedArtifacts';

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
               <ShortArtifact></ShortArtifact>
            </section>
            <section className='lg:py-10 my-14 lg:border rounded-lg border-gray-100 lg:shadow-md '>
                <FeaturedArtifacts></FeaturedArtifacts>
            </section>
            <section className='bg-blue-50 py-10 my-10'>
                <ArtifactHistory></ArtifactHistory>
            </section>
            <section>
                 <RecentBlog></RecentBlog>
            </section>
            <section>
                 <ArtifactGalary></ArtifactGalary>
            </section>
             
        </div>
    );
};

export default Home;