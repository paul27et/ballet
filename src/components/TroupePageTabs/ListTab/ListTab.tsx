import { Component, For, splitProps } from 'solid-js';
import styles from './ListTab.module.css';

export const ListTab: Component<{ list: string[] }> = (props) => {
  const [local] = splitProps(props, ['list'])

  return (
    <div class={styles.listTab}>
      <div class={styles.listContainer}>
        <For each={local.list}>
          {(item, idx) => (
            <div class={styles.listItem}>
              <div class={styles.idx}>{idx() < 10 ? 0 : ''}{idx() + 1}/</div>
              <div class={styles.text}>{item}</div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};