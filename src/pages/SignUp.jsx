import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          name,
          email,
          password,
        });
      }
      setSuccessMsg("SignUp complete");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  return (
    <div className="flex mt-[60px] mb-[140px] items-center gap-32 relative">
      {successMsg && (
        toast.success(successMsg, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        // <div className="bg-green-300 text-white p-2.5 my-4 absolute top-10 right-2.5 rounded ">
        //   <p>{successMsg}</p>
        // </div>
      )}
      {errorMsg && (toast.error(errorMsg, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        // <div className="bg-red-400 text-white p-2.5 my-4 absolute top-10 right-2.5 rounded ">
        //   <p>{errorMsg}</p>
        // </div>
      )}
      <img
        className=" min-w-[40%]"
        loading="lazy"
        src="Side Image.png"
        alt="image of some products"
      />
      <div>
        <h2 className=" text-4xl font-medium font-['Inter'] mb-6">
          Create an account
        </h2>
        <span className=" block mb-12">Enter Your details below</span>
        <form onSubmit={signupHandler}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className=" border-b w-full outline-none border-solid py-2 mb-10 border-black"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email "
            className=" border-b w-full outline-none border-solid py-2 mb-10 border-black"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className=" border-b w-full outline-none border-solid py-2 mb-10 border-black"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button className="bg-[#DB4444] text-white  w-full py-4 font-medium rounded mb-4 transition  hover:opacity-85">
            Create Account
          </button>
          <button className=" w-full py-4  rounded flex items-center justify-center gap-4 border-solid border transition border-[#00000041] mb-8 hover:bg-gray-100">
            <img src="Icon-Google.png" alt="google icon" />
            <span>sign up with Google</span>
          </button>
          <span>
            Already have account?
            <Link to="/login" className=" link">
              Log in
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
