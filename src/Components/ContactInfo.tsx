import {
  faComputer,
  faLink,
  faLocation,
  faLocationPin,
  faTablet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

function ContactInfo(props: any) {
  return (
    <Contact>
      <LocAndTwitter>
        <Location>
          <FontAwesomeIcon icon={faLocationPin} />
          <p>{props.data.location ? props.data.location : "Not Available"}</p>
        </Location>
        <Linkk>
          <FontAwesomeIcon icon={faLink} />
          <GitLink href={props.data.html_url} target="_blank">
            {props.data.html_url ? props.data.html_url : "Not Available"}
          </GitLink>
        </Linkk>
      </LocAndTwitter>
      <GitHubInfo>
        <TwitterLink>
          <FontAwesomeIcon icon={faTablet} />
          <p>
            @
            {props.data.twitter_username
              ? props.data.twitter_username
              : "Not Available"}
          </p>
        </TwitterLink>
        <Computer>
          <FontAwesomeIcon icon={faComputer} />
          <p>{props.data.login}</p>
        </Computer>
      </GitHubInfo>
    </Contact>
  );
}
const Location = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 0.25rem;
  }
`;
const Linkk = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
const TwitterLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
const Computer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transform: translateY(-0.8rem);
`;
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
