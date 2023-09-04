import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Heading } from "../../reuse/Heading";
import styles from "./Form.module.scss";
import cn from "classnames";
import { Button } from "../../reuse/Button";
import { Paragraph } from "../../reuse/Paragraph";

export const Form: React.FC<{ withMessage?: boolean }> = ({ withMessage }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "gmail",
        withMessage ? "contact" : "emailList",
        form.current!,
        "bVxK7PZwLIutCAifw"
      )
      .then(
        (result) => {
          console.log("sent");
        },
        (error) => {
          console.log("didint work", error);
        }
      );
  };
  const handleKeyDown = (e: any) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  const mailingList = (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Heading level="2" as="h2" color="gold-grad" textAlign="center">
          Join our Mailing List
        </Heading>
        <Paragraph level="1" color="white" weight="regular">
          Get notified about exclusive deals!
        </Paragraph>
        <form ref={form} className={styles.form} onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Email" />
          <Button variant="primary">SEND</Button>
        </form>
      </div>
    </div>
  );
  const contact = (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Heading level="2" as="h2" color="gold-grad" textAlign="center">
          Email Us
        </Heading>
        <form
          ref={form}
          className={cn(styles.form, styles.contactForm)}
          onSubmit={sendEmail}
        >
          <div className={styles.info}>
            <input type="email" name="user_email" placeholder="Email" />
            <input type="text" name="user_name" placeholder="Name" />
          </div>

          <textarea
            onKeyDown={handleKeyDown}
            name="message"
            placeholder="Message"
          />

          <Button variant="primary">SEND</Button>
        </form>
      </div>
    </div>
  );
  return withMessage ? contact : mailingList;
};
