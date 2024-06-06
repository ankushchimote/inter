import React from "react";
import styles from "./FirstPg.module.css";
import Frame from "../../assets/Frame.png";
import { IoIosMenu } from "react-icons/io";
import phon1 from "../../assets/phon1.png";

import abc from "../../assets/abc.png";
import { CgArrowLongRight } from "react-icons/cg";
import { FaPlayCircle } from "react-icons/fa";

const FirstPg = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img src={Frame} />
            <span style={{ fontSize: "20px" }}>Uifry</span>
            <IoIosMenu className={styles.menu} />
            <div className={styles.options}>
              <h4>Home</h4>
              <h4>About Us</h4>
              <h4>Pricing</h4>
              <h4>features</h4>
            </div>
          </div>
          <button className={styles.btn}>Download</button>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 style={{ fontSize: "5vw" }}>
              Make the best <br />
              financial decision
            </h1>
            <br />
            <p style={{ color: "gray" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              vitae <br /> tempora ipsa voluptatem est repellat voluptas ex
              nostrum debitis voluptatum.
            </p>
            <br />
            <div className={styles.twobtn}>
              <button className={styles.get}>
                Get Started <CgArrowLongRight />
              </button>
              <button className={styles.watch}>
                <FaPlayCircle /> watch video{" "}
              </button>
            </div>
            <img src={abc} className={styles.abc} />
          </div>

          <img src={phon1} style={{ marginRight: "100px" }} />
        </div>
      </div>
    </>
  );
};

export default FirstPg;
