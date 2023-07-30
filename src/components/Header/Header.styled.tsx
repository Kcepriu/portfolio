import { styled } from "styled-components";

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    padding-top: 43px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.white};
`;
