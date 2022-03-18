import { Component, For, splitProps } from 'solid-js';
import { ToursYear } from './components';
import { TourInterface } from '../../../interfaces/ToursInterface';
import styles from './ToursTab.module.css';
import { Footer } from '../../Footer';

export const ToursTab: Component<{ tours: any }> = (props) => {
  const [local] = splitProps(props, ['tours'])
  return (
    <>
      <For each={local.tours}>
        {(item) => <ToursYear tours={item as TourInterface[]} />}
      </For>
      <Footer />
    </>
  );
};