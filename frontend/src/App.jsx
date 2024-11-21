import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import WordDetails from "./pages/WordDetails";
// import AdminDashboard from "./pages/AdminDashboard";
import Register from "./pages/Register";
import "./App.css";
import NotFound from "./pages/NotFound";
import Navbar from "./shared/Navbar";
// import AdminRoute from "./utils/AdminRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/words/:id" element={<WordDetails />} />
        {/* <Route
          path="/admin"
          element={
            <AdminRoute user={user}>
              <AdminDashboard />
            </AdminRoute>
          }
        /> */}

        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
