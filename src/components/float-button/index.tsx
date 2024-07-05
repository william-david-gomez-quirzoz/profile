import { FloatButtonProps } from "./types";
import styles from './styles.module.css'

const FloatButton = (props: FloatButtonProps) => {
  return (
    <button {...props} className={styles.container}/>
  );
};

export { FloatButton }