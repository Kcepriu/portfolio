import { FC } from "react";
import { techSkills } from "../../constants/techSkills.constants";

import { Wrap, List, Card, TitleScill } from "./TechSkills.styled";

const TechSkills: FC = () => {
  return (
    <Wrap>
      <List>
        {techSkills.map((scill) => {
          return (
            <Card key={scill.name}>
              <TitleScill>{scill.name}</TitleScill>
            </Card>
          );
        })}
      </List>
    </Wrap>
  );
};

export default TechSkills;
