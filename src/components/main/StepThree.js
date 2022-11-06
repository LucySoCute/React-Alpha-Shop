import styles from "./StepThree.module.scss";

export default function StepThree() {
  return (
<section className={styles.stepThree}>
      <h3 className={styles.stepThreeTitle}>付款資訊</h3>
      <div className={styles.stepThreeContainer}>
        <div className={styles.group}>
          <div className={styles.groupName}>
            <div className={styles.inputLabel}>持卡人姓名</div>
            <input type="text" placeholder="John Doe" />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.groupCardNum}>
            <div className={styles.inputLabel}>卡號</div>
            <input type="text" placeholder="1111 2222 3333 4444" />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.groupExp}>
            <div className={styles.inputLabel}>有效期限</div>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className={styles.groupCvc}>
            <div className={styles.inputLabel}>CVC / CCV</div>
            <input type="text" placeholder="123" />
          </div>
        </div>
      </div>
    </section>
  );
}