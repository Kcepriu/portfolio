import { styled } from "styled-components";
import elipses from "../../assets/elipses_right.svg";

export const Wrap = styled.div`
  border-top: 1px solid ${(p) => p.theme.colors.gray};
  padding-top: 36px;
  padding-bottom: 36px;

  background-image: url(${elipses});
  background-position: right -10% bottom;
  background-repeat: no-repeat;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    gap: 10px;
  }
`;

export const Card = styled.li`
  width: 320px;
  padding: 10px 10px;
  text-align: center;

  font-size: 24px;

  font-weight: 700;
  line-height: 1.17;
  letter-spacing: -1.5px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    width: 340px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 260px;
    /* padding: 30px 10px; */
  }
`;
export const TitleScill = styled.h2`
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
