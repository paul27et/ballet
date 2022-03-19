import { Component, For, splitProps } from 'solid-js';
import styles from './ListTab.module.css';

interface ListItemInterface {
  name: string,
  job?: string,
}

export const ListTab: Component<{ list: string[] | ListItemInterface[] }> = (props) => {
  const [local] = splitProps(props, ['list'])

  const parseListItem = (item: string | ListItemInterface) => {
    if(typeof(item) === 'string') {
      return <div class={styles.text}>{item}</div>
    }
    return (
      <div class={styles.textContainer}>
        <div class={styles.text}>{item.name}</div>
        <div class={styles.subText}>{item.job}</div>
      </div>
    )
  }

  return (
    <div class={styles.listTab}>
      <div class={styles.listContainer}>
        <For each={local.list as ListItemInterface[]}>
          {(item, idx) => (
            <div class={styles.listItem}>
              <div class={styles.idx}>{idx() < 10 ? 0 : ''}{idx() + 1}/</div>
              {parseListItem(item)}
            </div>
          )}
        </For>
      </div>
    </div>
  );
};