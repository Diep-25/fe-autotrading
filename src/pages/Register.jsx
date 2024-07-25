import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="flex flex-col items-center px-16 pt-12 pb-20 text-base font-medium bg-stone-50 max-md:px-5">
      <div className="flex flex-col max-w-full w-[480px]">
        <div className="flex gap-2 self-center text-2xl font-semibold leading-6 text-black whitespace-nowrap">
          <img
            loading="lazy"
            srcSet="../../public/assets/images/logo.png"
            className="shrink-0 w-6 aspect-square"
          />
          <div>AutoTrading</div>
        </div>
        <div className="flex flex-col p-10 mt-48 rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 leading-[150%] text-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="self-center text-6xl font-semibold text-center text-black leading-[60px] max-md:text-4xl">
            Welcome
          </div>
          <div className="self-center mt-2 text-center text-stone-500">
            Please sign up
          </div>
          <input
            placeholder="Full Name"
            type="text"
            className="px-6 py-4 mt-10 bg-white rounded-xl border border-solid border-neutral-200 max-md:px-5"
          />
          <input
            placeholder="Email"
            type="text"
            className="px-6 py-4 mt-4 bg-white rounded-xl border border-solid border-neutral-200 max-md:px-5"
          />
          <input
            placeholder="Phone Number"
            type="text"
            className="px-6 py-4 mt-4 bg-white rounded-xl border border-solid border-neutral-200 max-md:px-5"
          />
          <button className="px-6 py-4 mt-6 text-center text-white bg-black rounded-xl max-md:px-5">
            Create Account
          </button>
        </div>
        <div className="px-6 py-4 mt-4 leading-6 text-center text-orange-500 rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5 max-md:max-w-full">
          <span className="text-black">Already have an account? </span>
          <Link to="/login" className="text-orange-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
