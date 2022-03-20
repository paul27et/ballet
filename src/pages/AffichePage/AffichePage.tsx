import { Component, For, Show, splitProps } from 'solid-js';
import { Button, Footer, MainHeader, Menu, SiteMenu } from 'components';
// @ts-ignore
import { months } from 'database/affiche.json'
import { MonthInterface, PlayInterface } from 'interfaces';
import styles from './AffichePage.module.css';
import { Link } from 'solid-app-router';

export const AffichePage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])

  return (
    <>
      <MainHeader>Афиша</MainHeader>
      <div class={styles.affichePage}>
        <Show when={local.isMenuActive}>
          <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </Show>
        <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)} />
        <div class={styles.selectContainer}>
          <select class={styles.select}>
            <option>Всё время</option>
            <option>Февраль</option>
            <option>Март</option>
          </select>
          <select class={styles.select}>
            <option>Все спектакли</option>
            <option>Жизель</option>
            <option>Щелкунчик</option>
          </select>
        </div>
        <For each={months as MonthInterface[]}>
          {(month, idx) => (
            <div>
              <div 
                class={`${styles.month} ${idx() === 0 ? styles.firstMonth : styles.notFirstMonth}`} 
                data-aos="fade-up"
              >
                {Object.keys(month)[0]}
              </div>
              <For each={Object.values(month)[0] as PlayInterface[] }>
                {(play) => 
                  <div class={styles.play} data-aos="fade-up" >
                    <div class={styles.playContainer}>
                      <div class={styles.dateContainer}>
                        <span class={styles.date}>{play.date}</span>
                        <span class={styles.daytime}>{play.daytime}</span>
                      </div>
                      <div class={styles.titleContainer}>
                        <span class={styles.title}>
                          <Link href={`/ballet/repertoir/${play.id}`}>{play.title}</Link>
                        </span>
                        <span class={styles.place}>{play.place}</span>
                      </div>
                    </div>
                    <div class={styles.buttonContainer}>
                      <Button text="Купить билет" style={styles.buttonLocal} />
                    </div>
                  </div>
                }
              </For>
            </div>
          )}
        </For>
        <Footer />
      </div>
    </>
  );
};