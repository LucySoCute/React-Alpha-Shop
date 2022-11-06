import styles from './StepProgress.module.scss';

export default function StepProgress () {
return (
  <section className={styles.stepperPanel}>
    <h2 className={styles.progressTitle}>結帳</h2>
        <div className={styles.stepperContainer}>
          <span className={styles.step}>
            <span className={styles.circleContainer}>1</span>
            <span className={styles.labelContainer}>寄送地址</span>
          </span>
          <span className={styles.step}>
            <span className={styles.circleContainer}>2</span>
            <span className={styles.connectLine}></span>
            <span className={styles.labelContainer}>運送方式</span>
          </span>
          <span className={styles.step}>
            <span className={styles.circleContainer}>3</span>
            <span className={styles.connectLine}></span>
            <span className={styles.labelContainer}>付款資訊</span>
          </span>
        </div>
      </section>
);
}