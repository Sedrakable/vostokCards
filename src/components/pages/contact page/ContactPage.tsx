import React, { useState } from "react";
import TextBox from "../all page stuff/TextBox";
import Header from "../all page stuff/Header";
import ContactButton from "./ContactButton";
import TopPannel from "../all page stuff/TopPannel";
import "../../../css/Contact.css";

import kick from "../../../assets/illu/Kick.svg";
import insta from "../../../assets/illu/Insta.svg";
import mail from "../../../assets/illu/mail.svg";

const items = {
  title: "Contact",

  story_1:
    "Here are all the ways you can find, follow or support us!\ncontact@vostokcards.com",
};

const header = {
  title: "Contact",
  desc: "Contact the boiz",
};

const ContactPage = () => {
  const [mailText, setMailText] = useState("mail");

  const onClick = () => {
    navigator.clipboard.writeText("contact@vostokcards.com");
    setMailText("Copied!");
    setTimeout(function () {
      setMailText("Mail");
    }, 5000);
  };

  return (
    <div className="page">
      <Header title={header.title} description={header.desc} />
      <div className="container center_flex flex_columb">
        <div className="center_flex flex_columb story">
          <TopPannel item={items} />
          <TextBox text={items.story_1} />

          <div className="contact_grid black_back border">
            <ContactButton
              img={insta}
              text="Instagram"
              href="https://www.instagram.com/vostokcards/"
            />
            <ContactButton
              img={kick}
              text="Kickstarter"
              href="https://www.kickstarter.com/profile/vostokcards"
            />
            <ContactButton img={mail} text={mailText} onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
