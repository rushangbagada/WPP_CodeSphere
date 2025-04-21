import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const LoginPage = () => {
  // Predefined user credentials (initially hardcoded)
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : { "rushang697@gmail.com": "123456789" };
  });

  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "enabled"
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
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

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate credentials
    if (users[email] && users[email] === password) {
      toast.success("Successfully logged in! Welcome back to the platform.");
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      toast.error("Invalid email or password. Please try again.");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the email is already registered
    if (users[registerEmail]) {
      toast.error("This email is already registered. Please log in.");
      return;
    }

    // Add the new user to the users object
    setUsers((prevUsers) => ({
      ...prevUsers,
      [registerEmail]: registerPassword,
    }));

    toast.success("Account created successfully! You can now log in.");
    setRightPanelActive(false); // Switch to the login panel
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      <div className="flex-1 flex my-[150px] justify-center items-center p-4">
        <div
          className={`relative w-full max-w-[768px] min-h-[480px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${
            rightPanelActive ? "right-panel-active" : ""
          }`}
        >
          {/* Sign Up Container */}
          <div
            className={`absolute top-0 h-full transition-all duration-700 ease-in-out w-1/2 ${
              rightPanelActive ? "translate-x-full opacity-100 z-10" : "opacity-0 z-1"
            }`}
          >
            <form
              onSubmit={handleRegister}
              className="h-full flex flex-col justify-center items-center px-8 space-y-3 bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
              <div className="flex gap-3 mb-2">
                <SocialIcon Icon={Facebook} />
                <SocialIcon Icon={Linkedin} />
                <SocialIcon Icon={Mail} />
              </div>
              <p className="text-white text-sm mb-2">
                or use your email for registration
              </p>
              <input
                type="email"
                placeholder="Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="w-full p-2 rounded border border-gray-200 bg-white/90 text-gray-800"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="w-full p-2 rounded border border-gray-200 bg-white/90 text-gray-800"
                required
              />
              <button className="px-8 py-2 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
                SIGN UP
              </button>
            </form>
          </div>

          {/* Sign In Form */}
          <div
            className={`absolute top-0 h-full transition-all duration-700 ease-in-out w-1/2 ${
              !rightPanelActive ? "opacity-100 z-10" : "opacity-0 z-1"
            }`}
          >
            <form
              onSubmit={handleLogin}
              className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-r from-blue-500 to-cyan-500"
            >
              <h1 className="text-2xl font-bold text-white mb-6">Sign In</h1>
              <div className="social-container flex gap-4 mb-4">
                <SocialIcon Icon={Facebook} />
                <SocialIcon Icon={Linkedin} />
                <SocialIcon Icon={Mail} />
              </div>
              <p className="text-white text-sm mb-4">or use your account</p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-4 rounded border border-gray-200 bg-white/90 text-gray-800"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-4 rounded border border-gray-200 bg-white/90 text-gray-800"
                required
              />
              <a href="#" className="text-white text-sm mb-4 hover:underline">
                Forgot your password?
              </a>
              <button className="px-8 py-2 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
                SIGN IN
              </button>
            </form>
          </div>

          {/* Overlay Container */}
          <div
            className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ${
              rightPanelActive ? "-translate-x-full" : ""
            }`}
          >
            <div
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative -left-full h-full w-[200%] transform transition-transform duration-700"
              style={{
                transform: rightPanelActive ? "translateX(50%)" : "translateX(0)",
              }}
            >
              {/* Left Panel Content */}
              <div className="absolute w-1/2 h-full flex flex-col justify-center items-center px-8 text-white">
                <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
                <p className="text-center mb-4">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  type="button"
                  className="px-8 py-2 rounded-full border-2 border-white text-white hover:bg-white/10 transition-colors"
                  onClick={() => setRightPanelActive(false)}
                >
                  SIGN IN
                </button>
              </div>
              {/* Right Panel Content */}
              <div className="absolute right-0 w-1/2 h-full flex flex-col justify-center items-center px-8 text-white">
                <h1 className="text-2xl font-bold mb-4">Hello, Friend!</h1>
                <p className="text-center mb-4">
                  Enter your personal details and start your journey with us
                </p>
                <button
                  type="button"
                  className="px-8 py-2 rounded-full border-2 border-white text-white hover:bg-white/10 transition-colors"
                  onClick={() => setRightPanelActive(true)}
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <a
    href="#"
    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
  >
    <Icon size={20} />
  </a>
);

export default LoginPage;