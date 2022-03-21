import { Component, createSignal, onCleanup, onMount, splitProps } from 'solid-js';
import mainImage from 'assets/menu/main.png'
import aboutImage from 'assets/menu/about.png'
import afishaImage from 'assets/menu/afisha.png'
import contactsImage from 'assets/menu/contacts.png'
import eventsImage from 'assets/menu/events.png'
import closeIcon from 'assets/close.svg'
import styles from './SiteMenu.module.css';
import { HoverOverHoc } from 'components';
import { preventScroll } from '../../App';
import { Link } from 'solid-app-router';
import { Portal } from 'solid-js/web';

export const SiteMenu: Component<{ onCloseClick: Function }> = (props) => {
  const [local] = splitProps(props, ['onCloseClick'])
  const [getIsActive, setIsActive] = createSignal(false)
  const [getImageClass, setImageClass] = createSignal(styles.hiddenImage)
  const [getActiveImage, setActiveImage] = createSignal(mainImage)
  const isMobile = window.innerWidth / window.innerHeight < 0.75;

  onMount(() => {
    window.scrollTo(0, 0)
    document.addEventListener('wheel', preventScroll, { passive: false })
    // @ts-ignore
    document.getElementById('root').classList.add('opaque')
  })

  onCleanup(() => {
    document.removeEventListener('wheel', preventScroll)
    // @ts-ignore
    document.getElementById('root').classList.remove('opaque')
  })

  const onLinkMouseOver = (page: string) => {
    switch (page) {
      case 'affiche':
        setActiveImage(afishaImage)
        break;
      case 'about':
        setActiveImage(aboutImage) 
        break;
      case 'contacts':
        setActiveImage(contactsImage)
        break;
      case 'events':
        setActiveImage(eventsImage)
        break;
      default:
        break;
    }
    setImageClass(styles.hiddenImage)
  }

  return (
    // @ts-ignore
    <Portal mount={document.getElementById('portal')}>
      <div class={styles.siteMenu} data-aos={isMobile ? "fade-left" : "fade-down"}>
        <div class={styles.over}>
          <div class={styles.imgContainer}>
            <img 
              class={`${styles.img} ${getActiveImage() !== mainImage ? getImageClass() : ''}`} 
              src={mainImage}
              alt=""
              data-aos="fade"
              data-aos-delay="300"
              data-aos-duration="1000"
            />
            <img 
              class={`${styles.img} ${getActiveImage() !== afishaImage ? getImageClass() : ''}`}
              src={afishaImage}
              alt="" 
            />
            <img 
              class={`${styles.img} ${getActiveImage() !== aboutImage ? getImageClass() : ''}`}
              src={aboutImage}
              alt=""
            />
            <img 
              class={`${styles.img} ${getActiveImage() !== contactsImage ? getImageClass() : ''}`}
              src={contactsImage}
              alt=""
            />
            <img 
              class={`${styles.img} ${getActiveImage() !== eventsImage ? getImageClass() : ''}`}
              src={eventsImage}
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
                <span class={styles.number} data-aos="fade" data-aos-delay="300">01/</span>
                <HoverOverHoc setIsAnyActive={setIsActive} getIsAnyActive={getIsActive}>
                  <Link
                    class={styles.link}
                    href="/ballet/affiche"
                    onmouseover={() => onLinkMouseOver('affiche')}
                    onclick={() => local.onCloseClick(false)}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    АФИША
                  </Link>
                </HoverOverHoc>
              </div>
              <div class={styles.linkContainer}>
                <span class={styles.number} data-aos="fade" data-aos-delay="300">02/</span>
                <HoverOverHoc setIsAnyActive={setIsActive} getIsAnyActive={getIsActive}>
                  <Link 
                    class={styles.link} 
                    href="/ballet/about"
                    onmouseover={() => onLinkMouseOver('about')}
                    onclick={() => local.onCloseClick(false)}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    О ТЕАТРЕ
                  </Link>
                </HoverOverHoc>
              </div>
              <div class={styles.linkContainer}>
                <span class={styles.number} data-aos="fade" data-aos-delay="300">03/</span>
                <HoverOverHoc setIsAnyActive={setIsActive} getIsAnyActive={getIsActive}>
                  <Link 
                    class={styles.link} 
                    href="/ballet/events"
                    onmouseover={() => onLinkMouseOver('events')}
                    onclick={() => local.onCloseClick(false)}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    СОБЫТИЯ
                  </Link>
                </HoverOverHoc>
              </div>
              <div class={styles.linkContainer}>
                <span class={styles.number} data-aos="fade" data-aos-delay="300">04/</span>
                <HoverOverHoc setIsAnyActive={setIsActive} getIsAnyActive={getIsActive}>
                  <Link 
                    class={styles.link} 
                    href="/ballet/contacts"
                    onmouseover={() => onLinkMouseOver('contacts')}
                    onclick={() => local.onCloseClick(false)}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    КОНТАКТЫ
                  </Link>
                </HoverOverHoc>
              </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};