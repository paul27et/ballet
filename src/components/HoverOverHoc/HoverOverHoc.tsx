import { Component, createSignal, splitProps } from 'solid-js';
import styles from './HoverOverHoc.module.css';

export const HoverOverHoc: Component<{ setIsAnyActive: Function, getIsAnyActive: Function }> = (props) => {
  const [local] = splitProps(props, ['setIsAnyActive', 'getIsAnyActive'])
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
    return ((local.getIsAnyActive() && getIsActive()) || (!local.getIsAnyActive() && !getIsActive())) ? styles.active : styles.inactive
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