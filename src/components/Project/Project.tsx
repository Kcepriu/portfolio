import { FC } from "react";
import { IProject } from "../../types/project.types";
import {
  Card,
  Button,
  WrapButtonSource,
  WrapButton,
  Image,
  Title,
  Technology,
  Description,
} from "./Project.styled";

interface IProps {
  project: IProject;
}

const Project: FC<IProps> = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} width={700} />
      <Title>{project.title}</Title>
      <Technology>{project.tags.join(" ")}</Technology>
      <Description>{project.description}</Description>
      <WrapButton>
        <Button href={project.source}>Source</Button>
        <WrapButtonSource>
          <Button href={project.code}>Code</Button>
          {project.codeBack && (
            <Button href={project.codeBack}>Code Bac</Button>
          )}
        </WrapButtonSource>
      </WrapButton>
    </Card>
  );
};

export default Project;
