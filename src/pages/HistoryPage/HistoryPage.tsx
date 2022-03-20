import { Footer, MainHeader, Menu, SiteMenu } from 'components';
import { Component, For, Show, splitProps } from 'solid-js';
import mainBg from 'assets/history/mainBg.png'
// @ts-ignore
import { texts } from 'database/history.json'
import styles from './HistoryPage.module.css';
import { parseText } from '../../App';


export const HistoryPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])

  const splitString = (str: string) => {
    const arr = str.split('')
    return (
      <For each={arr}>
        {(symbol, idx) => (
          <div data-aos="fade-up" data-aos-delay={`${idx() * 200}`}>
            {symbol}
          </div>
        )}
      </For>
    )
  }

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
      <div class={styles.contentHeader} style={{'background-image': `url(${mainBg})`}} data-aos="fade-up">
        <div class={styles.mainText}>
          {parseText(texts.mainText)}
        </div>
      </div>
      <div class={styles.cardsContainer}>
        <For each={texts.years}>
          {(text: { image: string, year: string, text: string }) => (
            <div class={styles.card}>
              <div class={styles.cardYear}>
                <img class={styles.cardImage} src={text.image} alt="" data-aos="new-animation" data-aos-delay="600" data-aos-duration="1000" />
                <div class={styles.year}>{splitString(text.year)}</div>
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