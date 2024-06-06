import React from "react";
import styles from "./FifthPg.module.css";
import users from "../../assets/users.png";
import users1 from "../../assets/users1.png";

const FifthPg = () => {
  return (
    <>
      <div className={styles.heading}>
        <p style={{ fontSize: "25px", justifyContent: "center" }}>
          Testimonials
        </p>
        <h1>
          What our Users say <br />
          about us?
        </h1>
      </div>
      <div className={styles.container}>
        <img src={users} />
        <div className={styles.content}>
          <div className={styles.text}>
            <h4 style={{ fontSize: "25px" }}>
              The Best Financial Accounting App Ever!
            </h4>
            <br />
            <p style={{ color: "gray" }}>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
          </div>
          <br />
          <img src={users1} />
          <br />
          <br />

          <h5>Nick Jonas</h5>
        </div>
      </div>
    </>
  );
};

export default FifthPg;
