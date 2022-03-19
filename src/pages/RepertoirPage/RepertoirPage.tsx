import { Footer, ListTab, Menu, RepertoirListTab, SiteMenu, TabsMenu } from 'components';
import { Component, createSignal, Match, Show, splitProps, Switch } from 'solid-js';
import { MainHeader } from 'components';
// @ts-ignore
import { repertoir } from 'database/repertoir.json';
import styles from './RepertoirPage.module.css';
import { RepertoirInterface } from 'interfaces';

export const RepertoirPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const HEADERS = { 
    classic: 'КЛАССИЧЕСКИЙ', 
    modern: 'СОВРЕМЕННЫЙ', 
    legacy: 'НАСЛЕДИЕ ЯКОБСОНА',
  }
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])
  const [getActiveTab, setActiveTab] = createSignal(HEADERS.classic)

  const classicPlays: RepertoirInterface[] = []
  const modernPlays: RepertoirInterface[] = []
  const legacyPlays: RepertoirInterface[] = []

  repertoir.forEach((play: RepertoirInterface) => {
    if (play.section.toLowerCase() == HEADERS.classic.toLowerCase()) {
      classicPlays.push(play)
    }
    if (play.section.toLowerCase() == HEADERS.modern.toLowerCase()) {
      modernPlays.push(play)
    }
    if (play.section.toLowerCase() == HEADERS.legacy.toLowerCase()) {
      legacyPlays.push(play)
    }
  })

  const onTabClick = (name: string) => {
    setActiveTab(name)
  }


  return (
    <div class={styles.troupePage}>
      <MainHeader>Репертуар</MainHeader>
      <Show when={local.isMenuActive}>
        <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
      </Show>
      <div class={styles.container}>
        <div class={styles.menuContainer}>
          <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </div>
        <TabsMenu headers={HEADERS} active={getActiveTab()} onTabClick={(name: string) => onTabClick(name)} />
        <Switch>
          <Match when={getActiveTab() === HEADERS.classic}>
            <RepertoirListTab list={classicPlays} />
          </Match>
          <Match when={getActiveTab() === HEADERS.modern}>
            <RepertoirListTab list={modernPlays} />
          </Match>
          <Match when={getActiveTab() === HEADERS.legacy}>
            <RepertoirListTab list={legacyPlays} />
          </Match>
        </Switch>
        <Footer />
      </div>
    </div>
  );
};