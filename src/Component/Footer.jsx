// import React from "react";
// import { NavLink } from "react-router";
// import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

// const Footer = () => {
//   return (
//     <div className="mt-14">
//       <footer className="footer footer-horizontal footer-center bg-blue-100 text-base-content rounded p-10">
//         <nav className="grid grid-flow-col gap-4  md:text-xl">
//            <li>
//                       <NavLink to='/' className={({isActive})=> isActive? 'text-blue-500 font-bold' : 'text-gray-700'}>Home</NavLink>
//                     </li>
//                     <li>
//                       <NavLink to='/all-artifact' className={({isActive})=> isActive? 'text-blue-500 font-bold' : 'text-gray-700'}>All Artifacts</NavLink>
//                     </li>
//                     <li>
//                       <NavLink to='add-artifacts' className={({isActive})=> isActive? 'text-blue-500 font-bold' : 'text-gray-700'}>Add Artifact</NavLink>
//                     </li>
//         </nav>
//         <div>
//             <h2 className="text-2xl font-bold">ByteVault</h2>
//             <p>ByteVault is a digital gallery archiving remarkable artifacts from across the ages — <br /> from vintage technology and digital innovations to cultural icons and historical objects. Discover the rich tapestry of <br /> human creativity and progress, one artifact at a time.</p>
//         </div>
//         <nav>
//           <div className="grid grid-flow-col gap-4">
//             <a  href="https://www.linkedin.com/in/nur-alom1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//               target="_blank">
              
//               <IoLogoLinkedin size={25}/>
//             </a>
//             <a  href="https://github.com/mdnur3330" target="_blank">
              
//               <IoLogoGithub size={25} />
//             </a>
//             <a href="https://youtube.com/@hmnurulalom9359?si=T8wekoI2SAO0-hW9" target="_blank">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//               </svg>
//             </a>
//             <a href="https://www.facebook.com/md.nur.alom.882377/" target="_blank">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//               </svg>
//             </a>
//           </div>
//         </nav>
//         <aside className="border-t border-gray-500 pt-5">
//           <p>
//             Copyright © {new Date().getFullYear()} - All right reserved by ACME
//             Industries Ltd
//           </p>
//         </aside>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import { NavLink } from "react-router";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#1B1F3B] text-white px-6 py-14 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Logo + About */}
        <div>
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-4">WanderNest</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
           Join a global community of explorers sharing hidden gems, stunning landscapes, and unforgettable travel moments. Inspire and be inspired — your next adventure starts here.
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-col md:items-center gap-4">
          <h3 className="text-xl font-semibold text-yellow-300">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-bold"
                    : "text-gray-300 hover:text-yellow-400 transition"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-artifact"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-bold"
                    : "text-gray-300 hover:text-yellow-400 transition"
                }
              >
                All Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-artifacts"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-bold"
                    : "text-gray-300 hover:text-yellow-400 transition"
                }
              >
                Add Spot
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right: Socials */}
        <div className="flex flex-col gap-4 md:items-end">
          <h3 className="text-xl font-semibold text-yellow-300">Follow Me</h3>
          <div className="flex gap-4 text-white text-2xl">
            <a
              href="https://www.linkedin.com/in/nur-alom1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-transform hover:scale-110"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://github.com/mdnur3330"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-transform hover:scale-110"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://youtube.com/@hmnurulalom9359"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/md.nur.alom.882377/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} ByteVault. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
