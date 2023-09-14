import React from "react";
import modules from './logo.module.css';
import smartcodelogo from '../../assets/smartcodeimage.svg';


function Logo(props) {
    return (
        <div>
            <a href="#"><img id={modules.navbarLogo} src={smartcodelogo} /></a>
        </div>
    )
}

export default Logo;