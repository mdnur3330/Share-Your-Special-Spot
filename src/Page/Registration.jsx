import React, { useContext } from "react";
import { AuthContext } from "../Authantication/AuthProvider";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1749459183680.json";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Registration = () => {
  const { emailandpassregtration, handelUpdateProfile, loginByEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handelRegistration = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const photo = target.photo.value;
    const email = target.email.value;
    const password = target.password.value;

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

    const user = {
      displayName: name,
      photoURL: photo,
    };
    emailandpassregtration(email, password)
      .then((result) => {
        console.log(result);
        handelUpdateProfile(user);
        Swal.fire({
          title: "Welcome!",
          text: "Your account successfully created!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Welcome!",
          text: error.message,
          icon: "error",
        });
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
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex gap-8">
        <div className="card bg-base-100 shrink-0 w-full max-w-sm">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Ragistration now!</h1>
            <form className="fieldset text-2xl" onSubmit={handelRegistration}>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              <label className="label">Photo</label>
              <input
                type="url"
                name="photo"
                className="input"
                placeholder="Photo"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4 text-xl">
                Ragistiation
              </button>
            </form>
            <div className="divider">OR</div>
          </div>
          <button
            onClick={handelGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
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
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className="p-4">
            alreday have an account{" "}
            <Link to={"/login"}>
              <span className="text-indigo-600 font-medium underline">
                Sign In
              </span>
            </Link>
          </p>
        </div>
        <div style={{ width: 300, height: 300 }}>
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Registration;
