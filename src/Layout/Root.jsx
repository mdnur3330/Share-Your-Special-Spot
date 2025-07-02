import React from 'react';
import NavBar from '../Component/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const Root = () => {

    return (
        <>
        <nav className='bg-blue-300 w-full'>
            <NavBar></NavBar> 
        </nav>
        <main>
            <section className=' mx-auto'>
                <Outlet></Outlet>
            </section>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
        </>
    );
};

export default Root;