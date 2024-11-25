import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import WordDetails from "../pages/WordDetails";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AdminDashboard from "../pages/admin-dashboard/AdminDashboard";
import AddWord from "../pages/admin-dashboard/AddWord";
import ManageUsers from "../pages/admin-dashboard/ManageUsers";
import ManageWords from "../pages/admin-dashboard/ManageWords";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/words/:word" element={<WordDetails />} />

      {/* <Route path="/admin-dashboard/*" element={<AdminDashboard />} /> */}
      <Route path="/admin-dashboard" element={<AdminDashboard />}>
        <Route path="add-word" element={<AddWord />} />
        <Route path="manage-words" element={<ManageWords />} />
        <Route path="manage-users" element={<ManageUsers />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
