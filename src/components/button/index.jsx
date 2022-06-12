import styles from './style.module.scss';
import { useEffect, useState } from 'react';

const Button = ({
  children,
  type = 'button',
  onClick = () => {},
  className = '',
  isFocusEffect,
  name
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleClick = () => {
    setIsFocus((prev) => !prev);
    onClick(name);

    if (name === 'refresh' && !isFocus) {
      setTimeout(() => setIsFocus(false), 1000);
    }
  };

  return (
    <button
      type={type}
      className={`${className} ${styles.btn} ${
        isFocus && isFocusEffect ? styles.focus : ''
      }`.trim()}
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
