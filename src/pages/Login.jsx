import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="flex flex-col items-center px-16 pt-12 pb-20 text-base font-medium text-black bg-stone-50 max-md:px-5">
      <div className="flex flex-col max-w-full w-[480px]">
        <div className="flex gap-2 self-center text-2xl font-semibold leading-6 whitespace-nowrap">
          <img
            loading="lazy"
            srcSet="../../public/assets/images/logo.png"
            className="shrink-0 w-6 aspect-square"
          />
          <div>AutoTrading</div>
        </div>
        <div className="flex flex-col p-10 mt-52 rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 leading-[150%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="self-center text-6xl font-semibold text-center leading-[60px] max-md:text-4xl">
            Login
          </div>
          <div className="self-center mt-2 text-center text-stone-500">
            Please sign in.
          </div>
          <input
            className="px-6 py-4 mt-10 whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-200 max-md:px-5"
            type="text"
            placeholder="Enter your Email"
          />
          <input
            className="px-6 py-4 mt-10 whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-200 max-md:px-5"
            type="text"
            placeholder="Enter your Password"
          />

          <button className="px-6 py-4 mt-6 text-center text-white whitespace-nowrap bg-black rounded-xl max-md:px-5">
            Login
          </button>
          <button className="mt-6 text-center text-stone-500">
            Forgot Password?
          </button>
        </div>
        <div className="px-6 py-4 mt-4 leading-6 text-center text-orange-500 rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5 max-md:max-w-full">
          <span className="text-black">Don’t have an account? </span>
          <Link to="/register" className="text-orange-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
