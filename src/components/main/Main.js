import StepProgress  from "../StepProgress/StepProgress";
import StepOne  from "../StepOne/StepOne";
import StepTwo  from "../StepTwo/StepTwo";
import StepThree  from "../StepThree/StepThree";
import StepControl from "../StepControl/StepControl";
import Cart from "../Cart/Cart";
import styles from "./Main.module.scss"

export default function Main() {
  return (
    <div className={styles.main}>
      <div className ={styles.formSection}>
        <StepProgress />
        <StepOne />
       {/*<StepTwo />*/}
       {/*<StepThree />*/}
        <StepControl />
      </div>
      <div className ={styles.cartSection}>
        <Cart />
      </div>
    </div>
  );
}