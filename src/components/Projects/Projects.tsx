import { FC } from "react";
import { projects } from "../../constants/projects.constants";
import Project from "../Project/Project";

import { Wrap, Title, List } from "./Projects.styled";

const Projects: FC = () => {
  return (
    <Wrap>
      <Title>Projects</Title>
      <List>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <Project project={project} />
            </li>
          );
        })}
      </List>
    </Wrap>
  );
};

export default Projects;
