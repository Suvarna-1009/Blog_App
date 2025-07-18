import contactImg from "../assets/contact.png";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-3xl uppercase font-bold my-8">Contact</h1>
      <p className="text-gray-900 text-center text-2xl p-2">
      Explore stories, thoughts, and creativity — all in one place at <span className="text-blue-600 font-semibold">SimpleBlog App</span>.
</p>
  <div className="flex justify-center mt-6 p-1.5 ">
      <img
      src={contactImg}
       alt="Contact"
       className="w-100 md:w-180 rounded-lg shadow-lg p-2.5 bg-center"
       />
       </div>
    </div>
  );
};
export default Contact;
