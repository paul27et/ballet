import { Footer, MainHeader, Menu, SeasonTab, SiteMenu, TabsMenu } from 'components';
import { useNavigate } from 'solid-app-router';
import { Component, createSignal, Match, onMount, Show, splitProps, Switch } from 'solid-js';
import styles from './AboutPage.module.css';

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

export const AboutPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const HEADERS = { season: '53-й сезон', story: 'История', troupe: 'Труппа' }

  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])
  const [getActiveTab, setActiveTab] = createSignal(HEADERS.season)

  return (
    <>
      <MainHeader>О театре</MainHeader>
      <div class={styles.aboutPage}>
        <Show when={local.isMenuActive}>
          <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </Show>
        <div class={styles.menuContainer}>
          <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </div>
        <TabsMenu headers={HEADERS} active={getActiveTab()} onTabClick={setActiveTab} />
        <Switch>
          <Match when={getActiveTab() === HEADERS.season}>
            <SeasonTab />
          </Match>
          <Match when={getActiveTab() === HEADERS.story}>
            <Redirect to="/ballet/history/" />
          </Match>
          <Match when={getActiveTab() === HEADERS.troupe}>
            <Redirect to="/ballet/troupe/" />
          </Match>
        </Switch>
        <div class={styles.menuContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
};