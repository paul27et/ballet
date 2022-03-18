import { Footer, ListTab, Menu, SiteMenu, TabsMenu } from 'components';
import { Component, createSignal, Match, Show, splitProps, Switch } from 'solid-js';
import { MainHeader, FacesTab } from 'components';
// @ts-ignore
import { faces, females, males, admin, teachers, people } from 'database/troupe.json';
import styles from './TroupePage.module.css';

export const TroupePage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const HEADERS = { 
    faces: 'ЛИЦА ТЕАТРА', 
    female: 'ЖЕНСКИЙ КОРДЕБАЛЕТ', 
    male: 'МУЖСКОЙ КОРДЕБАЛЕТ', 
    admin: 'АДМИНИСТРАЦИЯ', 
    teachers: 'ПЕДАГОГИ', 
    people: 'ПЕРСОНАЛ' 
  }
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])
  const [getActiveTab, setActiveTab] = createSignal(HEADERS.faces)

  const onTabClick = (name: string) => {
    setActiveTab(name)
  }


  return (
    <div class={styles.troupePage}>
      <MainHeader>Труппа</MainHeader>
      <Show when={local.isMenuActive}>
        <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
      </Show>
      <div class={styles.container}>
        <div class={styles.menuContainer}>
          <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </div>
        <TabsMenu headers={HEADERS} active={getActiveTab()} onTabClick={(name: string) => onTabClick(name)} textStyle={styles.tabItem} />
        <Switch>
          <Match when={getActiveTab() === HEADERS.faces}>
            <FacesTab faces={faces} />
          </Match>
          <Match when={getActiveTab() === HEADERS.female}>
            <ListTab list={females} />
          </Match>
          <Match when={getActiveTab() === HEADERS.male}>
          <ListTab list={males} />
          </Match>
          <Match when={getActiveTab() === HEADERS.admin}>
            <ListTab list={admin} />
          </Match>
          <Match when={getActiveTab() === HEADERS.teachers}>
            <ListTab list={teachers} />
          </Match>
          <Match when={getActiveTab() === HEADERS.people}>
            <ListTab list={people} />
          </Match>
        </Switch>
        <Footer />
      </div>
    </div>
  );
};