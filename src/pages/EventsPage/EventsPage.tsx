import { Component, createSignal, Match, Show, splitProps, Switch } from 'solid-js';
import {
  MainHeader, Menu, NewsTab, PressTab, SiteMenu, TabsMenu, ToursTab,
} from 'components';
// @ts-ignore
import { news } from 'database/news.json';
// @ts-ignore
import { tours } from 'database/tours.json';
// @ts-ignore
import { press } from 'database/press.json';
import styles from './EventsPage.module.css';

export const EventsPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])
  const HEADERS = { news: 'Новости', tour: 'Гастроли', press: 'Пресса'}
  const [getActiveTab, setActiveTab] = createSignal(HEADERS.news)

  const onTabClick = (name: string) => {
    setActiveTab(name)
  }

  return (
    <>
      <MainHeader>События</MainHeader>
      <Show when={local.isMenuActive}>
        <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
      </Show>
      <div class={styles.contentContainer}>
        <div class={styles.menuContainer}>
          <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </div>
        <TabsMenu headers={HEADERS} active={getActiveTab()} onTabClick={onTabClick} />
        <Switch>
          <Match when={getActiveTab() === HEADERS.news}>
            <NewsTab news={news} />
          </Match>
          <Match when={getActiveTab() === HEADERS.tour}>
            <ToursTab tours={tours} />
          </Match>
          <Match when={getActiveTab() === HEADERS.press}>
            <PressTab press={press} />
          </Match>
        </Switch>
      </div>
    </>
  )
};
