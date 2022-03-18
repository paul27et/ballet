import { Component, splitProps } from 'solid-js';
import styles from './TabItem.module.css';

interface TabItemInterface {
  item : string, 
  active: boolean,
  onClick: Function,
  textStyle?: string,
}

export const TabItem: Component<TabItemInterface> = (props) => {
  const [local] = splitProps(props, ['item', 'active', 'onClick', 'textStyle'])
  return (
    <div class={`${local.textStyle ? styles.textStyle : styles.menuItem} ${local.active ? styles.menuItemActive : ''}`} onclick={() => local.onClick(local.item)}>
      {local.item}
    </div>
  );
};