export interface CoffeeCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  tags: string[];
  onAddToCart: () => void;
}
