
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import axiosSecure from "../Authantication/axiosSecure";
import { AuthContext } from '../Authantication/AuthProvider';
import Swal from 'sweetalert2';

const AddSpotForm = () => {
   const { currentUser } = useContext(AuthContext);
  const handleSubmit =async (e) => {
    e.preventDefault();
  
     e.preventDefault();
     const form = e.target;
     const formData = new FormData(form);
     const addArtifact = Object.fromEntries(formData.entries());
    addArtifact.likedBy = [];
    addArtifact.adderEmail = currentUser.email;
    console.log(addArtifact);
    try {
       const res = await axiosSecure.post(`/artifacts?email=${currentUser.email}`, addArtifact);
      if (res.data.acknowledged) {
        form.reset();
        Swal.fire({
          title: "Successfully Added!",           icon: "success",         });       }     } catch (error) {
       console.error(error);       Swal.fire({
         title: "Error!",
        text: "Failed to add artifact.",
         icon: "error",
       });
     }
   };


  return (
    <div className="bg-[#FFF8EE] py-16 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#1B1F3B] text-center mb-6">
          Share Your <span className="text-yellow-500">Special Spot</span>
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Found a hidden gem during your travels? Add it to inspire others.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#1B1F3B] font-medium mb-1">Spot Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="e.g., Sajek Valley"
            />
          </div>

          <div>
            <label className="block text-[#1B1F3B] font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="e.g., Rangamati, Bangladesh"
            />
          </div>

          <div>
            <label className="block text-[#1B1F3B] font-medium mb-1">Image URL</label>
            <input
              type="url"
              name="image"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-[#1B1F3B] font-medium mb-1">Description</label>
            <textarea
              name="description"
              rows="4"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Write a short story or experience about this place..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-[#1B1F3B] font-semibold py-3 px-6 rounded-xl shadow transition duration-300"
          >
            Submit Spot
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddSpotForm;
