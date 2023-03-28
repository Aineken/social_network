import React from 'react'
import {Container, Item} from "./NavbarStyled"
import {NavLink, NavLinkProps} from "react-router-dom"


const Navbar = () => {
    return (
        <Container>
            <Item>
                <NavLink className={({isActive}) =>
                    isActive ? "active" : ""
                } to="/">
                    Home
                </NavLink>
            </Item>
            <Item>
                <NavLink className={({isActive}) =>
                    isActive ? "active" : ""
                } to="/profile">
                    Profile
                </NavLink>
            </Item>
            <Item>
                <NavLink className={({isActive}) =>
                    isActive ? "active" : ""
                } to="/dialogs">
                    Messages
                </NavLink>
            </Item>
            <Item>
                <NavLink className={({isActive}) =>
                    isActive ? "active" : ""
                } to="/users">
                    Users
                </NavLink>
            </Item>
        </Container>
    );
};

export default Navbar;
