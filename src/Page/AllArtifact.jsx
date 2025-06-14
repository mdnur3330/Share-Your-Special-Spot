import React, { useRef } from "react";
import { useLoaderData } from "react-router";
import AritifactCard from "./AritifactCard";
import axios from "axios";

const AllArtifact = () => {
  const artifacts = useLoaderData();
  const searchRef = useRef()

  

  const hadelSearch = (e)=>{
    e.preventDefault()
    console.log(searchRef.current.value);

    axios(``)
  }
  return (
    <div>
      <div>
        <form onSubmit={hadelSearch}>
            <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" ref={searchRef} required placeholder="Search" />
        </label>
        <input type="submit" />
        </form>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-16  gap-8 justify-between">
        {artifacts.map(
          (artifact) => (
            (artifact.myArtifact = false),
            (
              <AritifactCard
                artifact={artifact}
                key={artifact._id}
              ></AritifactCard>
            )
          )
        )}
      </section>
    </div>
  );
};

export default AllArtifact;
