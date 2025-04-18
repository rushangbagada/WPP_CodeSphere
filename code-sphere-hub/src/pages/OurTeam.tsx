
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';

// Sample team data
const teamMembers = [
  {
    name: "Krishna tahiliani",
    role: "Lead Developer",
    bio: "Full-stack developer with 8 years of experience in building scalable web applications and mentoring junior developers.",
    image: "https://media-hosting.imagekit.io/bcbef1165755485c/WhatsApp%20Image%202025-04-16%20at%2000.10.18_dcdddf8e.jpg?Expires=1839563866&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gNlyq1bvs~9W7uSg5lzZ8IjVi2jZJ8lpZSJvYztP69ccLC~FBsQeCnEE68IDJ~8sHPLnXOsfd9ENHnYTlultHQL5PlcsRpLkJzaqvPQpK~dxnUSTCynAs52DYbdQJSSfY6lJeVWnzS7ASwzky6ynTeaMTMYQppqKU~CdXBuVupR5jcuJFVqcGGBb65Q6vHhtnDhj9K2CxUkntuk1MG4ljUMNDt5mmyPjxQb5OeVpyBwdbA6rTJqlb2ihMOSn0CrVPD~KWMLuJdPVsGRDAGk57JPDkkFHhLuiqpbW7RC47cn22854RVsgtO3tOmyvJ~DRIJ8hQ18ng0uFhtPlNnyVQg__"
  },
  {
    name: "Rushang Bagada",
    role: "UI/UX Designer",
    bio: "Creative designer with a passion for creating intuitive user experiences and beautiful interfaces that delight users.",
    image: "https://media-hosting.imagekit.io/31e4de84471f4e05/WhatsApp%20Image%202025-04-18%20at%2011.31.42_761bf99e.jpg?Expires=1839564154&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cE7qz0aDP02A9E7q9uvm-6VEyKGJVT0kQhI6E5RA4JxVDEU1sXqJ16V5Bz-FrQN8FZfRlRDESQOHSV5BcUUAgagHIyc2DtlZW7yM-It4u02C6YonmXHbLTOxJ2blL6~kp8GDIK3R2hjkiURk4hW9qeYyCgG6jFdAS6FKwBeckYih6BAXzIjqKnOD-rNKj9woibB-I8DELYbxnw7JbfBZQQPJFEK0-t2Uw2ASfHeSAh5zbiQuouP1xx5qdmd3W3wUpVGnHnH8I1aQGXMGZaqqset4SFPJ4BniCteuvPMB7v96sdTnEt6WHzJGej2Ljiq~c7WJFa54xKKAKAKT-LdFPw__"
  },
  {
    name: "Rudraksh Fanse",
    role: "Backend Engineer",
    bio: "Systems architect specializing in high-performance computing and distributed systems with a focus on security.",
    image: "https://media-hosting.imagekit.io/46d2fc0a6b88461b/WhatsApp%20Image%202025-04-18%20at%2012.12.29_dd72beb1.jpg?Expires=1839566607&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0A01kBADWMSSY103Sj9IQahd3U~kLnxVMTnlpci4bsF0Vds5XwBSGzLy4TKqdXR89JTWop3fNI4eGiAFB796IxXFy~hRyC4Q~LfTP5wD~ACVOt61eUQ6ZAUX58~1~XNDh80fTu4XCf20eGCip-Nsu~h02AEHKM~hk4VIUQwFKHvXyoHzKPCCXTtEH5mVdupqRUgcHPlYELgSRgxeWXrCwnLs-4UVsTeQZDaxUIZnUZscMdCmHCAkWRDo8Q3lGcd6oGvjyxQUe7XVzPw4HzOArK0GxiWGQZi1oPYISHXSgkR-73Lfml52CCwDhNNvPqwoJiGxFMYb7Jdw8Yj0TajPYg__"
  },

];

const OurTeam = () => {
  // Load dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "enabled";
  });

  // Sync dark mode with document and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "disabled");
    }
  }, [darkMode]);

  // Toggle function
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`min-h-screen ${
      darkMode 
        ? 'bg-gradient-to-b from-code-dark to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-gray-100 text-black'
    } transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
              Meet Our Team
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
              We are a group of passionate developers, designers, and strategists dedicated to creating exceptional coding resources and experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                index={index}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurTeam;
