
import React, { useContext } from "react";
import { AuthContext } from "../Authantication/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import axiosSecure from "../Authantication/axiosSecure";


const AddArtifacts = () => {
  const { currentUser } = useContext(AuthContext);

  const handleSubmitArtifact = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addArtifact = Object.fromEntries(formData.entries());
    addArtifact.likedBy = [];

    try {
      const res = await axiosSecure.post(`/artifacts?email=${currentUser.email}`, addArtifact);
      if (res.data.acknowledged) {
        form.reset();
        Swal.fire({
          title: "Successfully Added!",
          icon: "success",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Failed to add artifact.",
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 shadow-md rounded-xl">
      <Helmet>
        <title>Add Artifact</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6">Add New Artifact</h2>
      <form onSubmit={handleSubmitArtifact} className="grid gap-4">
        <input type="text" name="name" placeholder="Artifact Name" required className="input input-bordered w-full" />
        <input type="url" name="image" placeholder="Artifact Image URL" required className="input input-bordered w-full" />
        <select name="type" className="select select-bordered w-full">
          <option>Tools</option>
          <option>Weapons</option>
          <option>Documents</option>
          <option>Writings</option>
          <option>Other</option>
        </select>
        <textarea name="context" placeholder="Historical Context" required className="textarea textarea-bordered w-full" />
        <textarea name="description" placeholder="Short Description" required className="textarea textarea-bordered w-full" />
        <input type="text" name="createdAt" placeholder="Created At (e.g., 100 BC)" required className="input input-bordered w-full" />
        <input type="text" name="discoveredAt" placeholder="Discovered At (e.g., 1799)" required className="input input-bordered w-full" />
        <input type="text" name="discoveredBy" placeholder="Discovered By" required className="input input-bordered w-full" />
        <input type="text" name="location" placeholder="Present Location" required className="input input-bordered w-full" />
        <div className="grid gap-2">
          <input type="text" value={currentUser?.displayName} name="authorName" readOnly className="input input-disabled w-full" />
          <input type="email" value={currentUser?.email} name="adderEmail" readOnly className="input input-disabled w-full" />
        </div>
        <button type="submit" className="btn mt-4">
          Add Artifact
        </button>
      </form>
    </div>
  );
};

export default AddArtifacts;

