import React from "react";
import modules from "./StyledButton.module.css";

function StyledButton(props) {
  return (
    <div>
      <div id={props.styledLinkClassName}>
        <a href="#" id={modules.styledLink}>Սկսե՛լ ուսումը</a>
      </div>
    </div>
  );
}

export default StyledButton;
