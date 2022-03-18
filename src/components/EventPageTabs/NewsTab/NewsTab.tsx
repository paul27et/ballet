import { Component, createSignal, For, Show, splitProps } from 'solid-js';
import { NewsCardInterface } from 'interfaces';
import styles from './NewsTab.module.css';
import { NewsCard, Image } from 'components';

export const NewsTab: Component<{ news: NewsCardInterface[] }> = (props) => {
  const [local] = splitProps(props, ['news'])
  const [getCurrentImage, setCurrentImage] = createSignal(local.news[0].image)
  const [getBlur, setBlur] = createSignal(false)

  return (
    <div class={styles.newsTab}>
      <div class={styles.imgContainer}> 
        <Show when={getCurrentImage()}>
          {/* <img class={styles.img} src={getCurrentImage()} alt=""/> */}
          <Image imageClass={styles.img} src={getCurrentImage()} />
        </Show>
      </div>
      <div class={styles.newsList}>
        <For each={local.news}>
          {(item) => <NewsCard news={item as NewsCardInterface} setImage={setCurrentImage} getBlur={getBlur} setBlur={setBlur} />}
        </For>
      </div>
    </div>
  );
};