import styles from "./StepControl.module.scss"
import rightArrowIcon from "../../../src/assets/icons/right-arrow.svg"
import leftArrowIcon from "../../../src/assets/icons/left-arrow.svg"

export default function StepControl () {
  return (
    <section className={styles.stepControlContainer}>

<section className={styles.buttonGroup}>
  <button className={styles.next}>
    下一步
    <img src={rightArrowIcon} alt="right-arrow" />
  </button>
</section>

{/*<section className={styles.buttonGroup}>
  <button className={styles.previous}>
    上一步
    <img src={leftArrowIcon} alt="left-arrow" />
  </button>
  <button className={styles.next}>
    下一步
    <img src={rightArrowIcon} alt="right-arrow" />
  </button>
</section>

<section className={styles.buttonGroup}>
  <button className={styles.previous}>
    上一步
    <img src={leftArrowIcon} alt="left-arrow" />
  </button>
  <button className={styles.next}>
    確認下單
  </button>
  </section>*/}

    </section>
  )
}