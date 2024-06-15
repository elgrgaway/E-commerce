// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { app, db } from "../config";
// import { useEffect, useState } from "react";
// import { collection } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// function Login() {
//   const navigate = useNavigate();
//   const docRef = collection(db, "user");
//   const auth = getAuth(app);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       console.log(user);
//     });
//     return () => unsubscribe();
//   }, [auth]);
//   const login = async (e) => {
//     e.preventDefault();
//     try {
//       const credintials = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       setErrorMsg("");
//       setEmail("");
//       setPassword("");
//       setSuccessMsg(
//         "login completed, you will redirected to home automatically"
//       );
//       setTimeout(() => {
//         setSuccessMsg("");
//         navigate("/");
//       }, 2000);
//       console.log(credintials);
//     } catch (error) {
//       console.log(error.message);
//       setErrorMsg("Wrong Email or Password");
//     }
//   };
//   return (
//     <div className="flex mt-[60px] mb-[140px] items-center gap-32 relative">
//       {successMsg && (
//         <div className="bg-green-300 text-white p-2.5 my-4 absolute top-20 right-2.5 rounded ">
//           <p>{successMsg}</p>
//         </div>
//       )}
//       {errorMsg && (
//         <div className="bg-red-400 text-white p-2.5 my-4 absolute top-20 right-2.5 rounded ">
//           <p>{errorMsg}</p>
//         </div>
//       )}
//       <img
//         className=" min-w-[40%]"
//         loading="lazy"
//         src="Side Image.png"
//         alt="image of some products"
//       />
//       <div>
//         <h2 className=" text-4xl font-medium font-['Inter'] mb-6">
//           Log in to Exclusive
//         </h2>
//         <span className=" block mb-12">Enter Your details below</span>
//         <form onSubmit={login}>
//           <input
//             type="email"
//             placeholder="Email "
//             className=" border-b w-full outline-none border-solid py-2 mb-10 border-black"
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <br />
//           <input
//             required
//             type="password"
//             placeholder="Password"
//             className=" border-b w-full outline-none border-solid py-2 mb-10 border-black"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <div className="flex items-center justify-between">
//             <button className="bg-[#DB4444] text-white  py-4 px-11 font-medium rounded  transition  hover:opacity-85">
//               Log in
//             </button>
//             <button
//               onClick={() => signOut(auth)}
//               className=" text-[#DB4444]  transition hover:opacity-85"
//             >
//               Forget Password?
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Login;

import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      setSuccessMsg("Login succeesful");

      setTimeout(() => {
        setSuccessMsg("");
        navigate("/");
      }, 0);
    } catch (error) {
      setErrorMsg(error.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 0);
    }
  };
  return (
    <div className="flex mt-[60px] mb-[140px] items-center gap-32 relative max-xl:w-[82%] max-xl:text-center max-xl:m-auto max-xl:mt-12 max-xl:mb-[140px]">
      {successMsg &&
        toast.success(successMsg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })}

      {errorMsg &&
        toast.error(errorMsg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })}
      <img
        className=" min-w-[40%] max-xl:hidden"
        loading="lazy"
        src="Side Image.png"
        alt="image of some products"
      />
      <div className="max-xl:w-full max-xl:m-auto">
        <h2 className="text-4xl font-medium font-['Inter'] mb-6">
          Log in to Exclusive
        </h2>
        <span className="block mb-12">Enter Your details below</span>
        <form onSubmit={loginHandler}>
          <input
            type="email"
            placeholder="Email"
            className="border-b w-full outline-none border-solid py-2 mb-10 border-black"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            required
            type="password"
            placeholder="Password"
            className="border-b w-full outline-none border-solid py-2 mb-10 border-black"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="flex items-center justify-between">
            <button className="bg-[#DB4444] text-white py-4 px-11 font-medium rounded transition hover:opacity-85">
              Log in
            </button>
            <button className="text-[#DB4444] transition hover:opacity-85">
              Forget Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
