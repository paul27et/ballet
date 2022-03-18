import { Component, createEffect, createSignal, onCleanup, onMount } from 'solid-js';
import { preventScroll } from '../../App';
import styles from './MainHeader.module.css';

export const MainHeader: Component = (props) => {
  const [getContainerClass, setContainerClass] = createSignal('');
  const [getTextClass, setTextClass] = createSignal('');
  const [getCurtainClass, setCurtainClass] = createSignal('');

  // onMount(() => {
  //   document.addEventListener('wheel', preventScroll, { passive: false })
  // })

  // onCleanup(() => {
  //   document.removeEventListener('wheel', preventScroll)
  // })

  // createEffect(() => {
  //   setTimeout(() => setCurtainClass(styles.curtainClosed), 1000);
  //   setTimeout(() => setTextClass(styles.textRemoved), 2000);

  //   setTimeout(() => setCurtainClass(styles.curtainRemoved), 2000);
  //   setTimeout(() => setContainerClass(styles.collapsed), 2000);
  //   setTimeout(() => document.removeEventListener('wheel', preventScroll), 2000);
  // })

  return ( 
    <div class={`${styles.mainHeader} ${getContainerClass()}`}>
      {/* <div class={`${styles.curtain} ${getCurtainClass()}`} /> */}
      <span class={`${styles.text} ${getTextClass()}`}>
        {props.children}
      </span>
    </div>
  )
};
