import React from 'react';
import styles from './styles.module.css';
import type { CoffeeCardProps } from './types';

const CoffeeCard: React.FC<CoffeeCardProps> = ({ image, name, description, price, tags, onAddToCart }) => {
  const imagePath = `/src/assets/images/${image}`;

  return (
    <div className={styles.card}>
      <img src={imagePath} alt={name} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{price}</span>
          <button className={styles.button} onClick={onAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
