// import React, { useContext } from "react";
// import { AuthContext } from "../Authantication/AuthProvider";
// import { Link, useLocation, useNavigate } from "react-router";
// import Swal from "sweetalert2";
// import { Helmet } from "react-helmet";

// const Login = () => {
//   const { emailandpassLogin, loginByEmail } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation()

//   const handelLogin = (e) => {
//     e.preventDefault();
//     const target = e.target;
//     const email = target.email.value;
//     const password = target.password.value;

//     emailandpassLogin(email, password)
//       .then(() => {
//            Swal.fire({
//                   title: "Welcome back!",
//                   icon: "success",
//                 });
//                 target.reset()
//                 navigate(location?.state?.pathname || "/");
//       })
//       .catch((error) => {
        
//         Swal.fire({
//           text: error.message,
//           icon: "error",
//         });
//         target.reset()
//       });
//   };
//   const handelGoogleLogin = () => {
//     loginByEmail()
//       .then(() => {
//          Swal.fire({
//                   title: "Welcome back!",
//                   icon: "success",
//                 });
//                  navigate(location?.state?.from.pathname || "/");
//       })
//       .catch((error) => {
//          Swal.fire({
//                   title: error.message,
//                   icon: "error",
//                 });
//       });
//   };

//   return (
//     <div className="hero min-h-screen">
//       <Helmet>
//         <title>Login</title>
//       </Helmet>
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card w-full max-w-sm shrink-0">
//           <div className="card-body">
//             <div className="text-center lg:text-left">
//               <h1 className="tex-xl md:text-4xl font-bold">Login now!</h1>
//             </div>
//             <form className="fieldset text-sm lg:text-2xl" onSubmit={handelLogin}>
//               <label className="label">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="input"
//                 placeholder="Email"
//                 required
//               />
//               <label className="label">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="input"
//                 placeholder="Password"
//                 required
//               />
//               <button type="submit" className="btn btn-neutral mt-4">
//                 Login
//               </button>
//             </form>
//           </div>
//           <div className="divider">OR</div>
//           <button
//             onClick={handelGoogleLogin}
//             className="btn bg-white text-black border-[#e5e5e5]"
//           >
//             <svg
//               aria-label="Google logo"
//               width="16"
//               height="16"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 512 512"
//             >
//               <g>
//                 <path d="m0 0H512V512H0" fill="#fff"></path>
//                 <path
//                   fill="#34a853"
//                   d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                 ></path>
//                 <path
//                   fill="#4285f4"
//                   d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                 ></path>
//                 <path
//                   fill="#fbbc02"
//                   d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                 ></path>
//                 <path
//                   fill="#ea4335"
//                   d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                 ></path>
//               </g>
//             </svg>
//             Login with Google
//           </button>
//           <p className="p-4">
//             don't have an account{" "}
//             <Link to={"/registration"}>
//               <span className="text-indigo-600 font-medium underline">
//                 Sign Up
//               </span>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useContext } from "react";
import { AuthContext } from "../Authantication/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const { emailandpassLogin, loginByEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handelLogin = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;

    emailandpassLogin(email, password)
      .then(() => {
        Swal.fire({
          title: "Welcome back!",
          icon: "success",
        });
        target.reset();
        navigate(location?.state?.pathname || "/");
      })
      .catch((error) => {
        Swal.fire({
          text: error.message,
          icon: "error",
        });
        target.reset();
      });
  };

  const handelGoogleLogin = () => {
    loginByEmail()
      .then(() => {
        Swal.fire({
          title: "Welcome back!",
          icon: "success",
        });
        navigate(location?.state?.from.pathname || "/");
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d0ecff] via-white to-[#d0ecff] flex items-center justify-center px-4 py-10">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-[#045b96]">🔐 Login</h1>
          <p className="text-gray-600 mt-2 text-base">
            Welcome back! Please login to your account and continue exploring artifacts.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handelLogin}>
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-[#045b96]"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-[#045b96]"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#045b96] text-white font-semibold py-2 rounded-lg hover:bg-[#03406a] transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-500">OR</span>
        </div>
        <button
          onClick={handelGoogleLogin}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-white text-black border border-gray-300 py-2 rounded-lg hover:shadow"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path fill="#fff" d="m0 0H512V512H0" />
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
            </g>
          </svg>
          <span>Login with Google</span>
        </button>
        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?
          <Link to="/registration">
            <span className="text-[#045b96] font-medium ml-1 underline">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
