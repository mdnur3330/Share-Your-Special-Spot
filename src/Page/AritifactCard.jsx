import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const AritifactCard = ({ artifact }) => {
  const [isDelete, setIsDelete] = useState(false)
  const { _id, name, image, description,likedBy } = artifact || {};
  const navigate = useNavigate()


  const handelDelet = ()=>{
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete(`${import.meta.env.VITE_api}artifacts/${_id}`).then(res =>{ 
      if(res.data.deletedCount > 0){
        setIsDelete(true)
        navigate('/all-artifact')
      }
     }).catch()
    swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "thanks for your decision",
      icon: "error"
    });
  }
});
  }


  if(isDelete) return null
  return (
    <div className="mx-auto">
      <div className="bg-base-100 w-80 shadow-md border border-gray-400 rounded-lg pb-3  space-y-2.5">
        <figure className="">
          <img src={image} alt="Shoes" className="w-full h-50" />
        </figure>
        <div className="items-center ml-4 space-y-3">
          <h2 className="text-start text-xl font-medium">{name}</h2>
          <p>{description.split(" ").slice(0,18).join(" ")+"...."}</p>
          <div>
            {artifact.myartifact ? (
              <div className=" flex justify-between">
                <Link className="btn btn-primary" to={`/update/${_id}`}>
                  Update
                </Link>
                <button onClick={handelDelet} className="btn mr-2">
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex gap-18 items-center">
                <Link className="btn bg-blue-600 text-white rounded-lg hover:bg-blue-700 " to={`/details/${_id}`}>
                  View Detais
                </Link>
                <div>
                  <p className="border rounded-lg py-2 px-4">🖐️ {likedBy.length}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AritifactCard;
