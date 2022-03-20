import { TourInterface } from 'interfaces';
import { Component, For, splitProps } from 'solid-js';
import { TourCard } from '../TourCard';
import styles from './ToursYear.module.css';

export const ToursYear: Component<{ tours: TourInterface[]}> = (props) => {
  const [local] = splitProps(props, ['tours'])
  return (
    <div class={styles.toursContainer}>
      <span class={styles.title} data-aos="fade-up">{Object.keys(local.tours)[0]}</span>
      <For each={Object.values(local.tours)[0]}>
        {(tour) => <TourCard tour={tour as TourInterface} />}
      </For>
    </div>
  );
};