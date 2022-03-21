import { Component, splitProps } from 'solid-js';
import menuIcon from 'assets/menuIcon.svg';
import menuIconSmall from 'assets/burger.svg';
import logoSmall from 'assets/logo/logo_small.svg';
import logo from 'assets/logo/logo_medium.svg';
import { Button } from 'components';
import styles from './Menu.module.css';
import { Link } from 'solid-app-router';

export const Menu: Component<{ onClick: Function }> = (props) => {
  const [local] = splitProps(props, ['onClick'])
  const isMobile = window.innerWidth / window.innerHeight < 0.75;

  return (
    <div class={styles.menuContainer}>
      <Link href="/ballet">
        <img class={styles.logo} src={isMobile ? logoSmall : logo} alt="" />
      </Link>
      <div class={styles.menu}>
        <Link href="/ballet/affiche">
          <Button text="Билеты" style={styles.localButton} />
        </Link>
        <div class={styles.iconContainer}>
          <img class={styles.icon} src={isMobile ? menuIconSmall : menuIcon} onclick={() => local.onClick(true)} />
        </div>
      </div>
    </div>
  )
};
