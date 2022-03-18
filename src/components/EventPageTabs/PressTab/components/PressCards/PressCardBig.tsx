import { PressCardInterface } from 'interfaces';
import { Component, splitProps } from 'solid-js';
import styles from './PressCardBig.module.css';

export const PressCardBig: Component<PressCardInterface> = (props) => {
  const [local] = splitProps(props, ['data', 'offset'])
  const { image, date, link, text } = local.data
  return (
    <div class={`${styles.pressCardBig} ${ local.offset ? styles.offsetTop : ''}`}>
      <img class={styles.image} src={image} alt='' />
      <div class={styles.imageFooter}>
        <div>{date}</div>
        <div>{link}</div>
      </div>
      <div class={styles.text}>{text}</div>
    </div>
  );
};