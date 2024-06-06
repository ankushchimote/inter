import React from "react";
import styles from "./SecondPg.module.css";
import phon2 from "../../assets/phon2.png";
import fourstar from "../../assets/fourstar.png";
import hexa from "../../assets/hexa.png";
import cube from "../../assets/cube.png";

const SecondPg = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={phon2} />
        <div className={styles.content}>
          <br />
          <br />
          <h4 className={styles.h4}>Features</h4>
          <h3 className={styles.h3}>Uifry Premium</h3>
          <br />
          <div className={styles.para1}>
            <h2>
              <img src={fourstar} />
              Budgetting Interval
            </h2>
            <p style={{ color: "gray" }}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <br />
          <div className={styles.para2}>
            <h2>
              <img src={hexa} />
              Budgetting Interval
            </h2>
            <p style={{ color: "gray" }}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <br />
          <div className={styles.para3}>
            <h2>
              <img src={cube} />
              Budgetting Interval
            </h2>
            <p style={{ color: "gray" }}>
              {" "}
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPg;
