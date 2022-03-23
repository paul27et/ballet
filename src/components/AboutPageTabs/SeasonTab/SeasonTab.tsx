import { Component, For, onCleanup, onMount, splitProps } from 'solid-js';
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
  const isMobile = window.innerWidth / window.innerHeight < 0.75;
  const dataAos = isMobile ? "fade" : "fade-up"
  let lastScrollTop = 0
  let moveLeft: HTMLDivElement, moveRight: HTMLDivElement

  onMount(() => {
    window.addEventListener('scroll', onScrollEvent, false)
  })

  onCleanup(() => {
    window.removeEventListener('scroll', onScrollEvent)
  })

  const onScrollEvent = (e: Event) => {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (moveLeft) {
      const moveLeftPosition = moveLeft.getBoundingClientRect();
      if (moveLeftPosition.top >= 0 && moveLeftPosition.bottom <= window.innerHeight) {
        const left = moveLeft.style.marginLeft
        if (st > lastScrollTop) {
          moveLeft.style.marginLeft = `${+left.slice(0, left.length - 2) - 1}px`
        } else {
          moveLeft.style.marginLeft = `${+left.slice(0, left.length - 2) + 1}px`
        }
      }
    }
    if (moveRight) {
      const moveRightPosition = moveRight.getBoundingClientRect();
      if (moveRightPosition.top >= 0 && moveRightPosition.bottom <= window.innerHeight) {
        const right = moveRight.style.marginLeft
        if (st > lastScrollTop) {
          moveRight.style.marginLeft = `${+right.slice(0, right.length - 2) + 1}px`
        } else {
          moveRight.style.marginLeft = `${+right.slice(0, right.length - 2) - 1}px`
        }
      }
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }

  const parseTitle = (str: string) => {
    if (local.titleNumbers) {
      return (
        <>
          <div ref={moveLeft} data-aos={dataAos}>{local.title}</div>
          <div ref={moveRight} class={styles.titleNumbers} data-aos={dataAos}>{local.titleNumbers}</div>
        </>
      )
    }
    const [firstString, secondString] = str.split(' ')
    if (secondString) {
      return (
        <>
          <div ref={moveLeft} data-aos={dataAos}>{firstString}</div>
          <div ref={moveRight} data-aos={dataAos}>{secondString}</div>
        </>
      )
    }
    return <div ref={moveRight} data-aos={dataAos}>{firstString}</div>
  }

  return (
    <div class={styles.seasonTabCard}>
      <div class={`${styles.titleContainer} ${local.idx > 0 && styles.offset}`}>
        <div class={`${styles.title}`}>
          <div>
            {parseTitle(local.title)}
          </div>
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