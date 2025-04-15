
import React from "react";

interface CourseVideoProps {
  videoId: string;
  title: string;
  darkMode: boolean;
}

const CourseVideo: React.FC<CourseVideoProps> = ({ 
  videoId, 
  title, 
  darkMode 
}) => {
  return (
    <div className="mb-12">
      <div className={`rounded-xl overflow-hidden shadow-lg ${
        darkMode ? 'border border-brand-purple/20' : 'border border-gray-200'
      }`}>
        <iframe 
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CourseVideo;
