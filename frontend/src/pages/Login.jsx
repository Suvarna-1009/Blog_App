import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loginUser } = useContext(StoreContext);
  const token = localStorage.getItem("token");
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "https://blog-app-e5dh.onrender.com/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("res", res);
      if (res.data.success) {
        const { user, token } = res.data;
        loginUser(user, token);
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className=" py-12 mx-auto flex items-center justify-center ">
       <div className="w-full bg-white max-w-md p-5 mx-auto py-10 border-3 border-gray-400 shadow-md">
          <h1 className="text-lg font-bold text-center text-gray-700">
            Login into your account!
          </h1>
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-5 mt-5 w-full"
          >
            <input
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              type="email"
              placeholder="Your email"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              required
            />
            <input
              name="password"
              value={formData.password}
              onChange={onChangeHandler}
              type="password"
              placeholder="Your password"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              required
            />

            <button className="bg-blue-600 text-white px-6 py-2 w-full cursor-pointer rounded-2xl">
              Sign In
            </button>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-blue-600 cursor-pointer">
              Register Here
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
