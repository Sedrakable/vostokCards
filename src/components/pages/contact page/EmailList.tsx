import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Heading } from "../../reuse/Heading";
import { Link } from "../../reuse/Link";
import styles from "./EmailList.module.scss";
import cn from "classnames";
import { Button } from "../../reuse/Button";
import { Paragraph } from "../../reuse/Paragraph";

export const EmailList = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm("gmail", "default", form.current!, "bVxK7PZwLIutCAifw")
      .then(
        (result) => {
          console.log("sent");
        },
        (error) => {
          console.log("didint work", error);
        }
      );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Heading level="2" as="h2" color="gold-grad" textAlign="center">
          Join our Mailing List
        </Heading>
        <Paragraph level="1" color="white" weight="regular">
          Get notified about exclusive deals!
        </Paragraph>
        {/* <form ref={form} className={styles.form} onSubmit={sendEmail}>
        <div className={styles.top}>
          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
        </div>
        <textarea name="message" placeholder="Message" />
        <input className={styles.top} type="submit" value="Send" />
      </form> */}
        <form ref={form} className={styles.form} onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Email" />
          <Button variant="primary">SEND</Button>
        </form>
      </div>
    </div>
  );
};
