import React, { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LoginPage = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const { theme, setTheme } = useTheme(); // Access theme and setTheme from useTheme

  return (
    <>
      <div className="font-montserrat flex flex-col justify-center items-center min-h-screen bg-background dark:bg-[#121212] transition-colors duration-300">
        <Navbar
          darkMode={theme === "dark"}
          toggleDarkMode={() => setTheme(theme === "dark" ? "light" : "dark")} // Toggle theme
        />
        <div
          className={`bg-white dark:bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden w-full max-w-3xl relative min-h-[480px] transition-all duration-500 ${
            rightPanelActive ? "right-panel-active" : ""
          }`}
        >
          {/* Sign Up Form */}
          <div className="absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 opacity-0 z-1 sign-up-container">
            <form
              className="bg-teal-500 flex flex-col p-12 h-full justify-center items-center text-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <h1 className="font-bold mb-2 text-2xl text-white dark:text-gray-100">
                Create Account
              </h1>
              <div className="flex my-2.5">
                <a className="border border-white/30 rounded-full flex justify-center items-center mx-1.5 h-10 w-10 cursor-pointer text-white hover:bg-white/10 transition">
                  <FaFacebookF />
                </a>
                <a className="border border-white/30 rounded-full flex justify-center items-center mx-1.5 h-10 w-10 cursor-pointer text-white hover:bg-white/10 transition">
                  <FaGooglePlusG />
                </a>
                <a className="border border-white/30 rounded-full flex justify-center items-center mx-1.5 h-10 w-10 cursor-pointer text-white hover:bg-white/10 transition">
                  <FaLinkedinIn />
                </a>
              </div>
              <span className="text-xs mb-2.5 text-white/80">
                or use your email for registration
              </span>
              <input
                type="text"
                placeholder="Name"
                required
                className="bg-white dark:bg-gray-700 text-black dark:text-white border-none py-3 px-4 my-2 w-full rounded"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="bg-white dark:bg-gray-700 text-black dark:text-white border-none py-3 px-4 my-2 w-full rounded"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="bg-white dark:bg-gray-700 text-black dark:text-white border-none py-3 px-4 my-2 w-full rounded"
              />
              <button
                className="rounded-full border-2 border-white bg-blue-900 dark:bg-blue-800 text-white text-xs font-bold py-3 px-11 uppercase tracking-wide transition duration-200 ease-in hover:bg-blue-700 active:scale-95 mt-4"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Sign In Form */}
          <div className="absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 z-2 sign-in-container">
            <form
              className="bg-teal-500 flex flex-col p-12 h-full justify-center items-center text-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <h1 className="font-bold mb-2 text-2xl text-white dark:text-gray-100">
                Sign in
              </h1>
              <div className="flex my-2.5">
                <a className="border border-white/30 rounded-full flex justify-center items-center mx-1.5 h-10 w-10 cursor-pointer text-white hover:bg-white/10 transition">
                  <FaFacebookF />
                </a>
                <a className="border border-white/30 rounded-full flex justify-center items-center mx-1.5 h-10 w-10 cursor-pointer text-white hover:bg-white/10 transition">
                  <FaGooglePlusG />
                </a>
                <a className="border border-white/30 rounded-full flex justify-center items-center mx-1.5 h-10 w-10 cursor-pointer text-white hover:bg-white/10 transition">
                  <FaLinkedinIn />
                </a>
              </div>
              <span className="text-xs mb-2.5 text-white/80">
                or use your account
              </span>
              <input
                type="email"
                placeholder="Email"
                required
                className="bg-white dark:bg-gray-700 text-black dark:text-white border-none py-3 px-4 my-2 w-full rounded"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="bg-white dark:bg-gray-700 text-black dark:text-white border-none py-3 px-4 my-2 w-full rounded"
              />
              <a className="text-white/80 text-sm my-4 hover:underline">
                Forgot your password?
              </a>
              <button
                className="rounded-full border-2 border-white bg-blue-900 dark:bg-blue-800 text-white text-xs font-bold py-3 px-11 uppercase tracking-wide transition duration-200 ease-in hover:bg-blue-700 active:scale-95"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Overlay Container */}
          <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-100 overlay-container">
            <div className="bg-gradient-to-r from-purple-900 via-cyan-300 to-purple-900 bg-no-repeat bg-cover text-white relative -left-full h-full w-[200%] transform translate-x-0 transition-transform duration-600 ease-in-out overlay">
              {/* Overlay Left Panel */}
              <div className="absolute top-0 flex flex-col justify-center items-center p-10 h-full w-1/2 text-center transform -translate-y-1/5 transition-transform duration-600 ease-in-out overlay-left">
                <h1 className="font-bold text-2xl mb-2">Welcome Back!</h1>
                <p className="text-sm font-light leading-5 tracking-wider my-5">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost rounded-full border-2 border-white bg-blue-600 text-white text-xs font-bold py-3 px-11 uppercase tracking-wide transition hover:bg-blue-700"
                  onClick={() => setRightPanelActive(false)}
                >
                  Sign In
                </button>
              </div>

              {/* Overlay Right Panel */}
              <div className="absolute top-0 right-0 flex flex-col justify-center items-center p-10 h-full w-1/2 text-center transform translate-y-0 transition-transform duration-600 ease-in-out overlay-right">
                <h1 className="font-bold text-2xl mb-2">Hello, Friend!</h1>
                <p className="text-sm font-light leading-5 tracking-wider my-5">
                  Enter your personal details and start your journey with us
                </p>
                <button
                  className="ghost rounded-full border-2 border-white bg-blue-600 text-white text-xs font-bold py-3 px-11 uppercase tracking-wide transition hover:bg-blue-700"
                  onClick={() => setRightPanelActive(true)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;