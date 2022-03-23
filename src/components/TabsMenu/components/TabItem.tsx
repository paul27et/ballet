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
    <div 
      class={`${styles.menuItem} ${local.textStyle ? styles.textStyle : ''} ${local.active ? styles.menuItemActive : ''}`} 
      onclick={() => local.onClick(local.item)}
      id={local.active ? "tabItemActive" : ""}
    >
      {local.item}
    </div>
  );
};