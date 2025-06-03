import React from 'react';
import CoffeeCard from './components/CoffeeCard';
import Cart from './components/Cart';
import Button from './components/Button';
import Counter from './components/Counter';
import Select from './components/Select';
import Input from './components/Input';

const Showcase: React.FC = () => {
  return (
    <div style={{ padding: '20px', display: 'grid', gap: '20px' }}>
      <h1>Component Showcase</h1>

      <h2>CoffeeCard</h2>
      <CoffeeCard
        image="expresso.png"
        name="Expresso Tradicional"
        description="O tradicional café feito com água quente e grãos moídos"
        price="R$ 9,90"
        tags={["Tradicional"]}
        onAddToCart={() => alert('Added to cart')}
      />

      <h2>Cart</h2>
      <Cart state="full" count={3} />

      <h2>Button</h2>
      <Button label="Add to Cart" type="primary" state="default" onClick={() => alert('Button clicked')} />
      <Button label="Remove" type="secondary" state="default" onClick={() => alert('Button clicked')} />

      <h2>Counter</h2>
      <Counter value={1} onIncrement={() => alert('Increment')} onDecrement={() => alert('Decrement')} />

      <h2>Select</h2>
      <Select
        options={[
          { value: 'credit-card', label: 'Cartão de crédito' },
          { value: 'money', label: 'Dinheiro' },
        ]}
        selected="credit-card"
        onSelect={(value) => alert(`Selected: ${value}`)}
      />

      <h2>Input</h2>
      <Input label="Nome" optional={true} active={true} filled={false} />
    </div>
  );
};

export default Showcase;
