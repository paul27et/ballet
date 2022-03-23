import { Component, createSignal, splitProps } from 'solid-js';
import styles from './HoverOverHoc.module.css';

export const HoverOverHoc: Component<{ setIsAnyActive: Function, getIsAnyActive: Function, notMainColor?: boolean }> = (props) => {
  const [local] = splitProps(props, ['setIsAnyActive', 'getIsAnyActive', 'notMainColor'])
  const [getIsActive, setIsActive] = createSignal(false)

  const onMouseOver = () => {
    setIsActive(true)
    local.setIsAnyActive(true)
  }

  const onMouseLeave = () => {
    setIsActive(false)
    local.setIsAnyActive(false)
  }

  const calculateStyle = () => {
    return ((local.getIsAnyActive() && getIsActive()) || (!local.getIsAnyActive() && !getIsActive())) ? (local.notMainColor ? styles.activeGrey : styles.active) : (local.notMainColor ? styles.inactiveGrey : styles.inactive)
  }

  return (
    <div 
      onmouseover={onMouseOver} 
      onmouseleave={onMouseLeave} 
      class={calculateStyle()}
    >
      {props.children}
    </div>
  );
}