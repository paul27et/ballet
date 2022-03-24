import { Footer, MainHeader, Menu, SiteMenu, TabsMenu } from 'components';
import { Component, createSignal, For, Match, onMount, Show, splitProps, Switch } from 'solid-js';
import mainBg from 'assets/history/mainBg.png'
// @ts-ignore
import { texts } from 'database/history.json'
import styles from './HistoryPage.module.css';
import { parseText } from '../../App';
import { useNavigate } from 'solid-app-router';



const Redirect: Component<{ to: string }> = (props) => {
  const navigate = useNavigate()
  const [local] = splitProps(props, ['to'])

  onMount(() => {
    navigate(local.to)
  })

  return (
    <>
    </>
  )
}


export const HistoryPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])
  const HEADERS = { season: '53-й сезон', story: 'История', troupe: 'Труппа' }
  const [getActiveTab, setActiveTab] = createSignal(HEADERS.story)
  const isMobile = window.innerWidth / window.innerHeight < 0.75;

  const style = isMobile ? {} : {'background-image': `url(${mainBg})`}

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
      <div class={styles.tabsMenuContainer}>
        <TabsMenu headers={HEADERS} active={getActiveTab()} onTabClick={setActiveTab} />
      </div>
      <Switch>
        <Match when={getActiveTab() === HEADERS.season}>
          <Redirect to="/ballet/about" />
        </Match>
        <Match when={getActiveTab() === HEADERS.story}>
          <Redirect to="/ballet/history/" />
        </Match>
        <Match when={getActiveTab() === HEADERS.troupe}>
          <Redirect to="/ballet/troupe/" />
        </Match>
      </Switch>
      <div class={styles.contentHeader} style={style} data-aos="fade-up">
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