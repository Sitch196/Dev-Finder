import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    * {
      background-color: ${(props: any) =>
        props.dark ? "whitesmoke" : "#2B3442"};
      
    }

  
    
    `;

function ChangeLight() {
  const [isLight, setIsLight] = useState(true);

  const ChangeTheme = () => {
    setIsLight(!isLight);
  };
  return (
    <>
      <GlobalStyle dark={isLight} />
      <TitleContainer>
        <div>DevFinder </div>
        {/* <Theme onClick={ChangeTheme}>
          {isLight ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </Theme> */}
      </TitleContainer>
    </>
  );
}

export default ChangeLight;
const TitleContainer = styled.div`
  width: 25rem;
  height: 3rem;
  /* border: 1px solid red; */
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  color: black;
`;
const Theme = styled.div`
  width: 3rem;
  cursor: pointer;
`;
