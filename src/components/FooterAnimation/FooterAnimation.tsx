import { Link } from 'solid-app-router'
import { Component, createSignal, onCleanup, onMount } from 'solid-js'
import graphic from 'assets/graphic.svg'
import styles from './FooterAnimation.module.css'

export const FooterAnimation: Component = () => {
  const [getBgPos, setBgPos] = createSignal(10)
  const [getBgPos1, setBgPos1] = createSignal(20)
  const [getBgPos2, setBgPos2] = createSignal(-7)
  const [getBgPos3, setBgPos3] = createSignal(-23)

  onMount(() => {
    document.addEventListener('mousemove', mouseMoveListener)
    document.addEventListener('touchstart', mouseMoveListener)
    document.addEventListener('scroll', mouseMoveListener)
  })

  onCleanup(() => {
    document.removeEventListener('mousemove', mouseMoveListener)
    document.addEventListener('touchstart', mouseMoveListener)
    document.removeEventListener('scroll', mouseMoveListener)
  })

  const mouseMoveListener = () => {
    setBgPos(getBgPos() + 0.03)
    setBgPos1(getBgPos1() - 0.05)
    setBgPos2(getBgPos2() + 0.06)
    setBgPos3(getBgPos3() - 0.04)
  }

  return (
    <div class={styles.animationContainer}>
      <div class={styles.animationElement} style={{ 'background-image': `url(${graphic})`, 'background-position-x': `${getBgPos()}%` }} />
      <div class={styles.animationElement} style={{ 'background-image': `url(${graphic})`, 'background-position-x': `${getBgPos1()}%` }} />
      <div class={styles.animationElement} style={{ 'background-image': `url(${graphic})`, 'background-position-x': `${getBgPos2()}%` }} />
      <div class={styles.animationElement} style={{ 'background-image': `url(${graphic})`, 'background-position-x': `${getBgPos3()}%` }} />
    </div>
  );
};
