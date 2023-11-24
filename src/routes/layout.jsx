import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div>Hello world</div>
      <Outlet />
    </>
  );
};

export default Layout;
