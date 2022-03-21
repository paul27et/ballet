import { HoverOverHoc } from "components"
import { Component, createSignal, For, Show } from "solid-js"
import arrowLeft from 'assets/arrowLeft.svg'
import arrowRight from 'assets/arrowRight.svg'
// @ts-ignore
import { partners } from 'database/partners.json'
import styles from '../LandingPage.module.css'


export const Partners: Component = () => {
  const [getImage, setImage] = createSignal('')
  const [getIsAnyActive, setIsAnyActive] = createSignal(false)
  const [getPage, setPage] = createSignal(1)

  const onMouseOver = (image: string) => {
    setImage(image)
  }

  const onMouseLeave = () => {
    setImage('')
  }

  const getPages = () => {
    return [...Array(Math.floor(partners.length / 4) + 1)]
  }

  const setNextPage = () => {
    if (getPage() < partners.length / 4) {
      setPage(getPage() + 1)
    }
  }

  const setPrevPage = () => {
    if (getPage() > 1) {
      setPage(getPage() - 1)
    }
  }
 
  return (
    <div class={styles.partnersContainer}>
      <div class={styles.partnersTitle}>Партнеры</div>
      <div class={styles.partners}>
        <div class={styles.partnerImageContainer}>
          <Show when={getImage().length > 0}>
            <img class={styles.partnerImage} src={getImage()} alt="" />
          </Show>
        </div>
        <div class={styles.partnersList}>
          <For each={partners.slice(getPage() * 4 - 4, getPage() * 4)}>
            {(partner: { text: string, link: string, image: string }) => (
              <HoverOverHoc getIsAnyActive={getIsAnyActive} setIsAnyActive={setIsAnyActive}>
                <div 
                  class={styles.partnerItem} 
                  onmouseover={() => onMouseOver(partner.image)} 
                  ontouchstart={() => onMouseOver(partner.image)} 
                  onmouseleave={onMouseLeave} 
                  ontouchend={onMouseLeave}
                  data-aos="fade-up"
                >
                  <a href={partner.link}>{partner.text}</a>
                </div>
              </HoverOverHoc>
            )}
          </For>
          <div class={styles.pagination}>
            <img class={`${styles.arrow} ${getPage() !== 1 && styles.active}`} src={arrowLeft} alt="" onclick={setPrevPage} />
            <div class={styles.pages}>
              <For each={getPages()}>
                {(item, idx) => (
                  <div class={`${styles.page} ${getPage() === idx() + 1 && styles.active}`} onclick={() => setPage(idx() + 1)}>
                    {idx() + 1}
                  </div>
                )}
              </For>
            </div>
            <img class={`${styles.arrow} ${getPage() !== Math.floor(partners.length / 4) + 1 && styles.active}`} src={arrowRight} alt="" onclick={setNextPage}/>
          </div>
        </div>
      </div>
    </div>
  )
}