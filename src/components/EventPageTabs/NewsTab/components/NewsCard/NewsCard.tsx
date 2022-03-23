import { Component, createSignal, lazy, Show, splitProps } from 'solid-js';
import { NewsCardInterface } from 'interfaces';
import styles from './NewsCard.module.css';

export const NewsCard: Component<{ news: NewsCardInterface, setImage: Function, setBlur: Function, getBlur: Function}> = (props) => {
  const [local] = splitProps(props, ['news', 'setImage', 'setBlur', 'getBlur']);
  const [getLocalBlur, setLocalBlur] = createSignal(true)
  const [getMore, setMore] = createSignal('')
  const [getOpened, setOpened] = createSignal(false)
  const isMobile = window.innerWidth / window.innerHeight < 0.75;

  const onMouseOver = () => {
    local.setImage(local.news.image)
    local.setBlur(true)
    setLocalBlur(false)
  }

  const onMouseLeave = () => {
    local.setBlur(false)
    setLocalBlur(true)
  }

  const onClick = () => {
    setOpened(!getOpened())
    setMore(local.news.more)
  }

  const isBlurred = () => {
    if (getLocalBlur() && local.getBlur()) {
      return true
    }
    return false
  }

  const dataAos = isMobile ? '' : 'fade-up'

  return (
    <div class={`${styles.cardContainer} ${isBlurred() ? styles.blurred : '' }`} onmouseover={onMouseOver} onmouseleave={onMouseLeave}>
      <Show when={isMobile}>
        <img class={`${styles.img}`} src={local.news.image} alt="" />
      </Show>
      <div class={styles.date} data-aos={dataAos}>{local.news.date}</div>
      <div class={styles.title} data-aos={dataAos}>{local.news.title}</div>
      <div class={styles.description} data-aos={dataAos}>{local.news.description}</div>
      <Show when={getOpened()}>
        <div class={styles.moreText} data-aos={dataAos}>
          {getMore()}
        </div>
      </Show>
      <div class={styles.more} onclick={onClick} data-aos={dataAos}>
        <span>{getOpened() ? '–' : '+'}</span>
        {'\u00A0\u00A0\u00A0Подробнее'}
      </div>
      <div class={styles.border} data-aos={dataAos}></div>
    </div>
  );
};
