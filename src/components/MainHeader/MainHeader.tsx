import { Component, createEffect, createSignal, onCleanup, onMount } from 'solid-js';
import { preventScroll } from '../../App';
import styles from './MainHeader.module.css';

export const MainHeader: Component = (props) => {
  const [getContainerClass, setContainerClass] = createSignal('');
  const [getTextClass, setTextClass] = createSignal('');
  const [getCurtainClass, setCurtainClass] = createSignal('');

  onMount(() => {
  })

  return ( 
    <>

    </>
  )
};
