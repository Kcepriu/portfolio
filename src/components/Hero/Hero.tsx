import { FC } from "react";
import { Wrap, Title, Text, Link, BgAnimationIcon, Name } from "./Hero.styled";

const Hero: FC = () => {
  return (
    <Wrap>
      <Title>
        Nice to meet you! <br />
        I'm <Name>Serhii Kostiuchenko.</Name>
      </Title>
      <Text>
        A Full Stack Backend Developer specializing in scalable server-side
        applications with Node.js. Proficient in Next.js and React.js for
        seamless web development.
      </Text>
      <Link href="#contact">Contacts</Link>
      <BgAnimationIcon />
    </Wrap>
  );
};

export default Hero;
