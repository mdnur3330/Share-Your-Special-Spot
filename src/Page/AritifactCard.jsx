import React from "react";
import { Link } from "react-router";

const AritifactCard = ({ artifact }) => {
    const {_id, name, image, description} = artifact
  return (
    <div>
      <h1>{artifact.length}</h1>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>
            {description.split(" ").slice(0,14).join(" ")+"...."}
          </p>
          <div className="card-actions">
            <Link className="btn btn-primary" to={`/details/${_id}`}>View Detais</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AritifactCard;
