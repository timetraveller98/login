'use client'
import { useRouter } from "next/navigation";
const Signup = () => {
  
  const router = useRouter()
    return ( 
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div
          className="relative flex flex-col m-6 space-y-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        >
          <div className="flex flex-col justify-center p-4 md:p-12">
            <span className="text-4xl font-bold">Sign Up</span>
            {/* <span className="font-light text-gray-400 mb-6">
              Please enter your details
            </span> */}
            <div className="py-3">
              <span className="mb-2 text-md">Name</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="name"
                id="name"
              />
            </div>
            <div className="py-3">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
              />
            </div>
            <div className="py-3">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
         
            <button
              className="w-full bg-black text-white p-2 rounded-lg my-6 border hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Sign up
            </button>
            {/* <button
              className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
            >
              <img src="/google.svg" alt="img" className="w-6 h-6 inline mr-2" />
              Sign up with Google
            </button> */}
            <div className="text-center text-gray-400">
              have an account?
              <span className="font-bold text-black cursor-pointer" onClick={()=>router.push('/login')}> Login</span>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Signup;