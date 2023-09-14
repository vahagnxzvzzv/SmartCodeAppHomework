import React from "react";
import modules from './StyledWatchButton.module.css';


function StyledWatchButton(props) {
    return (
        <div>
            <div id={props.StyledWatchBtnId}>
                <a href="#" id={modules.clip}>Տեսանյութ</a>
            </div>
        </div>
    )
}

export default StyledWatchButton;