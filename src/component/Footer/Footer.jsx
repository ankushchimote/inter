import React from "react";
import styles from "./Footer.module.css";
import Frame from "../../assets/Frame.png";
import call from "../../assets/call.png";
import email from "../../assets/email.png";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.column1}>
          <h3>
            <img src={Frame} className={styles.size1} />
            Uifry
          </h3>
          <p>
            <img src={email} className={styles.size2} />
            ankushchimote2001@gmail.com
          </p>
          <p>
            <img src={call} className={styles.size3} />
            +91-8149927348
          </p>
        </div>
        <div className={styles.column2}>
          <h3>Link</h3>
          <p>Home</p>
          <p>About US</p>
          <p>Booking</p>
          <p>Blog</p>
        </div>
        <div className={styles.column3}>
          <h3>Legal</h3>
          <p>Terms Of Use</p>
          <p>Privacy Policy</p>
          <p>cookie policy</p>
        </div>
        <div className={styles.column4}>
          <h3>Product</h3>
          <p>Tech Views</p>
          <p>Live Chats</p>
          <p>Reviews</p>
        </div>
        <div className={styles.column5}>
          <h3>Newsletter</h3>
          <p>Stay-up-to-date</p>
          <div style={{ display: "flex" }}>
            <input type="text" placeholder="Your Email" />
            <button className={styles.subscribe}>Subscribe</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr className={styles.hr} />
      <br />
      <p style={{ justifyContent: "center" }}>
        Copyright 2022 Uifry.com All Rights Reseved
      </p>
      <br />
    </>
  );
};

export default Footer;
