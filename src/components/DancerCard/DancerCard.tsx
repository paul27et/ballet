import { Modal } from 'solid-bootstrap';
import { Component, For, onCleanup, onMount, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';
import { DancerInterface, DancerPlayInterface } from 'interfaces';
import arrowLeft from 'assets/arrowLeft.svg';
import arrowRight from 'assets/arrowRight.svg';
import closeIcon from 'assets/close.svg';
// @ts-ignore
import { dancers } from 'database/dancers.json' 
import styles from './DancerCard.module.css';
import { preventScroll } from '../../App';

export const DancerCard: Component<{ name: string, closeCard: Function }> = (props) => {
  const [local] = splitProps(props, ['name', 'closeCard'])
  const dancer = dancers.find((dancer: DancerInterface) => dancer.name.toLowerCase() == local.name.toLowerCase())

  onMount(() => {
    window.scrollTo(0, 0)
    document.addEventListener('wheel', preventScroll, { passive: false })
  })

  onCleanup(() => {
    document.removeEventListener('wheel', preventScroll)
  })

  const parseText = (text: string) => {
    return text.split('|').map(textItem => <div>{textItem}<br /><br /></div>)
  }

  return (
    <Portal mount={document.getElementById('portal') as Node}>
      <div class={styles.dancerCard}>
        <img class={styles.dancerImage} src={dancer.image} alt="" />
        <div class={styles.arrowContainer} >
          <img class={styles.arrow} src={arrowLeft} alt=""/>
        </div>
        <div class={styles.descriptionContainer}>
          <div class={styles.closeContainer} onclick={() => local.closeCard()}>
            <img src={closeIcon} alt="" />
          </div>
          <div class={styles.name}>{dancer.name}</div>
          <div class={styles.jobContainer}>
            <div class={styles.jobTitle}>Категория</div>
            <div class={styles.job}>{dancer.job}</div>
          </div>
          <div class={styles.careerContainer}>
            <div class={styles.careerTitle}>Карьера</div>
            <div class={styles.career}>{parseText(dancer.career)}</div>
          </div>
          <div class={styles.repertoirContainer}>
            <div class={styles.repertoirTitle}>Репертуар</div>
            <div class={styles.repertoirPlaysContainer}>
              <For each={dancer.repertoir}>
                {(play: DancerPlayInterface) => (
                  <div class={styles.repertoirPlay}>
                    <img class={styles.playImage} src={play.image} alt="" />
                    <div class={styles.playTitle}>{play.title}</div>
                    <div class={styles.playDescription}>{play.description}</div>
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>
        <div class={styles.arrowContainer}>
          <img class={styles.arrow} src={arrowRight} alt=""/>
        </div>
      </div>
    </Portal>
  );
};