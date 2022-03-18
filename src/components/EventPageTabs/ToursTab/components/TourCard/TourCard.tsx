import { TourInterface } from 'interfaces';
import { Component, For, splitProps } from 'solid-js';
import styles from './TourCard.module.css';

export const TourCard: Component<{ tour: TourInterface}> = (props) => {
  const [local] = splitProps(props, ['tour'])
  return (
    <div class={styles.tour}>
      <img class={styles.img} src={local.tour.image} alt='' />
      <div class={styles.descriptionContainer}>
        <span class={styles.date}>{local.tour.date}</span>
        <span class={styles.title}>{local.tour.title}</span>
        <span class={styles.description}>{local.tour.description}</span>
      </div>
    </div>
  );
};