import { Component, createSignal, For, splitProps } from 'solid-js';
import { TabItem } from './components';
import styles from './TabsMenu.module.css';

interface TabsMenuInterface {
  headers: object, 
  active: string,
  onTabClick: Function,
  textStyle?: string,
}

export const TabsMenu: Component<TabsMenuInterface> = (props) => {
  const [local] = splitProps(props, ['headers', 'active', 'onTabClick', 'textStyle']);

  const onTabClick = (name: string) => {
    local.onTabClick(name)
    
  }

  return (
    <div class={styles.menuContainer}>
      <div class={styles.menu}>
        <For each={Object.entries(local.headers)}>
          {([key, item], idx) => 
            <TabItem item={item as string} active={item === local.active} onClick={(name: string) => local.onTabClick(name)} textStyle={local.textStyle} />
          }
        </For>
      </div>
    </div>
  );
};
