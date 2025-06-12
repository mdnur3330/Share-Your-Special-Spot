import React from 'react';
import NavBar from '../Component/NavBar';
import { Outlet } from 'react-router';

const Root = () => {
    console.log(import.meta.env.VITE_projectId);
    return (
        <>
        <nav>
            <NavBar></NavBar> 
        </nav>
        <main>
            <section className='w-10/12 mx-auto'>
                <Outlet></Outlet>
            </section>
        </main>
        <footer>

        </footer>
        </>
    );
};

export default Root;