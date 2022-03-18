import type { Component } from 'solid-js';
import { Portal } from 'solid-js/web';
import styles from './Modal.module.css';

export const Modal: Component = (props) => {
  const mountTo = document.getElementById('portal')
  const offsetY = window.pageYOffset
  const modalStyle = { position: 'absolute', top: `calc(${offsetY + 'px'} + 25%)`, left: '25%' }
  
  return (
    // @ts-ignore
    <Portal mount={mountTo}>
      <div style={modalStyle}>
        {props.children}
      </div>
    </Portal>
  );
};