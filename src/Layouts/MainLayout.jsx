import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-[#9538E2] mt-4 mx-4 rounded-md">
        <div className="container  mx-auto">
          <NavBar></NavBar>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
