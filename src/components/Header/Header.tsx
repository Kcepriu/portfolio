import { FC } from "react";
import Socials from "../Socials/Socials";
import { DiCssdeck } from "react-icons/di";
import { Wrap, Link } from "./Header.styled";

const Header: FC = () => {
  return (
    <Wrap>
      <div>
        <Link>
          <DiCssdeck size="2rem" /> <span>Portfolio</span>
        </Link>
      </div>
      <Socials />
    </Wrap>
  );
};

export default Header;
