import React from 'react';
import {Container, Item} from "./NavbarStyled.js";
import { NavLink} from "react-router-dom";

const Navbar = () => {
    return (
<Container>

    <Item>
        <NavLink activeclassname={"active"} to="/" >
           Home
        </NavLink>
    </Item>
    <Item>
        <NavLink activeclassname={"active"} to="/profile">
            Profile
        </NavLink>
    </Item>
    <Item>
        <NavLink activeclassname={"active"} to="/dialogs">
            Messages
        </NavLink>
    </Item>
    <Item>
        <NavLink activeclassname={"active"} to="/users">
            Users
        </NavLink>
    </Item>
</Container>
    );
};

export default Navbar;