import { Component, splitProps } from 'solid-js';
import styles from './Button.module.css';

export const Button: Component<{text: string, borderless?: boolean, noPadding?: boolean, bigText?: boolean, noBackground: boolean}> = (props) => {
  const [local] = splitProps(props, ['text', 'borderless', 'noPadding', 'bigText', 'noBackground']);
  const style = `${local.bigText ? styles.button24 : styles.button} ${local.borderless && styles.borderless} ${local.noPadding && styles.noPadding} ${local.noBackground && styles.noBackground}`
  return (
    <button 
      class={style}
    >
      {local.text}
    </button>
  );
};
