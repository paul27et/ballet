import { Button } from "components"
import { Component, createEffect, createSignal, onMount, Show, splitProps } from "solid-js"
import { preventScroll } from "../../../App"
import styles from '../LandingPage.module.css'

export const Banner: Component<{ image: string, title: string, subtitle?: string, type: string }> = (props) => {
  const [local] = splitProps(props, ['image', 'title', 'subtitle', 'type'])
  const [getOffset, setOffset] = createSignal('')
  const [getScroll, setScroll] = createSignal(0)
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
          <Button text={local.subtitle ? "Купить билет": "Билетов нет"} style={styles.buttonLocal} />
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