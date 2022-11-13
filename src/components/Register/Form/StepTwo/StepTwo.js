import styles from "./StepTwo.module.scss";
import {useState} from "react";

export default function StepTwo() {
  return (
    <section className={styles.stepTwo}>
      <h3 className={styles.stepTwoTitle}>運送方式</h3>
      <div className={styles.stepTwoContainer}>
        <div className={styles.choice}>
          <input name="shippingMethod" className={styles.choiceBox} type="radio" checked/>
          <div className={styles.radioInfo}>
            <div className={styles.radioInfoChoice}>
              <div className={styles.shippingChoice}>標準配送</div>
              <div className={styles.shippingPrice}>免費</div>
            </div>
            <div className={styles.shippingPeriod}>約 3~7 個標準工作天</div>
          </div>
        </div>
        <div className={styles.choice}>
          <input name="shippingMethod" className={styles.choiceBox} type="radio"/>
          <div className={styles.radioInfo}>
            <div className={styles.radioInfoChoice}>
              <div className={`${styles.shippingChoice} ${styles.DHL}`}>DHL 貨運</div>
              <div className={styles.shippingPrice}>$500</div>
            </div>
            <div className={styles.shippingPeriod}>48小時內送達</div>
          </div>
        </div>
      </div>
    </section>
  );
}
