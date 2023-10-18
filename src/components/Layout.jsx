import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: "flex" }}>
        <div className="col-2 sideBar">
          <SideBar />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
