import StepProgress  from "../Register/StepProgress/StepProgress";
import StepOne  from "../Register/Form/StepOne/StepOne";
import StepTwo  from "../Register/Form/StepTwo/StepTwo";
import StepThree  from "../Register/Form/StepThree/StepThree";
import StepControl from "../Register/StepControl/StepControl";
import Cart from "../Cart/Cart";
import styles from "./Main.module.scss"
import {useState} from "react"

export default function Main() {
  const [step, setStep]=useState('step1');

  return (
    <div className={styles.main}>
      <div className ={styles.formSection}>
        <StepProgress step={step}/>
        <div className={styles.form}>
          {step === 'step1' && <StepOne />}
          {step === 'step2' && <StepTwo />}
          {step === 'step3' && <StepThree />}
        </div>
        <StepControl step={step} setStep={setStep} />
      </div>
      <div className ={styles.cartSection}>
        <Cart />
      </div>
    </div>
  );
}