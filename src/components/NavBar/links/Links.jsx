import React from "react";
import modules from "./Links.module.css";

function Links(props) {
  const linksArray = [
    "Դասընթացներ",
    "Առավելություններ",
    "Թրեյներներ",
    "Մեր Մասին",
  ];

  const linksNewArr = linksArray.map((linkItem) => {
    return <a href="#" id={modules.link}>
      {linkItem}
    </a>;
  })

  return (
    <div>
      <div id={modules.LinksHeader}>
        {linksNewArr}
      </div>
    </div>
  );
}

export default Links;
