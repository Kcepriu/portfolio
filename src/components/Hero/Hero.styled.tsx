import { styled } from "styled-components";
import elipses from "../../assets/elipses.svg";
import { ReactComponent as BgAnimation } from "../../assets/backgroundAnimation.svg";

export const Wrap = styled.div`
  position: relative;
  padding-top: 25px;
  padding-bottom: 80px;

  background-image: url(${elipses});
  background-position: -200px 50px;
  background-repeat: no-repeat;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    padding-bottom: 33px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    padding-top: 127px;
    padding-bottom: 100px;
  }
`;

export const Title = styled.h1`
  color: ${(p) => p.theme.colors.white};

  text-align: center;

  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -1.136px;

  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    font-size: 66px;
    text-align: left;
    font-weight: 700;
    line-height: 1.13;
    letter-spacing: -2.5px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    font-size: 72px;

    font-weight: 700;
    line-height: 1;
    letter-spacing: -2.5px;
  }
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.gray};
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    margin-top: 40px;
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.56;
    width: 480px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    font-size: 18px;

    font-weight: 500;
    line-height: 1.56;
  }
`;

export const Link = styled.a`
  color: ${(p) => p.theme.colors.white};
  display: inline-flex;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.63;
  letter-spacing: 2.286px;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 24px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${(p) => p.theme.colors.blue};
  transition: color ${(p) => p.theme.transmision};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    margin-top: 40px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    margin-top: 66px;
  }
  &:hover {
    color: ${(p) => p.theme.colors.blue};
  }
`;

export const BgAnimationIcon = styled(BgAnimation)`
  display: none;
  position: absolute;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    display: block;
    width: 350px;
    right: 0;
    bottom: 0;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 465px;
    right: 0;
    bottom: 0px;
  }
`;

export const Name = styled.span`
  border-bottom: 7px solid ${(p) => p.theme.colors.blue};
`;
