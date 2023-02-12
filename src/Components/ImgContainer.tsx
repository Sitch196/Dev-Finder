import styled from "styled-components";

function ImgContainer(props: any) {
  return (
    <div>
      <ImgStyle src={props.data.avatar_url} />
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
