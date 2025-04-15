
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const LoginPage = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "enabled"
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();

  useEffect(() => {
    // If already logged in, redirect to home
    if (isLoggedIn) {
      navigate('/');
    }
    
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.documentElement.classList.add("dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode, isLoggedIn, navigate]);

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode ? "enabled" : "disabled");
  }, [darkMode]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple login logic - in a real app you'd validate credentials
    toast.success("Successfully logged in!");
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    navigate('/');
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple signup logic - in a real app you'd create an account
    toast.success("Account created successfully!");
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    navigate('/');
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <div className="font-montserrat flex flex-col justify-center items-center min-h-screen -mt-[60px] transition-colors duration-700 bg-[var(--bg-color)] text-[var(--text-color)]">
        <div className={`bg-[var(--container-bg)] rounded-xl shadow-lg overflow-hidden relative w-full max-w-[768px] min-h-[480px] ${rightPanelActive ? "right-panel-active" : ""}`}>
          <div className="absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ease-in-out sign-up-container" style={{
            opacity: rightPanelActive ? 1 : 0,
            zIndex: rightPanelActive ? 5 : 1,
            transform: rightPanelActive ? 'translateX(100%)' : 'translateX(0)'
          }}>
            <form onSubmit={handleSignUp} className="bg-[#13a6a8] flex flex-col p-0 px-12 h-full justify-center items-center text-center">
              <h1 className="font-bold text-2xl mb-4 text-white">Create Account</h1>
              <div className="flex justify-center mt-2 mb-4">
                <a className="border border-[#233e4a] rounded-full flex justify-center items-center m-0 mx-1 h-10 w-10 text-white">
                  <Facebook size={20} />
                </a>
                <a className="border border-[#233e4a] rounded-full flex justify-center items-center m-0 mx-1 h-10 w-10 text-white">
                  <Linkedin size={20} />
                </a>
                <a className="border border-[#233e4a] rounded-full flex justify-center items-center m-0 mx-1 h-10 w-10 text-white">
                  <Mail size={20} />
                </a>
              </div>
              <span className="text-sm text-white mb-2">or use your email for registration</span>
              <input 
                type="text" 
                placeholder="Name" 
                required 
                className="bg-[var(--input-bg)] text-[var(--input-text)] border-none py-3 px-4 my-2 w-full rounded"
              />
              <input 
                type="email" 
                placeholder="Email" 
                required 
                className="bg-[var(--input-bg)] text-[var(--input-text)] border-none py-3 px-4 my-2 w-full rounded"
              />
              <input 
                type="password" 
                placeholder="Password" 
                required 
                className="bg-[var(--input-bg)] text-[var(--input-text)] border-none py-3 px-4 my-2 w-full rounded"
              />
              <button 
                className="mt-4 rounded-full border-2 border-[#008ecf] bg-[#004d71] text-white text-sm font-bold py-3 px-10 uppercase tracking-wider transition-transform hover:bg-[#008ecf] active:scale-95"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>

          <div className="absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ease-in-out z-2" style={{
            transform: rightPanelActive ? 'translateY(100%)' : 'translateY(0)'
          }}>
            <form onSubmit={handleLogin} className="bg-[#13a6a8] flex flex-col p-0 px-12 h-full justify-center items-center text-center">
              <h1 className="font-bold text-2xl mb-4 text-white">Sign in</h1>
              <div className="flex justify-center mt-2 mb-4">
                <a className="border border-[#233e4a] rounded-full flex justify-center items-center m-0 mx-1 h-10 w-10 text-white">
                  <Facebook size={20} />
                </a>
                <a className="border border-[#233e4a] rounded-full flex justify-center items-center m-0 mx-1 h-10 w-10 text-white">
                  <Linkedin size={20} />
                </a>
                <a className="border border-[#233e4a] rounded-full flex justify-center items-center m-0 mx-1 h-10 w-10 text-white">
                  <Mail size={20} />
                </a>
              </div>
              <span className="text-sm text-white mb-2">or use your account</span>
              <input 
                type="email" 
                placeholder="Email" 
                required
                className="bg-[var(--input-bg)] text-[var(--input-text)] border-none py-3 px-4 my-2 w-full rounded"
              />
              <input 
                type="password" 
                placeholder="Password" 
                required
                className="bg-[var(--input-bg)] text-[var(--input-text)] border-none py-3 px-4 my-2 w-full rounded"
              />
              <a href="#" className="text-white text-sm my-2">Forgot your password?</a>
              <button 
                className="mt-4 rounded-full border-2 border-[#008ecf] bg-[#004d71] text-white text-sm font-bold py-3 px-10 uppercase tracking-wider transition-transform hover:bg-[#008ecf] active:scale-95"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-100" style={{
            transform: rightPanelActive ? 'translateX(-100%)' : 'translateX(0)'
          }}>
            <div className="bg-gradient-to-r from-[#3d0361] via-[#32ddff] to-[#3d0361] text-white relative h-full w-[200%]" style={{
              left: '-100%',
              transform: rightPanelActive ? 'translateX(50%)' : 'translateX(0)',
              transition: 'transform 0.7s ease-in-out'
            }}>
              <div className="absolute top-0 left-0 flex flex-col justify-center items-center p-0 px-10 h-full w-1/2 text-center" style={{
                transform: rightPanelActive ? 'translateY(0)' : 'translateY(-20%)',
                transition: 'transform 0.7s ease-in-out'
              }}>
                <h1 className="font-bold text-2xl mb-2">Welcome Back!</h1>
                <p className="text-lg font-light leading-5 tracking-wide my-5">To keep connected with us please login with your personal info</p>
                <button 
                  className="bg-[#0682bc] border-2 border-white text-white rounded-full text-sm font-bold py-3 px-10 uppercase tracking-wider transition-transform hover:bg-[#008ecf]"
                  onClick={() => setRightPanelActive(false)}
                >
                  Sign In
                </button>
              </div>
              <div className="absolute top-0 right-0 flex flex-col justify-center items-center p-0 px-10 h-full w-1/2 text-center" style={{
                transform: rightPanelActive ? 'translateY(20%)' : 'translateY(0)',
                transition: 'transform 0.7s ease-in-out'
              }}>
                <h1 className="font-bold text-2xl mb-2">Hello, Friend!</h1>
                <p className="text-lg font-light leading-5 tracking-wide my-5">Enter your personal details and start your journey with us</p>
                <button 
                  className="bg-[#0682bc] border-2 border-white text-white rounded-full text-sm font-bold py-3 px-10 uppercase tracking-wider transition-transform hover:bg-[#008ecf]"
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
