import { FC } from "react";
import { url } from "../../constants/url.constants";
import {
  LinkedIcon,
  GithubIcon,
  CodewarsIcon,
  List,
  Element,
  SocialIcons,
} from "./Socials.styled";

const Socials: FC = () => {
  return (
    <List>
      <Element>
        <SocialIcons
          href={url.linkedin}
          target="_blank"
          rel="noreferrer noopener, nofollow"
        >
          <LinkedIcon />
        </SocialIcons>
      </Element>
      <Element>
        <SocialIcons
          href={url.github}
          target="_blank"
          rel="noreferrer noopener, nofollow"
        >
          <GithubIcon />
        </SocialIcons>
      </Element>
      <Element>
        <SocialIcons
          href={url.codewars}
          target="_blank"
          rel="noreferrer noopener, nofollow"
        >
          <CodewarsIcon />
        </SocialIcons>
      </Element>
    </List>
  );
};

export default Socials;
