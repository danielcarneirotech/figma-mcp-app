import React from 'react';
import styles from './styles.module.css';
import type { CounterProps } from './types';
import plusIcon from '../../assets/icons/plus-bold.svg';
import minusIcon from '../../assets/icons/minus-bold.svg';

const Counter: React.FC<CounterProps> = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={onDecrement} aria-label="Decrement">
        <img src={minusIcon} alt="Decrement Icon" className={styles.icon} />
      </button>
      <span className={styles.value}>{value}</span>
      <button className={styles.button} onClick={onIncrement} aria-label="Increment">
        <img src={plusIcon} alt="Increment Icon" className={styles.icon} />
      </button>
    </div>
  );
};

export default Counter;
