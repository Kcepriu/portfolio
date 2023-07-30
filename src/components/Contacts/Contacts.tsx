import { FC } from "react";
import Socials from "../Socials/Socials";
import {
  Wrap,
  WrapContacts,
  WrapSocial,
  LinkContact,
  TitleContact,
} from "./Contacts.styled";
import { contacts } from "../../constants/url.constants";

const Contacts: FC = () => {
  return (
    <Wrap id="contact">
      <WrapContacts>
        <div>
          <TitleContact>Call</TitleContact>
          <LinkContact href={contacts.call.href}>
            {contacts.call.description}
          </LinkContact>
        </div>
        <div>
          <TitleContact>Email</TitleContact>
          <LinkContact href={contacts.email.href}>
            {contacts.email.description}
          </LinkContact>
        </div>

        <div>
          <TitleContact>Telegram</TitleContact>
          <LinkContact
            href={contacts.telegram.href}
            target="_blank"
            rel="noreferrer noopener, nofollow"
          >
            {contacts.telegram.description}
          </LinkContact>
        </div>
      </WrapContacts>

      <WrapSocial>
        <Socials />
      </WrapSocial>
    </Wrap>
  );
};

export default Contacts;
