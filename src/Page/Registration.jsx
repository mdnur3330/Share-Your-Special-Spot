import React, { useContext, useState } from "react";
import { AuthContext } from "../Authantication/AuthProvider";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1749459183680.json";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

const Registration = () => {
  const { emailandpassregtration, handelUpdateProfile, loginByEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [hideShow, setHideShow] = useState(false);
  const [hideShowConfirm, setHideShowConfirm] = useState(false);

  const handelRegistration = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const photo = target.photo.value;
    const email = target.email.value;
    const password = target.password.value;
    const confirm = target.confirm.value;

    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        text: "Password! Needs at least 6 character!",
        color: "#333",
      });
    }

    if (!/[A-Z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "Invalid password! Needs at least one Uppercase letter!",
        color: "#333",
      });
    }

    if (!/[a-z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "Invalid password! Needs at least one Lowercase letter!",
        color: "#333",
      });
    }
    if (password !== confirm) {
      return Swal.fire({
        icon: "error",
        text: "Password and confirm password must be same!",
        color: "#333",
      });
    }

    const user = {
      displayName: name,
      photoURL: photo,
    };
    emailandpassregtration(email, password)
      .then(() => {
        handelUpdateProfile(user);
        Swal.fire({
          title: "Welcome!",
          text: "Your account successfully created!",
          icon: "success",
        });
        target.reset()
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Welcome!",
          text: error.message,
          icon: "error",
        });
        target.reset()
      });
  };

  const handelGoogleLogin = () => {
    loginByEmail()
      .then(() => {
        Swal.fire({
          title: 'Your account successfully created!',
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
         Swal.fire({
                         title: error.message,
                         icon: "error",
                       });
      });
  };


   const handelPasswordHideShow = () => {
    setHideShow(!hideShow);
  };
  const handelConfirmPasswordHideShow = () => {
    setHideShowConfirm(!hideShowConfirm);
  };
  return (
    // <div className="hero bg-base-100 min-h-screen">
    //   <Helmet>
    //     <title>SignUp</title>
    //   </Helmet>
    //   <div className="hero-content flex gap-8">
    //     <div className="card bg-base-100 shrink-0 w-full max-w-sm">
    //       <div className="card-body">
    //         <h1 className="text-xl md:text-4xl font-bold">Ragistration now!</h1>
    //         <form className="fieldset text-sm md:text-xl" onSubmit={handelRegistration}>
    //           <label className="label">Name</label>
    //           <input
    //             type="text"
    //             name="name"
    //             className="input"
    //             placeholder="Name"
    //             required
    //           />
    //           <label className="label">Photo</label>
    //           <input
    //             type="url"
    //             name="photo"
    //             className="input"
    //             placeholder="Photo"
    //             required
    //           />
    //           <label className="label">Email</label>
    //           <input
    //             type="email"
    //             name="email"
    //             className="input"
    //             placeholder="Email"
    //             required
    //           />
    //           <div className="relative">
    //               <label className="label text-xl">Password</label>
    //               <input
    //                 type={hideShow ? "text" : "password"}
    //                 name="password"
    //                 className="input relative text-xl"
    //                 placeholder="*******"
    //                 required
    //               />
    //               <div
    //                 onClick={handelPasswordHideShow}
    //                 className="top-10 right-7 z-2 absolute cursor-pointer"
    //               >
    //                 {hideShow ? (
                      
    //                 <IoMdEyeOff size={20}/>
    //                 ) : (
    //                    <IoEye size={20}/>
    //                 )}
    //               </div>
    //             </div>
    //             <div className="relative">
    //               <label className="label text-xl">Confirm Password</label>
    //               <input
    //                 type={hideShowConfirm ? "text" : "password"}
    //                 name="confirm"
    //                 className="input relative text-xl"
    //                 placeholder="*******"
    //                 required
    //               />
    //               <div
    //                 onClick={handelConfirmPasswordHideShow}
    //                 className="top-10 right-7 z-2 absolute cursor-pointer"
    //               >
    //                 {hideShowConfirm ? (
                    
    //                 <IoMdEyeOff size={20}/>
    //                 ) : (
    //              <IoEye size={20}/>
                        
    //                 )}
    //               </div>
    //             </div>


    //           <button type="submit" className="btn btn-neutral mt-4 text-xl">
    //             Ragistiation
    //           </button>
    //         </form>
    //         <div className="divider">OR</div>
    //       </div>
    //       <button
    //         onClick={handelGoogleLogin}
    //         className="btn bg-white text-black border-[#e5e5e5]"
    //       >
    //         <svg
    //           aria-label="Google logo"
    //           width="16"
    //           height="16"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 512 512"
    //         >
    //           <g>
    //             <path d="m0 0H512V512H0" fill="#fff"></path>
    //             <path
    //               fill="#34a853"
    //               d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
    //             ></path>
    //             <path
    //               fill="#4285f4"
    //               d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
    //             ></path>
    //             <path
    //               fill="#fbbc02"
    //               d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
    //             ></path>
    //             <path
    //               fill="#ea4335"
    //               d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
    //             ></path>
    //           </g>
    //         </svg>
    //         Login with Google
    //       </button>
    //       <p className="p-4">
    //         alreday have an account{" "}
    //         <Link to={"/login"}>
    //           <span className="text-indigo-600 font-medium underline">
    //             Sign In
    //           </span>
    //         </Link>
    //       </p>
    //     </div>
    //     <div className="w-76 h-76 hidden lg:block">
    //       <Lottie animationData={animationData} loop={true} />
    //     </div>
    //   </div>
    // </div>

    <div className="bg-gradient-to-b from-[#d0ecff] via-white to-[#d0ecff] min-h-screen flex flex-col items-center justify-center px-4 py-10">
  <Helmet>
    <title>SignUp</title>
  </Helmet>

  {/* Title */}
  <div className="text-center mb-10 max-w-2xl">
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#045b96]">
      📝 Create an Account
    </h2>
    <p className="text-gray-600 mt-3 text-base md:text-lg px-4">
      Join our community and explore the wonders of history. Register now to start your journey through time.
    </p>
  </div>

  {/* Form + Illustration */}
  <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
    {/* Animation */}
    <div className="w-full max-w-md hidden lg:block">
      <Lottie animationData={animationData} loop={true} />
    </div>

    {/* Form Card */}
    <div className="bg-white shadow-xl rounded-3xl border border-blue-200 w-full max-w-md p-8">
      <form className="space-y-4" onSubmit={handelRegistration}>
        <div>
          <label className="label font-semibold text-[#045b96]">Name</label>
          <input type="text" name="name" className="input w-full border border-blue-300" placeholder="Your name" required />
        </div>
        <div>
          <label className="label font-semibold text-[#045b96]">Photo URL</label>
          <input type="url" name="photo" className="input w-full border border-blue-300" placeholder="Photo URL" required />
        </div>
        <div>
          <label className="label font-semibold text-[#045b96]">Email</label>
          <input type="email" name="email" className="input w-full border border-blue-300" placeholder="Email address" required />
        </div>
        <div className="relative">
          <label className="label font-semibold text-[#045b96]">Password</label>
          <input type={hideShow ? "text" : "password"} name="password" className="input w-full border border-blue-300" placeholder="*******" required />
          <div onClick={handelPasswordHideShow} className="absolute top-[36px] right-3 cursor-pointer z-10">
            {hideShow ? <IoMdEyeOff size={20} /> : <IoEye size={20} />}
          </div>
        </div>
        <div className="relative">
          <label className="label font-semibold text-[#045b96]">Confirm Password</label>
          <input type={hideShowConfirm ? "text" : "password"} name="confirm" className="input w-full border border-blue-300" placeholder="*******" required />
          <div onClick={handelConfirmPasswordHideShow} className="absolute top-[36px] right-3 cursor-pointer z-10">
            {hideShowConfirm ? <IoMdEyeOff size={20} /> : <IoEye size={20} />}
          </div>
        </div>
        <button type="submit" className="btn bg-gradient-to-r from-[#045b96] to-[#0585d4] text-white w-full hover:scale-105 transition duration-300">
          Register
        </button>
      </form>

      <div className="divider my-6">OR</div>

      <button
        onClick={handelGoogleLogin}
        className="btn bg-white text-black border border-gray-300 w-full hover:bg-gray-100"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
          </g>
        </svg>
        <span className="ml-2">Register with Google</span>
      </button>

      <p className="pt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 underline font-semibold">
          Sign In
        </Link>
      </p>
    </div>
  </div>
</div>

  );
};

export default Registration;
