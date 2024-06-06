import React from "react";
import styles from "./SixthPg.module.css";
import seventh from "../../assets/seventh.png";

const SixthPg = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>
          <span style={{ color: "#FF5555" }}>FAQ</span>
          <br />
          Frequently Asked <br />
          Question
        </h1>
        <br />
        <div className={styles.content}>
          <div className={styles.box1}>
            <h2>The Best Financial Accounting App Ever</h2>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className={styles.box2}>
            <h2>The Best Financial Accounting App Ever</h2>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.box3}>
            <h2>The Best Financial Accounting App Ever</h2>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className={styles.box4}>
            <h2>The Best Financial Accounting App Ever</h2>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.box5}>
            <h2>The Best Financial Accounting App Ever</h2>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className={styles.box6}>
            <h2>The Best Financial Accounting App Ever</h2>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
      </div>
      <img src={seventh} className={styles.seven} />
    </>
  );
};

export default SixthPg;
