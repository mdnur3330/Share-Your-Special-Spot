// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router";
// import AritifactCard from "./AritifactCard";
// import { Helmet } from "react-helmet";
// import { AuthContext } from "../Authantication/AuthProvider";
// import axios from "axios";
// // import { AuthContext } from '../Authantication/AuthProvider';

// const MyArtifactsPage = () => {
//   const params = useParams()
//   const {currentUser} = useContext(AuthContext)
//   // const token = currentUser?.accessToken
//   const token = currentUser?.accessToken

//   const [myArtifacts, setMyArtifacts] = useState([])
//   useEffect(()=>{
//     axios(`${import.meta.env.VITE_api}my-artifact?email=${params.email}`,{
//       headers:{
//         authorization: `Bearer ${token}`
//       }
//     }).then(res => setMyArtifacts(res.data)).catch()
//   },[params,token])
//   return (
//     <div>
//       <Helmet>
//         <title>My Artifac</title>
//       </Helmet>
    
//         <section className="min-h-screen px-1 lg:px-6 py-10 bg-gray-50">
//             <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
//               My Artifact Items
//             </h2>
      
//             {Array.isArray(myArtifacts) && myArtifacts.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
//                 {myArtifacts.map((myArtifact) => (
//                   myArtifact.myartifact = true,
//                   <AritifactCard key={myArtifact._id} artifact={myArtifact} />
//                 ))}
//               </div>
//             ) : (
//               <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-md">
//                 <p className="text-xl text-gray-500 text-center">
//                   💔 You don’t have any artifact items
//                 </p>
//               </div>
//             )}
//           </section>
//     </div>
//   );
// };

// export default MyArtifactsPage;













import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AritifactCard from "./AritifactCard";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Authantication/AuthProvider";
import axios from "axios";

const MyArtifactsPage = () => {
  const { email } = useParams();
  const { currentUser } = useContext(AuthContext);
  const token = currentUser?.accessToken;

  const [myArtifacts, setMyArtifacts] = useState([]);

  useEffect(() => {
    if (!token || !email) return;

    axios(`${import.meta.env.VITE_api}my-artifact?email=${email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setMyArtifacts(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, [email, token]);

  return (
    <div className="bg-[#fff8ee] min-h-screen pb-16">
      <Helmet>
        <title>My Artifacts</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12">
        <h2 className="text-4xl font-bold text-center text-[#1b1f3b] mb-10">
          My <span className="text-yellow-500">Artifacts</span>
        </h2>

        {Array.isArray(myArtifacts) && myArtifacts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {myArtifacts.map((artifact) => {
              artifact.myartifact = true; // Flag for edit/delete access
              return (
                <AritifactCard key={artifact._id} artifact={artifact} />
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center bg-white h-64 rounded-2xl shadow-lg border border-yellow-200">
            <p className="text-lg md:text-xl text-gray-500 text-center px-6">
              💔 You don’t have any artifact items yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyArtifactsPage;
