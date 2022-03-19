import { Button, Footer, HoverOverHoc, Menu, SiteMenu } from 'components';
import { Component, createEffect, createSignal, For, Match, Show, splitProps, Switch } from 'solid-js';
import { Link } from 'solid-app-router';
import arrowLeft from 'assets/arrowLeft.svg';
import arrowRight from 'assets/arrowRight.svg';
import nutcrackerBanner from 'assets/banners/nutcrackerBanner.png';
import lakeBanner from 'assets/banners/lakeBanner.png';
import rodenBanner from 'assets/banners/rodenBanner.png';
import video from 'assets/videoBackground.mp4'
// @ts-ignore
import { partners } from 'database/partners.json'
import styles from './LandingPage.module.css';

const Calendar: Component<{ month: string, setMonth: Function }> = (props) => {
  const [local] = splitProps(props, ['month', 'setMonth'])
  return (
    <div class={styles.table}>
      <div class={`${styles.titleContainer} ${styles.month}`}>
        <img class={`${local.month === 'Февраль' && styles.arrowInactive}`} src={arrowLeft} alt= "" onclick={() => local.setMonth('Февраль')} />
        <div class={styles.title}>{local.month}</div>
        <img class={`${local.month === 'Март' && styles.arrowInactive}`} src={arrowRight} alt= "" onclick={() => local.setMonth('Март')} />
      </div>
      <Switch>
        <Match when={local.month === 'Февраль'}>
          <div class={`${styles.flexTable} ${styles.header}`}>
            <div class={`${styles.flexRow} ${styles.first}`} role="columnheader">ПН</div>
            <div class={styles.flexRow} role="columnheader">ВТ</div>
            <div class={styles.flexRow} role="columnheader">СР</div>
            <div class={styles.flexRow} role="columnheader">ЧТ</div>
            <div class={styles.flexRow} role="columnheader">ПТ</div>
            <div class={styles.flexRow} role="columnheader">СБ</div>
            <div class={styles.flexRow} role="columnheader">ВС</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell"></div>
            <div class={styles.flexRow} role="cell">1</div>
            <div class={styles.flexRow} role="cell">2</div>
            <div class={styles.flexRow} role="cell">3</div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">4</Link></div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">5</Link></div>
            <div class={styles.flexRow} role="cell">6</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell">7</div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">8</Link></div>
            <div class={styles.flexRow} role="cell">9</div>
            <div class={styles.flexRow} role="cell">10</div>
            <div class={styles.flexRow} role="cell">11</div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">12</Link></div>
            <div class={styles.flexRow} role="cell">13</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">14</Link></div>
            <div class={styles.flexRow} role="cell">15</div>
            <div class={styles.flexRow} role="cell">16</div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">17</Link></div>
            <div class={styles.flexRow} role="cell">18</div>
            <div class={styles.flexRow} role="cell">19</div>
            <div class={styles.flexRow} role="cell">20</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell">21</div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">22</Link></div>
            <div class={styles.flexRow} role="cell">23</div>
            <div class={styles.flexRow} role="cell">24</div>
            <div class={styles.flexRow} role="cell">25</div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">26</Link></div>
            <div class={styles.flexRow} role="cell">27</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">28</Link></div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
          </div>
        </Match>
        <Match when={local.month === 'Март'}>
          <div class={`${styles.flexTable} ${styles.header}`}>
            <div class={`${styles.flexRow} ${styles.first}`} role="columnheader">ПН</div>
            <div class={styles.flexRow} role="columnheader">ВТ</div>
            <div class={styles.flexRow} role="columnheader">СР</div>
            <div class={styles.flexRow} role="columnheader">ЧТ</div>
            <div class={styles.flexRow} role="columnheader">ПТ</div>
            <div class={styles.flexRow} role="columnheader">СБ</div>
            <div class={styles.flexRow} role="columnheader">ВС</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell"></div>
            <div class={styles.flexRow} role="cell">1</div>
            <div class={styles.flexRow} role="cell">2</div>
            <div class={styles.flexRow} role="cell">3</div>
            <div class={styles.flexRow} role="cell">4</div>
            <div class={styles.flexRow} role="cell">5</div>
            <div class={styles.flexRow} role="cell">6</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">7</Link></div>
            <div class={styles.flexRow} role="cell">8</div>
            <div class={styles.flexRow} role="cell">9</div>
            <div class={styles.flexRow} role="cell">10</div>
            <div class={styles.flexRow} role="cell">11</div>
            <div class={styles.flexRow} role="cell">12</div>
            <div class={styles.flexRow} role="cell">13</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell">14</div>
            <div class={styles.flexRow} role="cell">15</div>
            <div class={styles.flexRow} role="cell">16</div>
            <div class={styles.flexRow} role="cell">17</div>
            <div class={styles.flexRow} role="cell">18</div>
            <div class={styles.flexRow} role="cell">19</div>
            <div class={styles.flexRow} role="cell">20</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">21</Link></div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">22</Link></div>
            <div class={styles.flexRow} role="cell">23</div>
            <div class={styles.flexRow} role="cell">24</div>
            <div class={styles.flexRow} role="cell">25</div>
            <div class={styles.flexRow} role="cell">26</div>
            <div class={styles.flexRow} role="cell">27</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell">28</div>
            <div class={styles.flexRow} role="cell">29</div>
            <div class={styles.flexRow} role="cell">30</div>
            <div class={styles.flexRow} role="cell">31</div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
          </div>
        </Match>
      </Switch>
    </div>
  )
}

