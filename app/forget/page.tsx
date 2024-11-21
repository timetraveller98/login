'use client'
import { useRouter } from "next/navigation";
const ForgetForm = () => {
  const router = useRouter()
    return ( 
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div
          className="relative flex flex-col m-6 space-y-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        >
          <div className="flex flex-col justify-center p-6 md:p-12">
            <span className="mb-2 text-4xl font-bold">Reset Password</span>
            <div className="py-3">
              <span className="mb-2 text-md">Email</span>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
              />
            </div>
            <button
              className="w-full bg-black text-white p-3 my-3 rounded-lg mb-6 border hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Sign in
            </button>
            <div className="text-center text-gray-400">
              Dont'have an account?
              <span className="font-bold text-black cursor-pointer" onClick={()=>router.push('/signup')}> Signup</span>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default ForgetForm;