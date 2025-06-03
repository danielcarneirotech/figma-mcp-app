import React from 'react';
import styles from './styles.module.css';
import type { SelectProps } from './types';
import creditCardIcon from '../../assets/icons/credit-card-regular.svg';

const Select: React.FC<SelectProps> = ({ options, selected, onSelect }) => {
  return (
    <div className={styles.select}>
      {options.map((option) => (
        <div
          key={option.value}
          className={
            selected === option.value ? styles.selected : styles.option
          }
          onClick={() => onSelect(option.value)}
        >
          <img src={creditCardIcon} alt="Option Icon" className={styles.icon} />
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default Select;
