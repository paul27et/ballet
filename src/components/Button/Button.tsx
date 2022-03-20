import { Component, splitProps } from 'solid-js';
import styles from './Button.module.css';

export const Button: Component<{ text: string, style?: string }> = (props) => {
  const [local] = splitProps(props, ['text', 'style']);
  const style = `${local.style ? local.style : styles.button}`
  return (
    <button class={style}>
      {local.text}
    </button>
  );
};
