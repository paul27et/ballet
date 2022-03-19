import { Component, splitProps } from 'solid-js';
import { FullScreenModal } from 'components';
import closeIcon from 'assets/close.svg';
import styles from './PlayModal.module.css';
import { parseText } from '../../App';

export const PlayModal: Component<{ text: string, image: string, closeCard: Function }> = (props) => {
  const [local] = splitProps(props, ['text', 'image', 'closeCard'])

  return (
    <FullScreenModal>
      <div class={styles.toursModal}>
        <img class={styles.image} src={local.image} alt="" />
        <div class={styles.descriptionContainer}>
          <div class={styles.closeContainer} onclick={() => local.closeCard()}>
            <img src={closeIcon} alt="" />
          </div>
          <div class={styles.text}>
            {parseText(local.text)}
          </div>
        </div>
      </div>
    </FullScreenModal>
  );
};