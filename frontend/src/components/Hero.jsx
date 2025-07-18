import { useNavigate } from "react-router-dom";

const Hero = ({ setActiveTab }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-16 px-6 rounded-3xl">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Create Blog
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
          Write. Share. Inspire. Your blog, your voice
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-orange-300 text-black px-4 py-2 rounded-2xl hover:bg-red-400"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
