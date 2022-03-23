import { Button } from "components"
import { Link } from "solid-app-router"
import { Component, Show, splitProps } from "solid-js"
import styles from '../LandingPage.module.css'

export const Banner: Component<{ image: string, title: string, subtitle?: string, date?: string, type: string, day: string, id: string }> = (props) => {
  const [local] = splitProps(props, ['image', 'title', 'subtitle', 'type', 'date', 'day', 'id'])
  const bgUrl = local.image.replace('/ballet', '.')
  const isMobile = window.innerWidth / window.innerHeight < 0.75;
  const dateArray = local.date?.split(' ')

  if (isMobile) {
    return (
      <div class={styles.bannerMobile}>
        {/* <div class={`${styles.titleContainerPlay}`} data-aos="fade">
          <div class={styles.title}>
            <div class={styles.titleNumber}>{dateArray && dateArray[0]}</div>
            {dateArray && dateArray[1]}
          </div>
          <div class={styles.subname}>
            {local.day}
          </div>
        </div> */}
        <img class={styles.mobileImage} src={bgUrl} alt="" data-aos="fade" />
        <div class={styles.mobileDescription}>
          <div class={styles.mobileBannerTitle} data-aos="fade">{local.title}</div>
          <div class={styles.mobileBannerSubtitle} data-aos="fade">{`${local.date} 2022 в ${local.subtitle}`}</div>
          <div class={styles.button} data-aos="fade">
            <Button text={local.subtitle ? "Купить билет": "Билетов нет"} style={styles.mobileButtonLocal} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div class={styles.banner} style={{'background-image': `url(${bgUrl})`}}>
      <div class={styles.bannerTextContainer}>
        <Link href={`/ballet/repertoir/${local.id}`}>
          <div class={styles.bannerTitle}>{local.title}</div>
        </Link>
        <Show when={local.subtitle}>
          <div class={styles.bannerSubtitle}>{`${local.date} 2022 в ${local.subtitle}`}</div>
        </Show>
        <div class={styles.button}>
          <Button text={local.subtitle ? "Купить билет": "Билетов нет"} style={styles.buttonLocal} />
        </div>
      </div>
    </div>
  )
}