import { RepertoirInterface } from 'interfaces';
import { Link } from 'solid-app-router';
import { Component, For, splitProps } from 'solid-js';
import styles from './RepertoirListTab.module.css';

export const RepertoirListTab: Component<{ list: RepertoirInterface[] }> = (props) => {
  const [local] = splitProps(props, ['list'])

  return (
    <div class={styles.listTab}>
      <div class={styles.listContainer}>
        <For each={local.list as RepertoirInterface[]}>
          {(item, idx) => (
            <div class={styles.listItem}>
              <div class={styles.idx}>{idx() < 10 ? 0 : ''}{idx() + 1}/</div>
              <Link href={item.id} class={styles.text}>{item.title}</Link>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};