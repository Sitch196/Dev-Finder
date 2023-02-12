import React from "react";
import styled from "styled-components";

function FollowerInfo(props: any) {
  return (
    <FollowerContainer>
      <FollowerStyle>
        <div>
          <h4>Repos</h4>
          <h3 style={{ color: "black" }}>{props.data.public_repos}</h3>
        </div>
        <div>
          <h4>Followers</h4>
          <h3 style={{ color: "black" }}>{props.data.followers}</h3>
        </div>
        <div>
          <h4>Following</h4>
          <h3 style={{ color: "black" }}>{props.data.following}</h3>
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
  background-color: #f6f8ff;
  border-radius: 10px;
  padding: 0 0.4rem;
`;
const FollowerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default FollowerInfo;
