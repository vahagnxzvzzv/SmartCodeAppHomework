import React from "react";
import modules from './Navbar.module.css';
import Logo from './logo/logo';
import Links from "./links/Links";
import StyledButton from "./StyledButton/StyledButton";

function Navbar(props) {
    return (
        <div id={modules.NavBar}>
            <Logo />
            <Links />
            <StyledButton styledLinkClassName={modules.startCourseStyledButton} />
        </div>
    )
}

export default Navbar;