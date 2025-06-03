export interface ButtonProps {
  label: string;
  type: 'primary' | 'secondary' | 'icon';
  state: 'default' | 'hover';
  onClick?: () => void;
}
