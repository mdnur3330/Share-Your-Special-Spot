import React from "react";
import item1 from "../assets/photo/sortartifact1.jpg";
import item2 from "../assets/photo/sortartifact2.jpg";
import item3 from "../assets/photo/sortartifact3.jpg";
import { Link } from "react-router";

const ShortArtifact = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="hidden  lg:flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              "Legacies of
              <span className="inline-block text-deep-purple-accent-400">
                Ancient Civilizations"
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              This collection features iconic artifacts from ancient cultures:
              the opulent gold adornments of the Andean elite, the dignified
              bronze statue of a Roman emperor, and the divine stone figure of
              the Egyptian god Osiris. Together, they represent the artistic
              brilliance, spiritual beliefs, and imperial power that defined
              these historic civilizations.
            </p>
          </div>
          <div className="mt-6">
            <Link
              className="btn bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
              to="/all-artifact"
            >
              Show AllArtifact
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={item1}
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={item2}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={item3}
              alt=""
            />
          </div>
        </div>
        <div className="lg:hidden flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              "Legacies of
              <span className="inline-block text-deep-purple-accent-400">
                Ancient Civilizations"
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              This collection features iconic artifacts from ancient cultures:
              the opulent gold adornments of the Andean elite, the dignified
              bronze statue of a Roman emperor, and the divine stone figure of
              the Egyptian god Osiris. Together, they represent the artistic
              brilliance, spiritual beliefs, and imperial power that defined
              these historic civilizations.
            </p>
          </div>
          <div className="mt-6">
            <Link
              className="btn bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
              to="/all-artifact"
            >
              Show AllArtifact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortArtifact;
