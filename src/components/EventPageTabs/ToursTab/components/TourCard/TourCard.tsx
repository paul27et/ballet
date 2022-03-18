import { TourInterface } from 'interfaces';
import { Component, createSignal, For, Show, splitProps } from 'solid-js';
import { ToursModal } from '../ToursModal';
import styles from './TourCard.module.css';

export const TourCard: Component<{ tour: TourInterface}> = (props) => {
  const [local] = splitProps(props, ['tour'])
  const [getModalActive, setModalActive] = createSignal(false)

  return (
    <div class={styles.tour} onclick={() => setModalActive(true)}>
      <Show when={getModalActive()}>
        <ToursModal text={local.tour.fullDescription} image={local.tour.bigImage} closeCard={() => setModalActive(false)} />
      </Show>
      <img class={styles.img} src={local.tour.image} alt='' />
      <div class={styles.descriptionContainer}>
        <span class={styles.date}>{local.tour.date}</span>
        <span class={styles.title}>{local.tour.title}</span>
        <span class={styles.description}>{local.tour.description}</span>
      </div>
    </div>
  );
};