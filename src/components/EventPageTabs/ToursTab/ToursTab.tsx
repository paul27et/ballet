import { Component, For, onMount, splitProps } from 'solid-js';
import { ToursYear } from './components';
import { TourInterface } from '../../../interfaces/ToursInterface';
import styles from './ToursTab.module.css';
import { Footer } from '../../Footer';

export const ToursTab: Component<{ tours: any }> = (props) => {
  const [local] = splitProps(props, ['tours'])

  onMount(() => {
    document.getElementById('toursTab')?.scrollIntoView()
  })

  return (
    <div id="toursTab" class={styles.toursTab}>
      <For each={local.tours}>
        {(item) => <ToursYear tours={item as TourInterface[]} />}
      </For>
      <Footer />
    </div>
  );
};