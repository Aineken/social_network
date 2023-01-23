import React from "react";
import { menuItems } from "../../../constants/constants";
import MenuItems from "./MenuItems";
import { NavbarMenus } from "./NavbarStyled";

const Navbar = () => {
  return (
    <NavbarMenus>
      {menuItems.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </NavbarMenus>
  );
};

export default Navbar;
