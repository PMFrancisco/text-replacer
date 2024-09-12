interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, label }) => (
  <button onClick={onClick} className="h-10 min-w-36 border-2 border-emerald-400 rounded-xl bg-emerald-200 hover:border-emerald-200">
    {label}
  </button>
);
