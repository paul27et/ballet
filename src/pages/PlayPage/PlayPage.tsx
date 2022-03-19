import { Component, For, Show, splitProps } from 'solid-js';
import { useParams } from 'solid-app-router';
import { Button, Footer, Menu, SiteMenu } from 'components';
import { ClosePlayInterface, PeoplePlayInterface, RepertoirInterface } from 'interfaces';
// @ts-ignore
import { repertoir } from 'database/repertoir.json';
import styles from './PlayPage.module.css';

export const PlayPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])
  const playId = useParams().id;
  const play = repertoir.find((play: RepertoirInterface) => play.id === playId)

  return (
    <div class={styles.playPage}>
      <Show when={local.isMenuActive}>
        <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
      </Show>
      <div class={styles.container}>
        <div class={styles.menuContainer}>
          <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </div>
        <div class={styles.title}>
          {play.title}
        </div>
        <div class={styles.imageContainer}>
          <div class={styles.playType}>{play.type}</div>
          <img class={styles.image} src={play.bigImage} alt="" />
        </div>
        <div class={styles.closePlays}>
          <div class={styles.smallTitle}>Ближайшие спектакли</div>
          <div class={styles.playsList}>
            <For each={play.closePlays}>
              {(item: ClosePlayInterface) => (
                <div class={styles.playItem}>
                  <div class={styles.date}>{item.date}</div>
                  <div class={styles.place}>{item.place}</div>
                  <Button text="Купить билет" borderless bigText />
                </div>
              )}
            </For>
          </div>
        </div>
        <div class={styles.descriptionContainer}>
          <div class={styles.description}>
            <div class={styles.smallTitle}>Описание</div>
            <div class={styles.descriptionText}>
              {play.description}
            </div>
            <div class={styles.info}>
              <div class={styles.infoItem}>
                <div class={styles.infoText}>{play.long}</div>
                <div class={styles.infoTitle}>Продолжительность</div>
              </div>
              <div class={styles.infoItem}>
                <div class={styles.infoText}>{play.antracts}</div>
              </div>
              <div class={styles.infoItem}>
                <div class={styles.infoText}>{play.premier}</div>
                <div class={styles.infoTitle}>Премьера возобновления</div>
              </div>
            </div>
          </div>
          <div class={styles.peopleContainer}>
            <div class={styles.smallTitle}>Участники</div>
            <div class={styles.peopleList}>
              <For each={play.people}>
                {(item: PeoplePlayInterface) => (
                  <div class={styles.peopleItem}>
                    <div class={styles.infoText}>{item.name}</div>
                    <div class={styles.infoTitle}>{item.job}</div>
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>
        <div class={styles.gallery}>
          <div class={styles.smallTitle}>Галерея</div>
          <div class={styles.imagesContainer}>
            <For each={play.gallery}>
              {(item: string) => (
                <img src={item} alt="" />
              )}
            </For>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};