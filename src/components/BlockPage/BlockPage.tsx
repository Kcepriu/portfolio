import { FC } from "react";
import { IStyledProps } from "../../types/styled.type";
import { Container, Block } from "./BlockPage.styled";

const BlockPage: FC<IStyledProps> = ({ children, ...props }) => {
  return (
    <Block {...props}>
      <Container>{children}</Container>
    </Block>
  );
};

export default BlockPage;
