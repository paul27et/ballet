import { TourInterface } from 'interfaces';
import { Component, For, splitProps } from 'solid-js';
import { TourCard } from '../TourCard';
import styles from './ToursYear.module.css';

export const ToursYear: Component<{ tours: TourInterface[], isFirst: boolean}> = (props) => {
  const [local] = splitProps(props, ['tours', 'isFirst'])
  return (
    <div class={`${styles.toursContainer} ${local.isFirst && styles.firstContainer}`}>
      <div class={styles.title} data-aos="fade-up">{Object.keys(local.tours)[0]}</div>
      <For each={Object.values(local.tours)[0]}>
        {(tour, idx) => <TourCard tour={tour as TourInterface} isLast={idx() + 1 === Object.values(local.tours)[0].length} />}
      </For>
    </div>
  );
};