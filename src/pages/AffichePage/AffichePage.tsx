import { Component, createEffect, For, onMount, Show, splitProps } from 'solid-js';
import { Button, Footer, MainHeader, Menu, SiteMenu } from 'components';
// @ts-ignore
import { months } from 'database/affiche.json'
import { MonthInterface, PlayInterface } from 'interfaces';
import styles from './AffichePage.module.css';
import { Link, useParams, useSearchParams } from 'solid-app-router';

export const AffichePage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])
  const isMobile = window.innerWidth / window.innerHeight < 0.75;
  const [searchParams, setSearchParams] = useSearchParams();
  const dataAos = isMobile ? 'fade' : 'fade-up'

  onMount(() => {
    if (searchParams.scrollTo) {
      setTimeout(() => document.getElementById(searchParams.scrollTo)?.scrollIntoView(true), 700)
    }
  })


  const parseMonth = (str: string) => {
    if (str.toLowerCase() === "февраль") {
      return "февраля"
    }
    return "марта"
  }

  const parseTime = (str: string) => {
    if (str.slice(0, 2) === "ПН") {
      return "Понедельник"
    } else if (str.slice(0, 2) === "ВТ") {
      return "Вторник"
    } else if (str.slice(0, 2) === "СР") {
      return "Среда"
    } else if (str.slice(0, 2) === "ЧТ") {
      return "Четверг"
    } else if (str.slice(0, 2) === "ПТ") {
      return "Пятница"
    } else if (str.slice(0, 2) === "СБ") {
      return "Суббота"
    } else if (str.slice(0, 2) === "ВС") {
      return "Воскресенье"
    }
    return ""
  }

  const mobilePlayItem = (play: PlayInterface, month: MonthInterface, isLast: boolean) => (
    <div class={`${styles.play} ${isLast && styles.last}`} data-aos={dataAos}>
      <div class={styles.playContainer}>
        <div class={styles.titleContainerMobile}>
          <div class={styles.dateContainer}>
            <div class={styles.date}>{play.date.replace(/^0+/, "")}</div>
            <div class={styles.monthTitle}>{parseMonth(Object.keys(month)[0])}</div>
          </div>
          <div class={styles.dayContainer}>
            <div class={styles.daytime}>{parseTime(play.daytime)}</div>
          </div>
        </div>
        <Link href={`/ballet/repertoir/${play.id}`}>
          <img class={styles.afficheImage} src={play.image} alt="" />
        </Link>
        <div class={styles.titleContainer}>
          <span class={styles.title}>
            <Link class={styles.title} href={`/ballet/repertoir/${play.id}`}>{play.title}</Link>
          </span>
          <span class={styles.place}>{play.place}</span>
        </div>
      </div>
      <div class={styles.buttonContainer}>
        <Button text="Купить билет" style={styles.buttonLocal} />
      </div>
    </div>
  )

  return (
    <>
      <MainHeader>Афиша</MainHeader>
      <div class={styles.affichePage}>
        <Show when={local.isMenuActive}>
          <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </Show>
        <div class={styles.menuContainer}>
          <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </div>
        <div class={styles.selectContainer}>
          <select class={styles.select}>
            <option>Всё время</option>
            <option>Февраль</option>
            <option>Март</option>
          </select>
          <select class={styles.select}>
            <option>Все спектакли</option>
            <option>Вне времени</option>
            <option>Дон Кихот</option>
            <option>Жизель</option>
            <option>Лебединое озеро</option>
            <option>Лики современной хореографии</option>
            <option>Пиковая дама</option>
            <option>Репетиция</option>
            <option>Роден</option>
            <option>Ромео и Джульетта</option>
            <option>Свадебный кортеж</option>
            <option>Спартак</option>
            <option>Спящая красавица</option>
            <option>Щелкунчик</option>
          </select>
        </div>
        <For each={months as MonthInterface[]}>
          {(month, idx) => (
            <div class={styles.mobileMarginTop}>
              <div 
                class={`${styles.month} ${idx() === 0 ? styles.firstMonth : styles.notFirstMonth}`} 
                data-aos={dataAos}
              >
                {Object.keys(month)[0]}
              </div>
              <For each={Object.values(month)[0] as PlayInterface[] }>
                {(play, idx) => {
                  return isMobile ? mobilePlayItem(play, month, idx() === Object.values(month)[0].length - 1) : (
                    <div class={styles.play} id={play.date + play.id} data-aos={dataAos}>
                      <div class={styles.playContainer}>
                        <div class={styles.dateContainer}>
                          <span class={styles.date}>{play.date}</span>
                          <span class={styles.daytime}>{play.daytime}</span>
                        </div>
                        <div class={styles.titleContainer}>
                          <span class={styles.title}>
                            <Link class={styles.title} href={`/ballet/repertoir/${play.id}`}>{play.title}</Link>
                          </span>
                          <span class={styles.place}>{play.place}</span>
                        </div>
                      </div>
                      <div class={styles.buttonContainer}>
                        <Button text="Купить билет" style={styles.buttonLocal} />
                      </div>
                    </div>
                  )
                }}
              </For>
            </div>
          )}
        </For>
        <Footer />
      </div>
    </>
  );
};