import styled from "styled-components";

function ContactInfo(props: any) {
  return (
    <Contact>
      <LocAndTwitter>
        <p>{props.data.location ? props.data.location : "Not Available"}</p>
        <GitLink href={props.data.html_url} target="_blank">
          {props.data.html_url ? props.data.html_url : "Not Available"}
        </GitLink>
      </LocAndTwitter>
      <GitHubInfo>
        <p>
          @
          {props.data.twitter_username
            ? props.data.twitter_username
            : "Not Available"}
        </p>
        <p>{props.data.login}</p>
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
const GitLink = styled.a`
  text-decoration: none;
  color: #4b6a9b;
`;
export default ContactInfo;
