import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div>This is the Layout Portion</div>
      <Outlet />
    </>
  );
};

export default Layout;
