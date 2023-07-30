import { styled } from "styled-components";

export const Wrap = styled.div`
  border-top: 1px solid ${(p) => p.theme.colors.gray};
  padding-top: 36px;
  padding-bottom: 36px;
  flex-wrap: wrap;
`;

export const WrapContacts = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 30px;
  justify-content: start;
  flex-wrap: wrap;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    justify-content: center;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    justify-content: space-between;
  }
`;

export const WrapSocial = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    justify-content: end;
  }
`;

export const TitleContact = styled.h3`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.444px;

  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LinkContact = styled.a`
  margin-top: 10px;
  display: inline-flex;
  text-decoration: none;
  color: ${(p) => p.theme.colors.gray};

  font-size: 18px;
  
  font-weight: 700;
  line-height: 1.63
  letter-spacing: 2.286px;
  transition: color ${(p) => p.theme.transmision};

   &:hover {
    color: ${(p) => p.theme.colors.blue};
  }
`;
