import React from 'react';
import styles from './styles.module.css';
import type { CartProps } from './types';
import shoppingCartIcon from '../../assets/icons/shopping-cart-fill.svg';

const Cart: React.FC<CartProps> = ({ state, count }) => {
  return (
    <div className={styles.cart}>
      <img src={shoppingCartIcon} alt="Cart Icon" className={styles.icon} />
      {state === 'full' && <div className={styles.counter}>{count}</div>}
    </div>
  );
};

export default Cart;
