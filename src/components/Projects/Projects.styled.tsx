import { styled } from "styled-components";

export const Wrap = styled.div`
  border-top: 1px solid ${(p) => p.theme.colors.gray};
  margin-top: 30px;
  padding-top: 36px;
  padding-bottom: 36px;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  font-size: 58px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -2.5px;

  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const List = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 20px;
  row-gap: 40px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    justify-content: space-between;
  }
`;
