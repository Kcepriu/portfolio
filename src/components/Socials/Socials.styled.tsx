import { styled } from "styled-components";

import { ReactComponent as Linked } from "../../assets/linked.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Codewars } from "../../assets/codewars.svg";

export const LinkedIcon = styled(Linked)`
  fill: ${(p) => p.theme.colors.white};
  width: 20px;
  height: 20px;
  transition: fill ${(p) => p.theme.transmision};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    width: 45px;
    height: 45px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 25px;
    height: 25px;
  }

  &:hover {
    fill: ${(p) => p.theme.colors.blue};
  }
`;

export const GithubIcon = styled(Github)`
  fill: ${(p) => p.theme.colors.white};
  width: 20px;
  height: 20px;
  transition: fill ${(p) => p.theme.transmision};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    width: 45px;
    height: 45px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 25px;
    height: 25px;
  }
  &:hover {
    fill: ${(p) => p.theme.colors.blue};
  }
`;

export const CodewarsIcon = styled(Codewars)`
  fill: ${(p) => p.theme.colors.white};
  width: 20px;
  height: 20px;
  transition: fill ${(p) => p.theme.transmision};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    width: 45px;
    height: 45px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 25px;
    height: 25px;
  }
  &:hover {
    fill: ${(p) => p.theme.colors.blue};
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 25px;
  list-style-type: none;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    gap: 32px;
  }
`;

export const Element = styled.li`
  display: flex;
  align-items: center;
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  display: flex;
  align-items: center;

  color: ${(p) => p.theme.colors.white};
  border-radius: 50px;
  padding: 8px;
  width: 36px;
  height: 36px;
  transition: background-color ${(p) => p.theme.transmision};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    width: 61px;
    height: 61px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 41px;
    height: 41px;
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.darkBlue};
    transform: scale(1.2);
    cursor: pointer;
  }
`;
