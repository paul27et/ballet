import { Menu, SiteMenu } from 'components';
import { Component, Show, splitProps } from 'solid-js';
import styles from './404.module.css';

export const ErrorPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])

  return (
    <div class={styles.errorPage}>
      <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)} />
      <Show when={local.isMenuActive}>
        <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
      </Show>
      <div class={styles.text}>
        <div class={styles.title}>
          404
        </div>
        <div class={styles.sorry}>
          Извините, страница не найдена 
        </div>
      </div>
    </div>
  );
};