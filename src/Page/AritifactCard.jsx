import axios from "axios";
import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AritifactCard = ({ artifact }) => {
  const { _id, name, image, description } = artifact || {};


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
    axios.delete(`${import.meta.env.VITE_api}/${_id}`).then(res => console.log("after deleting",res.data)).catch(error => console.log(error))
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
  return (
    <div>
      <h1>{artifact.length}</h1>
      <div className="bg-base-100 w-80 shadow-sm py-6  space-y-2.5">
        <figure className="">
          <img src={image} alt="Shoes" className="w-full h-50" />
        </figure>
        <div className="items-center ml-4 space-y-3">
          <h2 className="text-start">{name}</h2>
          <p>{description.split(" ").slice(0, 14).join(" ") + "...."}</p>
          <div>
            {artifact.myArtifact ? (
              <div className=" flex gap-8">
                <Link className="btn btn-primary" to={`/update/${_id}`}>
                  Update
                </Link>
                <button onClick={handelDelet} className="btn btn-primary">
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex gap-18 items-center">
                <Link className="btn btn-primary" to={`/details/${_id}`}>
                  View Detais
                </Link>
                <div>
                  <p className="border rounded-lg py-2 px-4">Liked {0}</p>
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
