import styled from "styled-components";

function ImgContainer() {
  return (
    <div>
      <ImgStyle src="../../pics/lion.jpg" />
    </div>
  );
}
const ImgStyle = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  padding: 0.5rem;
`;

export default ImgContainer;
