import React from 'react';
import styles from './styles.module.css';
import type { InputProps } from './types';
import typography from '../../styles/typography';
import optionalIcon from '../../assets/icons/package-fill.svg';


const Input: React.FC<InputProps> = ({ label, optional, active, filled }) => {
  return (
    <div className={styles.inputWrapper}>
      <label
        className={styles.label}
        style={{
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.sizes.textM.fontSize,
          lineHeight: typography.sizes.textM.lineHeight,
          fontWeight: typography.sizes.textM.fontWeight,
        }}
      >
        {label}
        {optional && (
          <span
            className={styles.optional}
            style={{
              fontFamily: typography.fontFamily.primary,
              fontSize: typography.sizes.textXS.fontSize,
              lineHeight: typography.sizes.textXS.lineHeight,
              fontWeight: typography.sizes.textXS.fontWeight,
            }}
          >
            <img src={optionalIcon} alt="Optional Icon" className={styles.icon} />
            (Opcional)
          </span>
        )}
      </label>
      <input
        className={`${styles.input} ${active ? styles.active : ''} ${filled ? styles.filled : ''}`}
        aria-label={label}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
