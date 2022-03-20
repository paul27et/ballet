import { Component, createSignal, For, onMount, splitProps } from 'solid-js';
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
  const [getAnimation, setAnimation] = createSignal('')
  let REF

  const intersectionOptions = {
    root: null,  // use the viewport
    rootMargin: '-21% 0px -32% 0px',
    threshold: 1.0
  }
  
  const intersectionCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 1) {
        console.log("Fully visible!");
        setAnimation(styles.titleAnimation)
      } else {
        console.log("Not fully visible!");
      }
    });
  }

  const observer = new IntersectionObserver(intersectionCallback, intersectionOptions);

  onMount(() => {
    observer.observe(REF)
  })

  return (
    <div class={styles.seasonTabCard}>
      <div class={`${styles.titleContainer} ${local.idx > 0 && styles.offset}`}>
        <div class={`${styles.title} ${getAnimation().length > 0 && styles.titleAnimation}`}>
          <div data-aos="fade-up" ref={REF}>
              {local.title}
          </div>
          {local.titleNumbers && <div class={styles.titleNumbers} data-aos="fade-up">{local.titleNumbers}</div>}
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