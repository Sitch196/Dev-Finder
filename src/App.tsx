import styled from "styled-components";
import ImgContainer from "./Components/ImgContainer";
import InfoContent from "./Components/InfoContent";
import FollowerInfo from "./Components/FollowerInfo";
import ContactInfo from "./Components/ContactInfo";
import "./App.css";

// https://api.github.com/users/${userName}

function App() {
  return (
    <AppContainer>
      <InputContainer>
        <MainInput />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Button>Search</Button>
        </form>
      </InputContainer>
      <BigWrapper>
        <UpperContent>
          <ImgContainer />
          <InfoContent />
        </UpperContent>
        <LowerContent>
          <FollowerInfo />
          <ContactInfo />
        </LowerContent>
      </BigWrapper>
    </AppContainer>
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
  border: 1px solid black;
  text-align: center;
`;
const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid red;
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
