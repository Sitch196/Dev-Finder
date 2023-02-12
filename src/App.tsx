import "./App.css";

import styled, { createGlobalStyle } from "styled-components";
import ImgContainer from "./Components/ImgContainer";
import InfoContent from "./Components/InfoContent";
import FollowerInfo from "./Components/FollowerInfo";
import ContactInfo from "./Components/ContactInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

// https://api.github.com/users/${userName}
const GlobalStyle = createGlobalStyle`
  body {
    font-family: monospace;
    color: #4B6A9B;
  }
`;

function App() {
  const [devName, setDevName] = useState("");
  const [data, setData] = useState(null);

  const handleInputChange = (e: any) => {
    setDevName(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${devName}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <InputContainer>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <MainInput onChange={handleInputChange} />
          <form onSubmit={handleSubmit}>
            <Button>Search</Button>
          </form>
        </InputContainer>
        {data && (
          <BigWrapper>
            <UpperContent>
              <ImgContainer data={data} />
              <InfoContent data={data} />
            </UpperContent>
            <LowerContent>
              <FollowerInfo data={data} />
              <ContactInfo data={data} />
            </LowerContent>
          </BigWrapper>
        )}
      </AppContainer>
    </>
  );
}

const MainInput = styled.input`
  width: 15rem;
  height: 2rem;
  border: none;
  padding-left: 0.5rem;
  border-radius: 5px;
  &:focus {
    outline: 1px solid gray;
  }
`;
const Button = styled.button`
  width: 5rem;
  height: 2.3rem;
  background-color: #519eec;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: dodgerblue;
  }
`;
const InputContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  width: 25rem;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const BigWrapper = styled.div`
  width: 25rem;
  height: 20rem;
  border-radius: 5px;
  /* border: 1px solid black; */
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
`;
const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  /* border: 1px solid red; */
`;
const UpperContent = styled.div`
  /* border: 1px solid black; */
  display: flex;
  height: 7rem;
`;
const LowerContent = styled.div`
  /* border: 1px solid black; */
  width: 25rem;
  margin-top: 3rem;
`;
export default App;
