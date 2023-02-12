import React from "react";
import styled from "styled-components";

function InfoContent(props: any) {
  return (
    <InfoStyle>
      <NameDate>
        <h3>{props.data.name}</h3>
        <p>Joined 31 January 2017</p>
      </NameDate>
      <h4 style={{ color: "dodgerblue" }}>@{props.data.login}</h4>
      <p>{props.data.bio ? props.data.bio : "Bio Not Available"}</p>
    </InfoStyle>
  );
}
const InfoStyle = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  line-height: 0.7rem;
  font-family: monospace;

  p {
    font-size: smaller;
    font-family: monospace;
  }
`;

const NameDate = styled.div`
  display: flex;
  gap: 1rem;
  text-align: center;
`;
export default InfoContent;
