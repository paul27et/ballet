import { Component, For, onMount, splitProps } from 'solid-js';
import { ToursYear } from './components';
import { TourInterface } from '../../../interfaces/ToursInterface';
import styles from './ToursTab.module.css';
import { Footer } from '../../Footer';

export const ToursTab: Component<{ tours: any }> = (props) => {
  const [local] = splitProps(props, ['tours'])

  onMount(() => {
    const element = document.getElementById('toursTab');
    const y = element.getBoundingClientRect().top + window.pageYOffset - 200;
    window.scrollTo({top: y, behavior: 'smooth'});
  })

  return (
    <div id="toursTab" class={styles.toursTab}>
      <For each={local.tours}>
        {(item, idx) => <ToursYear tours={item as TourInterface[]} isFirst={idx() === 0} />}
      </For>
      <Footer />
    </div>
  );
};