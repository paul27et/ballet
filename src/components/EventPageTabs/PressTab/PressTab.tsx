import { Component, onMount, splitProps } from 'solid-js';
import { Footer } from '../../Footer';
import { PressCardSmall, PressCardBig } from './components';
import styles from './PressTab.module.css';

export const PressTab: Component<{ press: any }> = (props) => {
  const [local] = splitProps(props, ['press'])
  // @ts-ignore
  let elements : NodeListOf<Element> = []
  let windowHeight = 0

  onMount(() => {
    document.getElementById('pressTab')?.scrollIntoView()
  })

  return (
    <div id="pressTab" class={styles.pressTab}>
      <div class={styles.row}>
        <PressCardSmall data={local.press[0]} />
        <PressCardSmall data={local.press[1]} offset />
      </div>
      <div class={styles.row}>
        <PressCardBig data={local.press[2]} />
      </div>
      <div class={styles.row}>
        <PressCardSmall data={local.press[3]} />
        <PressCardSmall data={local.press[4]} offset />
      </div>
      <div class={styles.row}>
        <PressCardSmall data={local.press[5]} />
        <PressCardSmall data={local.press[6]} offset />
      </div>
      <Footer />
    </div>
  );
};