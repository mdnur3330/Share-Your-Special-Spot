import React from "react";

const AddArtifacts = () => {
    const handleSubmitArtifact = ()=>{
        console.log("has added");
    }
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6  shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Add New Artifact</h2>
      <form onSubmit={handleSubmitArtifact} className="grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Artifact Name"
          required
          className="input input-bordered w-full"
        />
        <input
          type="url"
          name="image"
          placeholder="Artifact Image URL"
          required
          className="input input-bordered w-full"
        />
        <select
          name="type"
          className="select select-bordered w-full"
        >
          <option>Tools</option>
          <option>Weapons</option>
          <option>Documents</option>
          <option>Writings</option>
          <option>Other</option>
        </select>
        <textarea
          name="context"
          placeholder="Historical Context"
          required
          className="textarea textarea-bordered w-full"
        />
        <textarea
          name="description"
          placeholder="Short Description"
          required
          className="textarea textarea-bordered w-full"
        />
        <input
          type="text"
          name="createdAt"
          placeholder="Created At (e.g., 100 BC)"
          required
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="discoveredAt"
          placeholder="Discovered At (e.g., 1799)"
          required
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="discoveredBy"
          placeholder="Discovered By"
          required
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="location"
          placeholder="Present Location"
          required
          className="input input-bordered w-full"
        />
        <div className="grid gap-2">
          <input
            type="text"
            readOnly
            className="input input-disabled w-full"
          />
          <input
            type="email"
            readOnly
            className="input input-disabled w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Add Artifact
        </button>
      </form>
    </div>
  );

};

export default AddArtifacts;
