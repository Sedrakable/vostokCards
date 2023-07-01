import React from "react";

const ContactButton: React.FC<{
  img: string;
  text: string;
  href?: string;
  onClick?: Function;
}> = ({ img, text, href, onClick }) => {
  return (
    <a className="contact_item" href={href} onClick={() => onClick}>
      <img src={img} alt="alt"></img>
      <div className="text contact_text red_text">{text}</div>
    </a>
  );
};

export default ContactButton;
