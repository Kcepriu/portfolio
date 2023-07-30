import { FC } from "react";
import { useTheme } from "styled-components";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import TechSkills from "../../components/TechSkills/TechSkills";
import Contacts from "../../components/Contacts/Contacts";

import BlockPage from "../../components/BlockPage/BlockPage";

const Home: FC = () => {
  const theme = useTheme();
  return (
    <>
      <BlockPage bg={theme.colors.black} color={theme.colors.white}>
        <Header />
        <Hero />
        <TechSkills />
        <Projects />
      </BlockPage>
      
      <BlockPage bg={theme.colors.darkGray} color={theme.colors.white}>
        <Contacts />
      </BlockPage>
    </>
  );
};

export default Home;
