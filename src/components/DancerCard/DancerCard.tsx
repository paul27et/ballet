import { Component, createEffect, createSignal, For, onMount, splitProps } from 'solid-js';
import { DancerInterface, DancerPlayInterface } from 'interfaces';
import arrowLeft from 'assets/arrowLeft.svg';
import arrowRight from 'assets/arrowRight.svg';
import closeIcon from 'assets/close.svg';
// @ts-ignore
import { dancers } from 'database/dancers.json' 
import styles from './DancerCard.module.css';
import { FullScreenModal } from 'components';

const PlayCard: Component<DancerPlayInterface & { getIsAnyActive: Function, setIsAnyActive: Function }> = (props) => {
  const [local] = splitProps(props, ['image', 'title', 'description', 'getIsAnyActive', 'setIsAnyActive'])
  const [getIsActive, setIsActive] = createSignal('active')
  
  const onMouseOver = () => {
    setIsActive('colored')
    local.setIsAnyActive(true)
  }

  const onMouseLeave = () => {
    setIsActive('active')
    local.setIsAnyActive(false)
  }

  createEffect(() => {
    if (!local.getIsAnyActive()) {
      setIsActive('active')
    } else if (getIsActive() !== 'colored' && local.getIsAnyActive()) {
      setIsActive('inactive')
    }
  })

  const getAdditionalClass = () => {
    if (getIsActive() === 'colored') {
      return styles.repertoirPlayColored
    } else if (getIsActive() === 'inactive') {
      return styles.repertoirPlayInactive
    }
    return ''
  }

  return (
    <div class={`${styles.repertoirPlay} ${getAdditionalClass()}`} onmouseover={onMouseOver} onmouseleave={onMouseLeave}>
      <img class={styles.playImage} src={local.image} alt="" />
      <div class={styles.playTitle}>{local.title}</div>
      <div class={styles.playDescription}>{local.description}</div>
    </div>
  )
} 

export const DancerCard: Component<{ name: string, closeCard: Function }> = (props) => {
  const [local] = splitProps(props, ['name', 'closeCard'])
  const dancer = dancers.find((dancer: DancerInterface) => dancer.name.toLowerCase() == local.name.toLowerCase())
  const [getIsAnyActive, setIsAnyActive] = createSignal(false)

  const parseText = (text: string) => {
    return text.split('|').map(textItem => <div>{textItem}<br /><br /></div>)
  }

  return (
    <FullScreenModal>
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
                <PlayCard
                  image={play.image}
                  title={play.title}
                  description={play.description}
                  getIsAnyActive={getIsAnyActive} 
                  setIsAnyActive={setIsAnyActive} 
                />
              )}
            </For>
          </div>
        </div>
      </div>
      <div class={styles.arrowContainer}>
        <img class={styles.arrow} src={arrowRight} alt=""/>
      </div>
    </FullScreenModal>
  );
};