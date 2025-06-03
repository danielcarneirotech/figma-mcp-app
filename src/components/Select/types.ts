export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  selected: string;
  onSelect: (value: string) => void;
}
