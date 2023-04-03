import React from 'react'
import {Container, Item} from "./NavbarStyled"
import {NavLink} from "react-router-dom"


const Navbar = () => {
    return (
        <Container>
            <Item>
                <NavLink className={({isActive}) =>
                    isActive ? "active" : undefined
                } to="/">
                    Home
                </NavLink>
            </Item>
            <Item>
                <NavLink className={({isActive}) =>
                    isActive ? "active" : undefined
                } to="/profile">
                    Profile
                </NavLink>
            </Item>
            <Item>
                <NavLink className={({isActive}) =>
                    isActive ? "active" : undefined
                } to="/dialogs">
                    Messages
                </NavLink>
            </Item>
            <Item>
                <NavLink className={({isActive}) =>
                    isActive ? "active" : undefined
                } to="/users">
                    Users
                </NavLink>
            </Item>
        </Container>
    );
};

export default Navbar;
