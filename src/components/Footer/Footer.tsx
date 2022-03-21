import { Link } from 'solid-app-router';
import type { Component } from 'solid-js';
import styles from './Footer.module.css';

export const Footer: Component = () => {
  return (
    <div class={styles.footerContainer}>
      <div class={styles.socialMediaContainer}>
        <div class={styles.socialMedia}>
          <a href="https://vk.com/yacobsonballetofficial">
            вконтакте
          </a>
          <a href="https://www.facebook.com/yacobsonballet/?ref=br_rs&pnref=lhc">
            facebook
          </a>
          <a href="https://www.youtube.com/channel/UCSgPRkPw3UoJNCDDW2wahrg?feature=watch">
            youtube
          </a>
          <a href="https://www.instagram.com/yacobsonballet/">
            instagram
          </a>
        </div>
      </div>
      <div class={styles.info}>
        <span class={styles.links}>
          <Link href="/ballet/affiche">Афиша</Link>,
          <Link href="/ballet/about"> О театре</Link>,
          <Link href="/ballet/events"> События</Link>,
          <Link href="/ballet/contacts"> Контакты</Link>,
          <Link href="/ballet/documents"> Документы</Link>
        </span>
        <span class={styles.copyright}>
          Театр балета Л.Якобсона © 2022
        </span>
      </div>
    </div>
  );
};
