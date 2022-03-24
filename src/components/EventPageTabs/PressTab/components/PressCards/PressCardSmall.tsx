import { PressCardInterface } from 'interfaces';
import { Link } from 'solid-app-router';
import { Component, splitProps } from 'solid-js';
import styles from './PressCardSmall.module.css';

export const PressCardSmall: Component<PressCardInterface> = (props) => {
  const [local] = splitProps(props, ['data', 'offset'])
  const { image, date, link, text, href } = local.data
  const isMobile = window.innerWidth / window.innerHeight < 0.75
  const dataAos = isMobile ? '' : 'fade-up'

  return (
    <Link href={href} target="_blank">
      <div class={`${styles.pressCardSmall} ${ local.offset ? styles.offsetTop : ''}`} data-aos={dataAos} data-aos-duration="2000">
        <img class={styles.image} src={image} alt="" />
        <div class={styles.imageFooter}>
          <div>{date}</div>
          <div>{link}</div>
        </div>
        <div class={styles.text}>
          {text}
        </div>
      </div>
    </Link>
  );
};