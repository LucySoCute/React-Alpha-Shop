import StepProgress  from "./StepProgress";
import StepOne  from "./StepOne";
import StepTwo  from "./StepTwo";
import StepThree  from "./StepThree";
import StepControl from "./StepControl";
//import StepControl  from "./StepControl";
import styles from "./Main.module.scss"

export default function Main() {
  return (
    <div className={styles.main}>
    <StepProgress />
    {<StepOne />}
    {/*<StepTwo />*/}
    {/*<StepThree />*/}
    <StepControl />
    </div>
  );
}