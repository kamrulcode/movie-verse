import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;
