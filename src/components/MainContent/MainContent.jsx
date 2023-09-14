import React from "react";
import modules from "./MainContent.module.css";
import StyledButton from "../NavBar/StyledButton/StyledButton";
import StyledWatchButton from "../StyledWatchButton/StyledWatchButton";
import MainContentImage from '../assets/MainContentImage.svg';


function MainContent(props) {
  const mainTextArray = ["Սովորի՛ր ծրագրավորում", "Դարձի՛ր պահանջված մասնագետ"];

  const newMainTextArray = mainTextArray.map((textItem) => {
    return <h1 id={modules.textItem}>{textItem}</h1>;
  });

  return (
    <div>
      <div id={modules.mainText}>
        {newMainTextArray}
        <p id={modules.pId}>Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>
      </div>
      <div>
          <StyledButton styledLinkClassName={modules.MainContentStyledButton} />
          <StyledWatchButton StyledWatchBtnId={modules.StyledWatchBtnId} />
          <img id={modules.mainContentImage} src={MainContentImage}  />
      </div>
    </div>
  );
}

export default MainContent;
