import * as React from "react";
import { Link } from "react-router-dom";


export default function LoginForm() {

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-gray-200">
      <h1 className="text-2xl text-center md:text-5xl font-semibold">Welcome to GS Schools</h1>
      <h3 className="font-medium text-lg text-gray-500 mt-4">
        Please enter your details
      </h3>

      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label> 
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 mt-1 bg-transparent"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input className="" type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-sm md:text-base" for="remember">
              Remember Password
            </label>
          </div>
          <button className="font-medium text-sm md:text-base text-violet-500 hover:underline">
            Forgot password?
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
            Sign in
          </button>
        </div>
        <div className="mt-4 flex gap-4">
           <h3>Don't have an account? </h3>
           <Link className="hover:underline"  to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
}
