import { Footer, Menu, SiteMenu } from 'components';
import { Component, createSignal, onMount, Show, splitProps } from 'solid-js';
import nutcrackerBanner from 'assets/banners/nutcrackerBanner.png';
import lakeBanner from 'assets/banners/lakeBanner.png';
import rodenBanner from 'assets/banners/rodenBanner.png';
import arrowRight from 'assets/arrowRight.svg';
import video from 'assets/mainVideo.mp4'
import styles from './LandingPage.module.css';
import { Partners, Calendar, Banner } from './components';
import { Link } from 'solid-app-router';

export const LandingPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])
  const [getMonth, setMonth] = createSignal('Февраль')
  const isMobile = window.innerWidth / window.innerHeight < 0.75;

  return (
    <div class={styles.landingPage}>
      <Show when={local.isMenuActive}>
        <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
      </Show>
      <div class={styles.videoBackground}>
        <video class={styles.video} autoplay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div class={styles.menuContainer}>
          <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </div>
      </div>
      <div>
        <div class={styles.contentContainer}>
          <div class={styles.affiche}>
            <div class={styles.afficheTitle} data-aos={isMobile ? "fade" :"fade-up"}>Афиша</div>
          </div>
          <div class={styles.calendarContainer}>
            <div class={styles.calendar}>
              <Calendar month={getMonth()} setMonth={setMonth} />
            </div>
          </div>
          <Show when={isMobile}>
            <Link href="/ballet/affiche">
              <div class={styles.afficheLink} data-aos={isMobile ? "fade" :"fade-up"}>
                Вся афиша
              </div>
            </Link>
          </Show>
        </div>
        <div class={styles.bannersContainer}>
          <div class={styles.bannersTitle}>Премьеры</div>
          <div class={styles.bannersScrollContainer}>
            <Banner image={lakeBanner} title="Лебединое озеро" subtitle="19:00 / Мариинский - 2" date="12 февраля" type="Балет в 3-х актах" day="Пятница"/>
            <Banner image={nutcrackerBanner} title="Щелкунчик" subtitle="19:00 / Александринский театр" date="22 февраля" type="Балет в 3-х актах" day="Суббота" />
            <Banner image={rodenBanner} title="Роден" type="Хореографические миниатюры" date="23 февраля" day="Воскресенье" />
          </div>
        </div>
        <Partners />
        <div class={styles.menuContainer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};