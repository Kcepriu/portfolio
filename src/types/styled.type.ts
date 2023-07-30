import { ReactNode } from "react";

import { LayoutProps, PositionProps, ColorProps } from "styled-system";

export interface IStyledProps extends PositionProps, LayoutProps, ColorProps {
  children: ReactNode;
}
