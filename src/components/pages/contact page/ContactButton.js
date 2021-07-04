import React from "react";

const ContactButton = ({ img, text, href, onClick }) => {
  return (
    <a className="contact_item" href={href} onClick={onClick}>
      <img src={img}></img>
      <div className="text contact_text red_text">{text}</div>
    </a>
  );
};

export default ContactButton;
