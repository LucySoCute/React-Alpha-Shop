import styles from "./CartItem.module.scss";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";

export const CartItems = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

export default function CartProducts({items, setItems}) {

  function handleMinusClick(itemId) {
      let ItemData = items.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }else{
        return item;
      }
    })
    ItemData = ItemData.filter(i =>
      i.quantity > 0
    );
    setItems(ItemData)
  }

  function handlePlusClick(itemId) {
    let ItemData = items.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }else{
        return item;
      }
    })
    setItems(ItemData)
  }


  const products = items.map(product => 
    <section className={styles.productSection} key={product.id}>
            <img className={styles.productImg} src={product.img} alt=''></img>
            <div className={styles.productInfo}>
                <div className={styles.productTitle}>{product.name}</div>
                <div className={styles.productControlSection}>
                    <button onClick={() => {
                    handleMinusClick(product.id)}}><img className={styles.icon} src={minus} alt="icon-minus" /></button>
                    <span className={styles.productAmount}> {product.quantity} </span>
                    <button onClick={() => {
                    handlePlusClick(product.id)}}><img className={styles.icon} src={plus} alt="icon-plus" /></button>
                </div>
            </div>
         <div className={styles.productPrice}>$ {product.price}</div>
        </section>
    );
    return (
      <>{products}</>
    )
}