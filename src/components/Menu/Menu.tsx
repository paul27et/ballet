import { Component, splitProps } from 'solid-js';
import menuIcon from 'assets/menuIcon.svg';
import searchIcon from 'assets/searchIcon.svg';
import logo from 'assets/logo.png';
import { Button } from 'components';
import styles from './Menu.module.css';

export const Menu: Component<{ onClick: Function }> = (props) => {
  const [local] = splitProps(props, ['onClick'])
  return (
    <div class={styles.menuContainer}>
      <img class={styles.logo} src={logo} alt=''></img>
      <div class={styles.menu}>
        <Button text="Билеты" />
        <div class={styles.iconContainer}>
          <img class={styles.icon} src={searchIcon} />
        </div>
        <div class={styles.iconContainer}>
          <img class={styles.icon} src={menuIcon} onclick={() => local.onClick(true)} />
        </div>
      </div>
    </div>
  )
};
