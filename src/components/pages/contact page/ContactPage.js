import React from "react";
import TextBox from "../all page stuff/TextBox";
import Header from "../all page stuff/Header";
import ContactButton from "./ContactButton";
import "../../../css/Contact.css";

import diamond from "../../../assets/illu/Diamond.svg";
import kick from "../../../assets/illu/Kick.svg";
import insta from "../../../assets/illu/Insta.svg";
import mail from "../../../assets/illu/mail.svg";

const items = {
  title: "Contact",

  story_1: "Here are all the ways you can find, follow or support us!",
};

const header = {
  title: "Contact",
  desc: "Contact the boiz",
};

const ContactPage = () => {
  return (
    <div className="page">
      <Header title={header.title} description={header.desc} />
      <div className="container center_flex flex_columb">
        <div className="center_flex flex_columb story">
          <div className="center_flex space_between brown_back border pad_8 w_max">
            <div className="news_diamond">
              <img src={diamond} />
            </div>

            <div>
              <div className="text pad_8 news_title white_text">
                {items.title}
              </div>
              <div className="text news_date red_text">{items.date}</div>
            </div>
            <div className="news_diamond">
              <img src={diamond} />
            </div>
          </div>
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
            <ContactButton img={mail} text="Mail" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
