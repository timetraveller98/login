'use client'
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter()
    return ( 
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div
          className="relative flex flex-col m-6 space-y-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        >
          <div className="flex flex-col justify-center p-6 md:p-12">
            <span className="mb-2 text-4xl font-bold">Welcome back</span>
            {/* <span className="font-light text-gray-400 mb-6">
              Please enter your details
            </span> */}
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
            <div className="flex justify-center w-full py-4">
              {/* <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember for 30 days</span>
              </div> */}
              <span className="font-bold text-md cursor-pointer" onClick={()=>router.push('/forget')}>Forgot password</span>
            </div>
            <button
              className="w-full bg-black text-white p-2 rounded-lg mb-6 border hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Sign in
            </button>
            {/* <button
              className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
            >
              <img src="/google.svg" alt="img" className="w-6 h-6 inline mr-2" />
              Sign in with Google
            </button> */}
            <div className="text-center text-gray-400">
              Dont'have an account?
              <span className="font-bold text-black cursor-pointer" onClick={()=>router.push('/signup')}> Signup</span>
            </div>
          </div>
          {/* <div className="relative">
            <img
              src="/image.jpg"
              alt="img"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
            <div
              className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
            >
              <span className="text-white text-xl"
                >We've been uesing Untitle to kick"<br />start every new project
                and can't <br />imagine working without it."
              </span>
            </div>
          </div> */}
        </div>
      </div>
     );
}
 
export default LoginForm;