import { Footer, Menu, SiteMenu } from 'components';
import { Component, createSignal, onMount, Show, splitProps } from 'solid-js';
import nutcrackerBanner from 'assets/banners/nutcrackerBanner.png';
import lakeBanner from 'assets/banners/lakeBanner.png';
import rodenBanner from 'assets/banners/rodenBanner.png';
import video from 'assets/mainVideo.mp4'
import styles from './LandingPage.module.css';
import { Partners, Calendar, Banner } from './components';

export const LandingPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])
  const [getMonth, setMonth] = createSignal('Февраль')

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
            <div class={styles.afficheTitle} data-aos="fade-up">Афиша</div>
          </div>
          <div class={styles.calendarContainer}>
            <div class={styles.calendar}>
              <Calendar month={getMonth()} setMonth={setMonth} />
            </div>
          </div>
        </div>
        <div class={styles.bannersContainer}>
          <div class={styles.bannersTitle}>Ближайшие спектакли</div>
          <div class={styles.bannersScrollContainer}>
            <Banner image={lakeBanner} title="Лебединое озеро" subtitle="12 февраля 2022 в 19:00 / Мариинский - 2" type="Балет в 3-х актах" />
            <Banner image={nutcrackerBanner} title="Щелкунчик" subtitle="22 февраля 2022 в 19:00 / Александринский театр" type="Балет в 3-х актах" />
            <Banner image={rodenBanner} title="Роден" type="Хореографические миниатюры" />
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