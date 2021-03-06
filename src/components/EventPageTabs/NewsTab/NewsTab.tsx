import { Component, createEffect, createSignal, For, onMount, Show, splitProps } from 'solid-js';
import { NewsCardInterface } from 'interfaces';
import styles from './NewsTab.module.css';
import { Footer, NewsCard } from 'components';

export const NewsTab: Component<{ news: NewsCardInterface[] }> = (props) => {
  const [local] = splitProps(props, ['news'])
  const [getCurrentImage, setCurrentImage] = createSignal(local.news[0].image)
  const [getBlur, setBlur] = createSignal(false)
  const isMobile = window.innerWidth / window.innerHeight < 0.75

  onMount(() => {
    if (isMobile) {
      window.scrollTo(0, 0)
    }
  })

  return (
    <>
      <div id="newsTab" class={styles.newsTab}>
        <Show when={!isMobile}>
          <div class={styles.imgContainer}> 
            <Show when={getCurrentImage()}>
              <img class={`${styles.img}`} src={getCurrentImage()} alt="" />
            </Show>
          </div>
        </Show>
        <div class={styles.newsList}>
          <For each={local.news}>
            {(item) => <NewsCard news={item as NewsCardInterface} setImage={setCurrentImage} getBlur={getBlur} setBlur={setBlur} />}
          </For>
        </div>
      </div>
      <Footer />
    </>
  );
};