import { Footer, MainHeader, Menu, SiteMenu } from 'components';
import { Component, For, Show, splitProps } from 'solid-js';
import mainBg from 'assets/history/mainBg.png'
// @ts-ignore
import { texts } from 'database/history.json'
import styles from './HistoryPage.module.css';
import { parseText } from '../../App';


export const HistoryPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])

  return (
    <>
      <MainHeader>История</MainHeader>
      <div class={styles.aboutPage}>
        <Show when={local.isMenuActive}>
          <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </Show>
        <div class={styles.menuContainer}>
          <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </div>
      </div>
      <div class={styles.contentHeader} style={{'background-image': `url(${mainBg})`}}>
        <div class={styles.mainText}>
          {parseText(texts.mainText)}
        </div>
      </div>
      <div class={styles.cardsContainer}>
        <For each={texts.years}>
          {(text: { image: string, year: string, text: string }) => (
            <div class={styles.card}>
              <div class={styles.cardYear}>
                <img class={styles.cardImage} src={text.image} alt="" />
                <>{text.year}</>
              </div>
              <div class={styles.cardTextContainer}>
                <div class={styles.cardText}>{parseText(text.text)}</div>
              </div>
            </div>
          )}
        </For>
      </div>
      <div class={styles.aboutPage}>
        <div class={styles.menuContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
};