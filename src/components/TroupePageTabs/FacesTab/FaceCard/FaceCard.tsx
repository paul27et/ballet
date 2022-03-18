import { Component, createEffect, createSignal, splitProps } from 'solid-js';
import { FaceInterface } from '../../../../interfaces/TroupeInterface';
import styles from '../FacesTab.module.css';

export const FaceCard: Component<FaceInterface & { getIsAnyActive: Function, setIsAnyActive: Function }> = (props) => {
  const [local] = splitProps(props, ['image', 'name', 'job', 'getIsAnyActive', 'setIsAnyActive'])
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
    >
      <img class={styles.faceImage} src={local.image} alt="" />
      <span class={styles.faceName}>{local.name}</span>
      <span class={styles.faceJob}>{local.job}</span>
    </div>
  );
};