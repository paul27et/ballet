import { Component, For, onMount, splitProps } from 'solid-js';
import styles from './ListTab.module.css';

interface ListItemInterface {
  name: string,
  job?: string,
}

export const ListTab: Component<{ list: string[] | ListItemInterface[] }> = (props) => {
  const [local] = splitProps(props, ['list'])
  const isMobile = window.innerWidth / window.innerHeight < 0.75
  const dataAos = isMobile ? '' : 'fade-up'

  onMount(() => {
    document.getElementById('listTab')?.scrollIntoView()
  })

  const parseListItem = (item: string | ListItemInterface) => {
    if(typeof(item) === 'string') {
      return <div class={styles.text} data-aos={dataAos}>{item}</div>
    }
    return (
      <div class={styles.textContainer} data-aos={dataAos}>
        <div class={styles.text}>{item.name}</div>
        <div class={styles.subText}>{item.job}</div>
      </div>
    )
  }

  return (
    <div id="listTab" class={styles.listTab}>
      <div class={styles.listContainer}>
        <For each={local.list as ListItemInterface[]}>
          {(item, idx) => (
            <div class={styles.listItem}>
              <div class={styles.idx} data-aos={dataAos}>{idx() < 9 ? 0 : ''}{idx() + 1}/</div>
              {parseListItem(item)}
            </div>
          )}
        </For>
      </div>
    </div>
  );
};