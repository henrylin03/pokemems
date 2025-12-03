import styles from "./Button.module.css";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, className = "", children }: Props) => (
  <button
    type="button"
    onClick={onClick}
    className={className ? `${className} ${styles.button}` : styles.button}
  >
    {children}
  </button>
);

export default Button;
