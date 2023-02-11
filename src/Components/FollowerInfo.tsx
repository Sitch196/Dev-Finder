import React from "react";
import styled from "styled-components";

function FollowerInfo() {
  return (
    <FollowerContainer>
      <FollowerStyle>
        <div>
          <h4>Repos</h4>
          <h3>8</h3>
        </div>
        <div>
          <h4>Followers</h4>
          <h3>8454</h3>
        </div>
        <div>
          <h4>Following</h4>
          <h3>11</h3>
        </div>
      </FollowerStyle>
    </FollowerContainer>
  );
}
const FollowerStyle = styled.div`
  display: flex;
  height: 4.5rem;
  gap: 2rem;
  width: min-content;
  justify-content: flex-end;
  line-height: 0.5rem;
  margin-right: 1.8rem;
  background-color: lightgray;
  border-radius: 10px;
  padding: 0 0.4rem;
`;
const FollowerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default FollowerInfo;
