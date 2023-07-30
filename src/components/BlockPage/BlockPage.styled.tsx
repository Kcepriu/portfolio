import { styled } from "styled-components";
import { color } from "styled-system";
import { IStyledProps } from "../../types/styled.type";

export const Container = styled.div<IStyledProps>`
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  padding-left: ${(p) => p.theme.pagePadding.mobile};
  padding-right: ${(p) => p.theme.pagePadding.mobile};

  ${color};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.mobile}) {
    max-width: ${(p) => p.theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    max-width: ${(p) => p.theme.breakpoints.table};

    padding-left: ${(p) => p.theme.pagePadding.table};
    padding-right: ${(p) => p.theme.pagePadding.table};
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    max-width: ${(p) => p.theme.breakpoints.desktop};

    padding-left: ${(p) => p.theme.pagePadding.desktop};
    padding-right: ${(p) => p.theme.pagePadding.desktop};
  }
`;

export const Block = styled.div<IStyledProps>`
  width: 100%;
  ${color};
`;
