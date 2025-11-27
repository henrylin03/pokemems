import styles from "./LoadingScreen.module.css";

interface Props {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: Props) => {
  if (!isLoading) return <></>;
  return;
};

export default LoadingScreen;
