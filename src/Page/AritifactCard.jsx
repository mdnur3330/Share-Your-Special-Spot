
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router";
// import Swal from "sweetalert2";
// import axiosSecure from "../Authantication/axiosSecure";

// const AritifactCard = ({ artifact }) => {
//   const [isDelete, setIsDelete] = useState(false);
//   const { _id, name, image, description, likedBy } = artifact || {};
//   const navigate = useNavigate();

//   const handelDelet = () => {
//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: "btn btn-success",
//         cancelButton: "btn btn-danger",
//       },
//       buttonsStyling: false,
//     });

//     swalWithBootstrapButtons
//       .fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonText: "Yes, delete it!",
//         cancelButtonText: "No, cancel!",
//         reverseButtons: true,
//       })
//       .then((result) => {
//         if (result.isConfirmed) {
        
//           axiosSecure
//             .delete(`/artifacts/${_id}`)
//             .then((res) => {
//               if (res.data.deletedCount > 0) {
//                 setIsDelete(true);
//                 navigate("/all-artifact");
//                 swalWithBootstrapButtons.fire({
//                   title: "Deleted!",
//                   text: "Your file has been deleted.",
//                   icon: "success",
//                 });
//               }
//             })
//             .catch((err) => {
//               console.error(err);
//               Swal.fire("Error", "Failed to delete artifact.", "error");
//             });
//         } else if (result.dismiss === Swal.DismissReason.cancel) {
//           swalWithBootstrapButtons.fire({
//             title: "Cancelled",
//             text: "Thanks for your decision",
//             icon: "error",
//           });
//         }
//       });
//   };

//   if (isDelete) return null;

//   return (
//     <div className="mx-auto">
//       <div className="bg-base-100 w-80 shadow-md border border-gray-400 rounded-lg pb-3  space-y-2.5">
//         <figure className="">
//           <img src={image} alt="Artifact" className="w-full h-50" />
//         </figure>
//         <div className="items-center ml-4 space-y-3">
//           <h2 className="text-start text-xl font-medium">{name.split(" ").slice(0, 1).join(" ") + "...."}</h2>
//           <p>{description.split(" ").slice(0, 4).join(" ") + "...."}</p>
//           <div>
//             {artifact.myartifact ? (
//               <div className="flex justify-between">
//                 <Link className="btn btn-primary" to={`/update/${_id}`}>
//                   Update
//                 </Link>
//                 <button onClick={handelDelet} className="btn mr-2">
//                   Delete
//                 </button>
//               </div>
//             ) : (
//               <div className="flex gap-18 items-center">
//                 <Link
//                   className="btn bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   to={`/details/${_id}`}
//                 >
//                   View Details
//                 </Link>
//                 <div>
//                   <p className="border rounded-lg py-2 px-4">
//                     🖐️ {likedBy.length}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AritifactCard;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import axiosSecure from "../Authantication/axiosSecure";

const AritifactCard = ({ artifact }) => {
  const [isDelete, setIsDelete] = useState(false);
  const { _id, name, image, description, likedBy = [], myartifact } = artifact || {};
  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/artifacts/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              setIsDelete(true);
              navigate("/all-artifact");
              Swal.fire("Deleted!", "Your artifact has been deleted.", "success");
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  if (isDelete) return null;

  return (
    <div className="mx-auto w-full max-w-xs bg-white rounded-xl border border-yellow-300 shadow-md hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={name}
        className="rounded-t-xl w-full h-52 object-cover"
      />

      <div className="p-4 space-y-3">
        <h3 className="text-xl font-semibold text-[#1b1f3b] truncate">{name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

        {myartifact ? (
          <div className="flex justify-between items-center pt-2">
            <Link
              to={`/update/${_id}`}
              className="bg-yellow-400 hover:bg-yellow-500 text-[#1b1f3b] font-medium px-4 py-2 rounded-lg transition"
            >
              Update
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition"
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center pt-2">
            <Link
              to={`/details/${_id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
            >
              View Details
            </Link>
            <span className="bg-yellow-100 text-yellow-600 font-semibold px-3 py-1 rounded-full text-sm">
              🖐️ {likedBy.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AritifactCard;
