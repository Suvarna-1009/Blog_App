import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFormData({
          ...res.data.blog,
          image: null, // Don't pre-fill file input
        });
      } catch (error) {
        toast.error("Failed to fetch blog");
      }
    };
    fetchBlog();
  }, [id]);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("description", formData.description);
    if (formData.image instanceof File) {
      data.append("image", formData.image);
    }

    try {
      await axios.put(`http://localhost:4000/blog/edit/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Blog updated successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Failed to update blog");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          name="title"
          value={formData.title}
          onChange={onChangeHandler}
          type="text"
          placeholder="Title"
          className="border border-gray-300 rounded-md p-2 outline-none w-full"
        />
        <input
          name="category"
          value={formData.category}
          onChange={onChangeHandler}
          type="text"
          placeholder="Category"
          className="border border-gray-300 rounded-md p-2 outline-none w-full"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={onChangeHandler}
          placeholder="Description"
          className="border border-gray-300 rounded-md p-2 outline-none w-full"
        />
        <div>
          <label htmlFor="image">Choose Image</label>
          <input
            onChange={fileHandler}
            type="file"
            accept="image/*"
            className="border border-gray-300 rounded-md p-2 outline-none w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-sky-800 text-white w-full rounded-full border-none cursor-pointer py-2"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
