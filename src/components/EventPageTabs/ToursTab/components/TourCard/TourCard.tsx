import { TourInterface } from 'interfaces';
import { Component, createSignal, For, Show, splitProps } from 'solid-js';
import { ToursModal } from '../ToursModal';
import styles from './TourCard.module.css';

export const TourCard: Component<{ tour: TourInterface, isLast: boolean }> = (props) => {
  const [local] = splitProps(props, ['tour', 'isLast'])
  const [getModalActive, setModalActive] = createSignal(false)
  const isMobile = window.innerWidth / window.innerHeight < 0.75
  const dataAos = isMobile ? '' : 'fade-up'
  
  return (
    <div class={`${styles.tour} ${local.isLast && styles.noBorder}`} onclick={() => setModalActive(true)} data-aos={dataAos}>
      <Show when={getModalActive()}>
        <ToursModal text={local.tour.fullDescription} image={local.tour.bigImage} closeCard={() => setModalActive(false)} />
      </Show>
      <img class={styles.img} src={local.tour.image} alt='' data-aos={dataAos} />
      <div class={styles.descriptionContainer}>
        <span class={styles.date} data-aos={dataAos}>{local.tour.date}</span>
        <span class={styles.title} data-aos={dataAos}>{local.tour.title}</span>
        <span class={styles.description} data-aos={dataAos}>{local.tour.description}</span>
      </div>
    </div>
  );
};