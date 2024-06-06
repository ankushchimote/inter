import React from "react";
import phon3 from "../../assets/phon3.png";
import styles from "./ThirdPg.module.css";
import bell from "../../assets/bell.png";

const ThirdPg = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Advantage</h2>
          <h1>Why Choose Uifry</h1>
          <br />
          <h2>
            <img src={bell} />
            Clever Notification
          </h2>
          <br />
          <p style={{ color: "gray" }}>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <img src={phon3} style={{ height: "fixed" }} />
      </div>
    </>
  );
};

export default ThirdPg;
