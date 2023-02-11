import React from "react";
import styled from "styled-components";

function ContactInfo() {
  return (
    <Contact>
      <LocAndTwitter>
        <p>San Francisco</p>
        <a href="">gihubLink</a>
      </LocAndTwitter>
      <GitHubInfo>
        <p>@dummytwiter</p>
        <p>gitHubName</p>
      </GitHubInfo>
    </Contact>
  );
}

const Contact = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const LocAndTwitter = styled.div`
  p,
  a {
    font-family: monospace;
  }
  /* border: 1px solid black; */
`;
const GitHubInfo = styled.div`
  /* border: 1px solid black; */
  p {
    font-family: monospace;
  }
`;
export default ContactInfo;
