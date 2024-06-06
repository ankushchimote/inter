import React from "react";
import styles from "./ForthPg.module.css";
import phon4 from "../../assets/phon4.png";
import star5 from "../../assets/star5.png";

const ForthPg = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={phon4} />
        <div className={styles.content}>
          <div className={styles.para}>
            <h2>
              <img src={star5} />
              Fully Custumizable
            </h2>
            <br />
            <p style={{ color: "gray" }}>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForthPg;
