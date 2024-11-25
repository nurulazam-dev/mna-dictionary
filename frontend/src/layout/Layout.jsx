import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
