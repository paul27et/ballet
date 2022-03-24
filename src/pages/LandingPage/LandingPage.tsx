import { Footer, Menu, SiteMenu } from 'components';
import { Component, createSignal, onMount, Show, splitProps } from 'solid-js';
import outOfTimeBanner from 'assets/banners/outOfTimeBanner.png';
import repetitionBanner from 'assets/banners/repetitionBanner.png';
import rodenBanner from 'assets/banners/rodenBanner.png';
import outOfTimeBannerMobile from 'assets/banners/outOfTimeBannerMobile.png';
import repetitionBannerMobile from 'assets/banners/repetitionBannerMobile.png';
import rodenBannerMobile from 'assets/banners/rodenBannerMobile.png';
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
            <Banner 
              image={isMobile ? repetitionBannerMobile : repetitionBanner} 
              title="Репетиция" 
              subtitle="19:00 / Мариинский театр" 
              date="04 февраля" 
              type="Балет в 3-х актах" 
              day="Пятница" 
              id="repetition" 
            />
            <Banner 
              image={isMobile ? rodenBannerMobile : rodenBanner} 
              title="Роден" 
              subtitle="19:00 / Эрмитажный театр" 
              date="08 февраля" 
              type="Балет в 3-х актах" 
              day="Суббота" 
              id="roden" 
            />
            <Banner 
              image={isMobile ? outOfTimeBannerMobile : outOfTimeBanner} 
              title="Вне времени. шедевры леонида якобсона" 
              subtitle="19:00 / Мариинский театр" 
              type="Хореографические миниатюры" 
              date="04 февраля" 
              day="Воскресенье" 
              id="outOfTime" 
            />
          </div>
        </div>
        <Partners />
        <div class={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};