import { Outlet } from "react-router-dom";
import BottomNavbar from "./moodTrack/navbar";
const Layout = () => {
  return (
    <>
{/*       <div>This is the Layout Portion</div>
 */}      <Outlet />
          <BottomNavbar />

    </>
  );
};

export default Layout;
