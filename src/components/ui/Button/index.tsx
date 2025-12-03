import styles from "./Button.module.css";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: Props) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
