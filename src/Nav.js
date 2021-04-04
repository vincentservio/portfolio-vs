import React, {useState} from "react";
import {Link} from "react-router-dom";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import {FaList, FaRegHeart} from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import {RiPencilLine} from "react-icons/ri";
import {BiCog} from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./portfolio.css";
import Portfolio from "./Portfolio/Portfolio";
import AboutTab from "./Tabs/AboutTab";

const Nav = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(true) : setMenuCollapse(false);
  };
  const changeTab = () => {
    return <AboutTab></AboutTab>;
  };

  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Projects">Projects</Link>
      </div>

      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>
                <img src="./favicon.ico"></img>
              </p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={false} onClick={changeTab} icon={<FiHome />}>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem onClick={changeTab} icon={<FaList />}>
                <Link to="/About">About</Link>
              </MenuItem>
              <MenuItem
                onClick={
                  <Link to="/" onClick={changeTab}>
                    Home
                  </Link>
                }
                icon={<FaRegHeart />}
              >
                Favourite
              </MenuItem>
              <MenuItem icon={<RiPencilLine />} onClick={changeTab}>
                Author
              </MenuItem>
              <MenuItem icon={<BiCog />} onClick={changeTab}>
                Settings
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Nav;
