import React from 'react';
import Banner from '../Component/banner';
import SeexData from './sexData';
const Home = () => {

    return (
        <div className='space-y-8'>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <SeexData></SeexData>
            </section>
        </div>
    );
};

export default Home;