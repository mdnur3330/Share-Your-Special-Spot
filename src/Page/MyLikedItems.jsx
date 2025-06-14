import React from 'react';
import { useLoaderData } from 'react-router';
import AritifactCard from './AritifactCard';

const MyLikedItems = () => {
    const myLikedArtifact = useLoaderData()
    console.log(myLikedArtifact);
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {myLikedArtifact? myLikedArtifact.map(myliked => <AritifactCard artifact={myliked} key={myliked._id}></AritifactCard>): "You don't hava any liked items"}
        </section>
    );
};

export default MyLikedItems;