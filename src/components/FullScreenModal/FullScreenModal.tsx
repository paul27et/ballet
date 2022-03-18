import { Component, onCleanup, onMount } from 'solid-js';
import { Portal } from 'solid-js/web';
import styles from './FullScreenModal.module.css';

export const FullScreenModal: Component = (props) => {

  onMount(() => {
    document.body.classList.add('modalOpen')
  })

  onCleanup(() => {
    document.body.classList.remove('modalOpen')
  })
  
  return (
    <Portal mount={document.getElementById('portal') as Node}>
      <div class={styles.modal}>
        {props.children}
      </div>
    </Portal>
  );
};