const Banner: Component<{ image: string, title: string, subtitle?: string, type: string }> = (props) => {
  const [local] = splitProps(props, ['image', 'title', 'subtitle', 'type'])
  const bgUrl = local.image.replace('/ballet', '.')
  let banner: HTMLDivElement | undefined

  return (
    <div class={styles.banner} style={{'background-image': `url(${bgUrl})`}} ref={banner}>
      <div class={styles.bannerTextContainer}>
        <div class={styles.bannerTitle}>{local.title}</div>
        <Show when={local.subtitle}>
          <div class={styles.bannerSubtitle}>{local.subtitle}</div>
        </Show>
        <div class={styles.button}>
          <Button text={local.subtitle ? "Купить билет": "Билетов нет"} noBackground />
        </div>
      </div>
      <div class={styles.type}>
        <div>
          {local.type}
        </div>
      </div>
    </div>
  )
}

const Partners: Component = () => {
  const [getImage, setImage] = createSignal('')
  const [getOffset, setOffset] = createSignal(0)
  const [getIsAnyActive, setIsAnyActive] = createSignal(false)
  let imageRef: HTMLImageElement | undefined

  const imageEffect = (offset: number) => {
    if (imageRef) {
      imageRef.style.marginTop = `${offset*18}vh`
    }
  }

  createEffect(() => imageEffect(getOffset()))

  const onMouseOver = (image: string, idx: number) => {
    setImage(image)
    setOffset(idx)
  }

  const onMouseLeave = () => {
    setImage('')
    setOffset(0)
  }
 
  return (
    <div class={styles.partnersContainer}>
      <div class={styles.partnersTitle}>Партнеры</div>
      <div class={styles.partners}>
        <div class={styles.partnerImageContainer}>
          <Show when={getImage().length > 0}>
            <img class={styles.partnerImage} src={getImage()} alt="" ref={imageRef} />
          </Show>
        </div>
        <div class={styles.partnersList}>
          <For each={partners}>
            {(partner: { text: string, link: string, image: string }, idx) => (
              <HoverOverHoc getIsAnyActive={getIsAnyActive} setIsAnyActive={setIsAnyActive}>
                <div class={styles.partnerItem} onmouseover={() => onMouseOver(partner.image, idx())} onmouseleave={onMouseLeave}>
                  <a href={partner.link}>{partner.text}</a>
                </div>
              </HoverOverHoc>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}

export const LandingPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])
  const [getMonth, setMonth] = createSignal('Февраль')

  return (
    <>
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
      <div class={styles.contentContainer}>
        <div class={styles.affiche}>
          <div class={styles.afficheTitle}>Афиша</div>
        </div>
        <div class={styles.calendarContainer}>
          <div class={styles.calendar}>
            <Calendar month={getMonth()} setMonth={setMonth} />
          </div>
        </div>
      </div>
      <div class={styles.bannersContainer}>
        <div class={styles.bannersTitle}>Ближайшие спектакли</div>
        <Banner image={lakeBanner} title="Лебединое озеро" subtitle="12 февраля 2022 в 19:00 / Мариинский - 2" type="Балет в 3-х актах" />
        <Banner image={nutcrackerBanner} title="Щелкунчик" subtitle="22 февраля 2022 в 19:00 / Александринский театр" type="Балет в 3-х актах" />
        <Banner image={rodenBanner} title="Роден" type="Хореографические миниатюры" />
      </div>
      <Partners />
      <div class={styles.menuContainer}>
        <Footer />
      </div>
    </>
  );
};