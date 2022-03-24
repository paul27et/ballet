import { Component, onMount, splitProps } from 'solid-js';
import { Footer } from '../../Footer';
import { PressCardSmall, PressCardBig } from './components';
import styles from './PressTab.module.css';

export const PressTab: Component<{ press: any }> = (props) => {
  const [local] = splitProps(props, ['press'])
  const isMobile = window.innerWidth / window.innerHeight < 0.75

  onMount(() => {
    if (!isMobile) {
      document.getElementById('pressTab')?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  })

  if (isMobile) {
    return (
      <div id="pressTab" class={styles.pressTab}>
        <PressCardSmall data={local.press[0]} />
        <PressCardSmall data={local.press[1]} />
        <PressCardBig data={local.press[2]} />
        <PressCardSmall data={local.press[3]} />
        <PressCardSmall data={local.press[4]} />
        <PressCardSmall data={local.press[5]} />
        <PressCardSmall data={local.press[6]} />
        <Footer />
      </div>
    )
  }

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