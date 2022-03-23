import { Link } from 'solid-app-router';
import { Component, Show, splitProps } from 'solid-js';
import styles from './Footer.module.css';

export const Footer: Component<{ offset?: boolean }> = (props) => {
  const [local] = splitProps(props, ['offset'])
  const isMobile = window.innerWidth / window.innerHeight < 0.75

  return (
    <div class={local.offset ? styles.offset : styles.footerContainer}>
      <div class={styles.socialMediaContainer}>
        <div class={styles.socialMedia}>
          <a class={styles.styledA} href="https://vk.com/yacobsonballetofficial">
            вконтакте
          </a>
          <a class={styles.styledA} href="https://www.facebook.com/yacobsonballet/?ref=br_rs&pnref=lhc">
            facebook
          </a>
          <a class={styles.styledA} href="https://www.youtube.com/channel/UCSgPRkPw3UoJNCDDW2wahrg?feature=watch">
            youtube
          </a>
          <a class={styles.styledA} href="https://www.instagram.com/yacobsonballet/">
            instagram
          </a>
        </div>
      </div>
      <div class={styles.info}>
        <span class={styles.links}>
          <Show when={!isMobile}>
            <Link href="/ballet/affiche">Афиша</Link>,
            <Link href="/ballet/about"> О театре</Link>,
            <Link href="/ballet/events"> События</Link>,
            <Link href="/ballet/contacts"> Контакты</Link>,
          </Show>
          <Link href="/ballet/documents"> Документы</Link>
        </span>
        <span class={styles.copyright}>
          Театр балета Л.Якобсона © 2022
        </span>
      </div>
    </div>
  );
};
