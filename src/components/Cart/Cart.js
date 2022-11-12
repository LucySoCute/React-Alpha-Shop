import styles from './Cart.module.scss';
import Products from './CartItem';


export default function Cart() {
  return (
    <section className = {styles.cartSection}>
      <h3 className = {styles.cartTitle}>購物籃</h3>
      <div className = {styles.productList}>
        <Products />
      </div>
      <div className = {styles.shippingFee}>
        <div className = {styles.text}>運費</div>
        <div className = {styles.price}>免費</div>
      </div>
      <div className = {styles.totalFee}>
        <div className = {styles.text}>小計</div>
        <div className = {styles.price}>$200</div>
      </div>
    </section>
  )
} 

