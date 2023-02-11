import styled from "styled-components";

type prim = {
  green: string;
};

const Title = styled.h1<prim>`
  color: ${(props) => {
    return props.green;
  }};
  font-size: 4rem;
`;

export default Title;
