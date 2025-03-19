import { useState } from "react";
import SideBar from "./SideBar";

const HomePage = () => {
  const [menuOpen, setOpenMenu] = useState(false);

  return (
    <div>
      <SideBar menuOpen={menuOpen} setOpenMenu={setOpenMenu} />
    </div>
  );
};

export default HomePage;
