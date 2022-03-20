import { Component, For, splitProps } from 'solid-js';
// @ts-ignore
import { seasonCards } from 'database/season.json';
import styles from './SeasonTab.module.css';
import { parseText } from '../../../App';

interface SeasonCardInterface {
  title: string,
  text: string,
  titleNumbers?: string,
}

const SeasonTabCard: Component<{ title: string, text: string, titleNumbers?: string, idx: number }> = (props) => {
  const [local] = splitProps(props, ['title', 'text', 'titleNumbers', 'idx'])

  return (
    <div class={styles.seasonTabCard}>
      <div class={`${styles.titleContainer} ${local.idx > 0 && styles.offset}`}>
        <div class={styles.title}>
          {local.title}
          {local.titleNumbers && <div class={styles.titleNumbers}>{local.titleNumbers}</div>}
        </div>
      </div>
      <div class={styles.description}>
        {parseText(local.text)}
      </div>
    </div>
  )
}

export const SeasonTab: Component = () => {
  return (
    <div class={styles.seasonTab}>
      <For each={seasonCards}>
        {(card: SeasonCardInterface, idx) => <SeasonTabCard title={card.title} titleNumbers={card.titleNumbers} text={card.text} idx={idx()} />}
      </For>
    </div>
  );
};