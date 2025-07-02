import React from 'react';
import Banner from '../Component/banner';
import ArtifactHistory from './ArtifactHistory';
import RecentBlog from './RecentBlog';
import FarmarMotion from './FarmarMotion';
import ShortArtifact from './ShortArtifact';
import { Helmet } from 'react-helmet';
import ArtifactGalary from './ArtifactGalary';
import FeaturedArtifacts from './FeaturedArtifacts';
import AddSpotForm from './AddArtifacts';

const Home = () => {

    return (
        <div>
            <Helmet>
        <title>Home</title>
      </Helmet>
            <section>
                <Banner></Banner>

            </section>
            {/* <section>
                <FarmarMotion></FarmarMotion>
            </section> */}
            <section className='py-20'>
               <ShortArtifact></ShortArtifact>
            </section>
            <section className='lg:py-10 border-gray-100 lg:shadow-md '>
                <FeaturedArtifacts></FeaturedArtifacts>
            </section>
          
            <section>
                 <RecentBlog></RecentBlog>
            </section>

            <section>
                 <ArtifactGalary></ArtifactGalary>
            </section>
            <section>
                <AddSpotForm></AddSpotForm>
            </section>
            <section>
                <FarmarMotion></FarmarMotion>
            </section>
             
        </div>
    );
};

export default Home;