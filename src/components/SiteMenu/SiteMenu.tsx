import { Component, createSignal, onCleanup, onMount, splitProps } from 'solid-js';
import startMenuImage from 'assets/startMenuImage.png'
import startMenuImageHovered from 'assets/startMenuImageHovered.png'
import startMenuImageHovered2 from 'assets/startMenuImageHovered2.png'
import closeIcon from 'assets/close.svg'
import styles from './SiteMenu.module.css';
import { HoverOverHoc } from 'components';
import { preventScroll } from '../../App';

export const SiteMenu: Component<{ onCloseClick: Function }> = (props) => {
  const [local] = splitProps(props, ['onCloseClick'])
  const [getIsActive, setIsActive] = createSignal(false)
  const [getImageClass, setImageClass] = createSignal(styles.hiddenImage)
  const [getActiveImage, setActiveImage] = createSignal(startMenuImage)

  onMount(() => {
    window.scrollTo(0, 0)
    document.addEventListener('wheel', preventScroll, { passive: false })
  })

  onCleanup(() => {
    document.removeEventListener('wheel', preventScroll)
  })

  const onLinkMouseOver = (page: string) => {
    switch (page) {
      case 'affiche':
        setActiveImage(startMenuImageHovered)
        break;
      case 'about':
        setActiveImage(startMenuImageHovered2) 
        break;
      case 'contacts':
        setActiveImage(startMenuImage)
        break;
      // case 'events':
      //   setImage(startMenuImageHovered2)
      //   break;
      default:
        break;
    }
    setImageClass(styles.hiddenImage)
  }

  return (
    <div class={styles.siteMenu}>
      <div class={styles.over}>
        <div class={styles.imgContainer}>
          <img 
            class={`${styles.img} ${getActiveImage() !== startMenuImage ? getImageClass() : ''}`} 
            src={startMenuImage}
            alt="" 
          />
          <img 
            class={`${styles.img} ${getActiveImage() !== startMenuImageHovered ? getImageClass() : ''}`}
            src={startMenuImageHovered}
            alt="" 
          />
          <img 
            class={`${styles.img} ${getActiveImage() !== startMenuImageHovered2 ? getImageClass() : ''}`}
            src={startMenuImageHovered2}
            alt=""
          />
        </div>
      </div>
      <div class={styles.menuContainer}>
        <div class={styles.closeContainer}>
          <img src={closeIcon} alt="" class={styles.close} onclick={() => local.onCloseClick(false)} />
        </div>
          <div class={styles.mainMenu}>
            <div class={styles.linkContainer}>
              <span class={styles.number}>01/</span>
              <HoverOverHoc setIsAnyActive={setIsActive} getIsAnyActive={getIsActive}>
                <a 
                  class={styles.link}
                  href="/affiche"
                  onmouseover={() => onLinkMouseOver('affiche')}
                  onclick={() => local.onCloseClick(false)}
                >
                  АФИША
                </a>
              </HoverOverHoc>
            </div>
            <div class={styles.linkContainer}>
              <span class={styles.number}>02/</span>
              <HoverOverHoc setIsAnyActive={setIsActive} getIsAnyActive={getIsActive}>
                <a 
                  class={styles.link} 
                  href="/about"
                  onmouseover={() => onLinkMouseOver('about')}
                  onclick={() => local.onCloseClick(false)}
                >
                  О ТЕАТРЕ
                </a>
              </HoverOverHoc>
            </div>
            <div class={styles.linkContainer}>
              <span class={styles.number}>03/</span>
              <HoverOverHoc setIsAnyActive={setIsActive} getIsAnyActive={getIsActive}>
                <a 
                  class={styles.link} 
                  href="/events"
                  onmouseover={() => onLinkMouseOver('events')}
                  onclick={() => local.onCloseClick(false)}
                >
                  СОБЫТИЯ
                </a>
              </HoverOverHoc>
            </div>
            <div class={styles.linkContainer}>
              <span class={styles.number}>04/</span>
              <HoverOverHoc setIsAnyActive={setIsActive} getIsAnyActive={getIsActive}>
                <a 
                  class={styles.link} 
                  href="/contacts"
                  onmouseover={() => onLinkMouseOver('contacts')}
                  onclick={() => local.onCloseClick(false)}
                >
                  КОНТАКТЫ
                </a>
              </HoverOverHoc>
            </div>
        </div>
      </div>
    </div>
  );
};