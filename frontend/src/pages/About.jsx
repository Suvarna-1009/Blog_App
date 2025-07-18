import about from "../assets/about.png";

const About = () => {
  return (
    <div>
      <h1 className="text-center text-3xl uppercase font-bold my-8">About</h1>
      <p className="text-gray-900 text-center text-2xl p-2">
        SimpleBlog is your space to write and share freely — no coding, no limits, just your voice.
      </p>
      <div className="flex justify-center mt-6 p-1.5">
        <img
          src={about}
          alt="About"
          className="w-100 md:w-180 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
