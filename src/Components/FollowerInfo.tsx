import React from "react";
import styled from "styled-components";

function FollowerInfo(props: any) {
  return (
    <FollowerContainer>
      <FollowerStyle>
        <FollowerItem>
          <h4>Repos</h4>
          <H3>{props.data.public_repos}</H3>
        </FollowerItem>
        <FollowerItem>
          <h4>Followers</h4>
          <H3>{props.data.followers}</H3>
        </FollowerItem>
        <FollowerItem>
          <h4>Following</h4>
          <H3>{props.data.following}</H3>
        </FollowerItem>
      </FollowerStyle>
    </FollowerContainer>
  );
}
const H3 = styled.h3`
  color: black;
  font-weight: bold;
  font-size: 1.3rem;
`;
const FollowerItem = styled.div`
  padding: 0 1rem;
`;
const FollowerStyle = styled.div`
  display: flex;
  height: 4.5rem;

  width: min-content;
  justify-content: flex-end;
  line-height: 0.5rem;
  margin-right: 1.8rem;
  background-color: #f6f8ff;
  border-radius: 10px;
  margin: 0 0.4rem;
`;
const FollowerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default FollowerInfo;
