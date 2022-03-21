import { Component, createSignal, lazy, Show, splitProps } from 'solid-js';
import { NewsCardInterface } from 'interfaces';
import styles from './NewsCard.module.css';

export const NewsCard: Component<{ news: NewsCardInterface, setImage: Function, setBlur: Function, getBlur: Function}> = (props) => {
  const [local] = splitProps(props, ['news', 'setImage', 'setBlur', 'getBlur']);
  const [getLocalBlur, setLocalBlur] = createSignal(true)
  const [getMore, setMore] = createSignal('')
  const [getOpened, setOpened] = createSignal(false)

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

  return (
    <div class={`${styles.cardContainer} ${isBlurred() ? styles.blurred : '' }`} onmouseover={onMouseOver} onmouseleave={onMouseLeave}>
      <div class={styles.date} data-aos="fade-up">{local.news.date}</div>
      <div class={styles.title} data-aos="fade-up">{local.news.title}</div>
      <div class={styles.description} data-aos="fade-up">{local.news.description}</div>
      <Show when={getOpened()}>
        <div class={styles.moreText} data-aos="fade-up">
          {getMore()}
        </div>
      </Show>
      <div class={styles.more} onclick={onClick} data-aos="fade-up">
        <span>{getOpened() ? '–' : '+'}</span>
        {'\u00A0\u00A0\u00A0Подробнее'}
      </div>
      <div class={styles.border} data-aos="fade-up"></div>
    </div>
  );
};
