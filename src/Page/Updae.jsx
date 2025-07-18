
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Authantication/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import axiosSecure from '../Authantication/axiosSecure';

const Updae = () => {
  const artifact = useLoaderData();
  const { currentUser } = useContext(AuthContext);
  const { _id, name, image, description, location, context, createdAt, discoveredBy, discoveredAt, type } = artifact;

  const handleSubmitArtifact = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const artifactData = Object.fromEntries(formdata.entries());

    axiosSecure
      .put(`/artifacts/${_id}`, artifactData) 
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Artifact Updated!",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.error("Update failed", error);
        Swal.fire({
          title: "Failed to Update!",
          text: error.message || "Something went wrong",
          icon: "error",
        });
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 shadow-md rounded-xl">
      <Helmet>
        <title>Update Artifact</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6">Update Artifact</h2>
      <form onSubmit={handleSubmitArtifact} className="grid gap-4">
        <input type="text" name="name" defaultValue={name} placeholder="Artifact Name" required className="input input-bordered w-full" />
        <input type="url" name="image" defaultValue={image} placeholder="Artifact Image URL" required className="input input-bordered w-full" />
        <select name="type" defaultValue={type} className="select select-bordered w-full">
          <option>Tools</option>
          <option>Weapons</option>
          <option>Documents</option>
          <option>Writings</option>
          <option>Other</option>
        </select>
        <textarea name="context" placeholder="Historical Context" defaultValue={context} required className="textarea textarea-bordered w-full" />
        <textarea name="description" placeholder="Short Description" defaultValue={description} required className="textarea textarea-bordered w-full" />
        <input type="text" name="createdAt" defaultValue={createdAt} placeholder="Created At (e.g., 100 BC)" required className="input input-bordered w-full" />
        <input type="text" name="discoveredAt" defaultValue={discoveredAt} placeholder="Discovered At (e.g., 1799)" required className="input input-bordered w-full" />
        <input type="text" name="discoveredBy" defaultValue={discoveredBy} placeholder="Discovered By" required className="input input-bordered w-full" />
        <input type="text" name="location" defaultValue={location} placeholder="Present Location" required className="input input-bordered w-full" />
        <div className="grid gap-2">
          <input type="text" value={currentUser?.displayName} name="authorName" readOnly className="input input-disabled w-full" />
          <input type="email" value={currentUser?.email} name="adderEmail" readOnly className="input input-disabled w-full" />
        </div>
        <button type="submit" className="btn mt-4">Update Artifact</button>
      </form>
    </div>
  );
};

export default Updae;
