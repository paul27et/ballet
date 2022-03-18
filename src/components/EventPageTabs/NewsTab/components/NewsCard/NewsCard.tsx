import { Component, createSignal, lazy, splitProps } from 'solid-js';
import { NewsCardInterface } from 'interfaces';
import styles from './NewsCard.module.css';

export const NewsCard: Component<{ news: NewsCardInterface, setImage: Function, setBlur: Function, getBlur: Function}> = (props) => {
  const [local] = splitProps(props, ['news', 'setImage', 'setBlur', 'getBlur']);
  const [getLocalBlur, setLocalBlur] = createSignal(true)

  const onMouseOver = () => {
    local.setImage(local.news.image)
    local.setBlur(true)
    setLocalBlur(false)
  }

  const onMouseLeave = () => {
    local.setBlur(false)
    setLocalBlur(true)
  }

  const isBlurred = () => {
    if (getLocalBlur() && local.getBlur()) {
      return true
    }
    return false
  }

  return (
    <div class={`${styles.cardContainer} ${isBlurred() ? styles.blurred : '' }`} onmouseover={onMouseOver} onmouseleave={onMouseLeave}>
      <div class={styles.date}>{local.news.date}</div>
      <div class={styles.title}>{local.news.title}</div>
      <div class={styles.description}>{local.news.description}</div>
      <div class={styles.more}>{'+\u00A0\u00A0\u00A0Подробнее'}</div>
    </div>
  );
};
