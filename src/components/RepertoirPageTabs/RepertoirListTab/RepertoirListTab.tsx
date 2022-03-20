import { RepertoirInterface } from 'interfaces';
import { Link } from 'solid-app-router';
import { Component, createEffect, createSignal, For, Show, splitProps } from 'solid-js';
import { HoverOverHoc } from '../../HoverOverHoc';
import styles from './RepertoirListTab.module.css';

export const RepertoirListItem: Component<{ idx: Function, item: RepertoirInterface, setImage: Function, setOffset: Function, delay: boolean }> = (props) => {
  const [local] = splitProps(props, ['idx', 'item', 'setImage', 'setOffset', 'delay'])
  let currentEl: HTMLImageElement | undefined

  const calculateOffset = () => {
    return currentEl ? currentEl.offsetTop : 0
  }

  const onMouseOver = () => {
    local.setImage(local.item.image)
    local.setOffset(calculateOffset())
  }

  const onMouseLeave = () => {
    local.setImage('')
    local.setOffset(0)
  }

  const aosDelay = () => {
    return local.delay ? local.idx() * 100 + 100 : 100
  }

  return (
    <div class={styles.listItem} onmouseover={onMouseOver} onmouseleave={onMouseLeave} ref={currentEl} >
      <div class={styles.idx} data-aos="fade-up">{local.idx() < 10 ? 0 : ''}{local.idx() + 1}/</div>
      <Link href={local.item.id} class={styles.text} data-aos="fade-up" data-aos-delay={`${aosDelay()}`}>{local.item.title}</Link>
    </div>
  )
}

export const RepertoirListTab: Component<{ list: RepertoirInterface[], delay: boolean }> = (props) => {
  const [local] = splitProps(props, ['list'])
  const [getIsAnyActive, setIsAnyActive] = createSignal(false)
  const [getImage, setImage] = createSignal('')
  const [getOffset, setOffset] = createSignal(0)
  let img: HTMLImageElement | undefined

  const trackOffset = (offset: number) => {
    if (img) {
      img.style.top = `calc(${offset}px + 3.47vw)`
    }
  }

  createEffect(() => trackOffset(getOffset()))

  return (
    <div class={styles.listTab}>
      <div class={styles.listContainer}>
      <Show when={getImage() && getImage().length > 0}>
        <img class={styles.image} src={getImage()} alt="" ref={img} />
      </Show>
        <For each={local.list as RepertoirInterface[]}>
          {(item, idx) => (
            <HoverOverHoc getIsAnyActive={getIsAnyActive} setIsAnyActive={setIsAnyActive}>
              <RepertoirListItem item={item} idx={idx} setImage={setImage} setOffset={setOffset} delay />
            </HoverOverHoc>
          )}
        </For>
      </div>
    </div>
  );
};