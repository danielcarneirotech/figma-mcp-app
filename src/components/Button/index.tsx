import React from 'react';
import styles from './styles.module.css';
import type { ButtonProps } from './types';
import trashIcon from '../../assets/icons/trash-regular.svg';
import shoppingCartIcon from '../../assets/icons/shopping-cart-fill.svg';

const Button: React.FC<ButtonProps> = ({ label, type, state, onClick }) => {
  let icon;
  if (type === 'primary') {
    icon = shoppingCartIcon;
  } else if (type === 'secondary') {
    icon = trashIcon;
  }

  return (
    <button
      className={`${styles.button} ${styles[type]} ${styles[state]}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt={`${type} icon`} className={styles.icon} />}
      {label}
    </button>
  );
};

export default Button;
