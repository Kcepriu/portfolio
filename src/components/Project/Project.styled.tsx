import { styled } from "styled-components";

export const Card = styled.div`
  padding: 8px;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: start;

  width: ${(p) => p.theme.breakpoints.mobile};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    width: 100%;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 390px;
  }
`;
export const Image = styled.img`
  border-radius: 10px;
  height: 175px;
  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    height: 324px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    height: 175px;
  }
`;
export const Button = styled.a`
  display: block;
  width: 100px;
  padding: 4px;
  background-color: ${(p) => p.theme.colors.darkBlue};
  color: ${(p) => p.theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.63;
  letter-spacing: -0.222px;

  border-radius: 8px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;

  transition: color ${(p) => p.theme.transmision},
    background-color ${(p) => p.theme.transmision};

  &:hover {
    background-color: ${(p) => p.theme.colors.blue};
    color: ${(p) => p.theme.colors.invalid};
  }
`;

export const WrapButton = styled.div`
  margin-top: 16px;
`;

export const WrapButtonSource = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 100px;
`;

export const Title = styled.h3`
  margin-top: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
`;

export const Technology = styled.p`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
`;

export const Description = styled.p`
  height: 100px;
  overflow-y: auto;
`;
