import React from "react";
import styles from "./Footer.module.scss";
import { Form } from "../pages/contact page/Form";
import { Paragraph } from "../reuse/Paragraph";

import { Link } from "../reuse/Link";
import { Line } from "../reuse/Line";
import { tabTexts } from "../navbar/Navbar";
import { FollowUs } from "./FollowUs";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.emailList}>
            <Form />
          </div>
          <div className={styles.links}>
            {tabTexts.map((tabText, key) => {
              return (
                <Link href={`/${tabText}`} key={key}>
                  <Paragraph level="1" weight="regular" capitalise clickable>
                    {tabText}
                  </Paragraph>
                </Link>
              );
            })}
          </div>

          <div className={styles.contact}>
            <FollowUs />
          </div>
        </div>
        <Line />
        <Paragraph level="2" color="white">
          2023 Vostok Cards. All rights reserved.
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;
