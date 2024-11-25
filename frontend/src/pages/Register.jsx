import { useState, useContext } from "react";
import { register } from "../api/api";
import { AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await register(formData);
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success(data?.message);
      navigate("/");
    } catch (error) {
      toast.error(
        "Registration failed",
        error.response?.data?.error || error.message
      );
    }
  };

  return (
    <AuthForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
      isRegister
    />
  );
};

export default Register;
