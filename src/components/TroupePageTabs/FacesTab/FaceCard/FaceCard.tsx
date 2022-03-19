import { Component, createEffect, createSignal, Show, splitProps } from 'solid-js';
import { FaceInterface } from '../../../../interfaces/TroupeInterface';
import { DancerCard } from '../../../DancerCard';
import styles from '../FacesTab.module.css';

export const FaceCard: Component<FaceInterface & { getIsAnyActive: Function, setIsAnyActive: Function }> = (props) => {
  const [local] = splitProps(props, ['image', 'name', 'job', 'getIsAnyActive', 'setIsAnyActive'])
  const [getIsActive, setIsActive] = createSignal('active')
  const [getDancerCard, setDancerCard] = createSignal(false)

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
      return styles.faceCardColored
    } else if (getIsActive() === 'inactive') {
      return styles.faceCardInactive
    }
    return ''
  }

  return (
    <div 
      class={`${styles.faceCard} ${getAdditionalClass()}`} 
      onmouseover={onMouseOver}
      onmouseleave={onMouseLeave}
      onclick={() => setDancerCard(true)}
    >
      <Show when={getDancerCard()}>
        <DancerCard name={local.name} closeCard={() => setDancerCard(false)} />
      </Show>
      <img class={styles.faceImage} src={local.image} alt="" />
      <span class={styles.faceName}>{local.name.split(' ').map((text: string) => <span>{text}<br /></span>)}</span>
      <span class={styles.faceJob}>{local.job}</span>
    </div>
  );
};