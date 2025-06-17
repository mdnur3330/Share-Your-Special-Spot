import React from "react";
import { NavLink } from "react-router";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mt-14">
      <footer className="footer footer-horizontal footer-center bg-blue-100 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4  md:text-xl">
           <li>
                      <NavLink to='/' className={({isActive})=> isActive? 'text-blue-500 font-bold' : 'text-gray-700'}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/all-artifact' className={({isActive})=> isActive? 'text-blue-500 font-bold' : 'text-gray-700'}>All Artifacts</NavLink>
                    </li>
                    <li>
                      <NavLink to='add-artifacts' className={({isActive})=> isActive? 'text-blue-500 font-bold' : 'text-gray-700'}>Add Artifact</NavLink>
                    </li>
        </nav>
        <div>
            <h2 className="text-2xl font-bold">ByteVault</h2>
            <p>ByteVault is a digital gallery archiving remarkable artifacts from across the ages — <br /> from vintage technology and digital innovations to cultural icons and historical objects. Discover the rich tapestry of <br /> human creativity and progress, one artifact at a time.</p>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a  href="https://www.linkedin.com/in/nur-alom1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank">
              
              <IoLogoLinkedin size={25}/>
            </a>
            <a  href="https://github.com/mdnur3330" target="_blank">
              
              <IoLogoGithub size={25} />
            </a>
            <a href="https://youtube.com/@hmnurulalom9359?si=T8wekoI2SAO0-hW9" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/md.nur.alom.882377/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside className="border-t border-gray-500 pt-5">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
