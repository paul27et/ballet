import { PressCardInterface } from 'interfaces';
import { Link } from 'solid-app-router';
import { Component, splitProps } from 'solid-js';
import styles from './PressCardBig.module.css';

export const PressCardBig: Component<PressCardInterface> = (props) => {
  const [local] = splitProps(props, ['data', 'offset'])
  const { image, date, link, text, href } = local.data
  const isMobile = window.innerWidth / window.innerHeight < 0.75
  const dataAos = isMobile ? '' : 'fade-up'

  return (
    <Link href={href} target="_blank">
      <div class={`${styles.pressCardBig} ${ local.offset ? styles.offsetTop : ''}`} data-aos={dataAos} data-aos-duration="2000" data-aos-delay="100">
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