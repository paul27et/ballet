import { Component, createSignal, onMount } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
import styles from './App.module.css';
import { EventsPage, ErrorPage, ContactsPage, DocumentsPage, AffichePage, TroupePage} from './pages';
import { SiteMenu } from 'components';

export const preventScroll = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();

  return false;
}

const App: Component = () => {
  const [getMenuActive, setMenuActive] = createSignal(false)

  // onMount(() => {
  //   const cursorRounded = document.getElementById('cursorRouned');
  //   const cursorPointed = document.getElementById('cursorPointed');


  //   const moveCursor = (e) => {
  //     const mouseY = e.clientY;
  //     const mouseX = e.clientX;
    
  //     cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  //     cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
  //   }

  //   window.addEventListener('mousemove', moveCursor)  
  // })

  const onMenuButtonClick = (state: boolean) => {
    setMenuActive(state)
  }

  return (
    <div class={styles.app}>
      {/* <div id="cursorRouned" class={styles.cursorRounded}></div>
      <div id="cursorPointed" class={styles.cursorPointed}></div> */}
      <Routes base="/ballet/">
        <Route path="/events" element={<EventsPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/contacts" element={<ContactsPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/#/contacts" element={<ContactsPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/404" element={<ErrorPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/documents" element={<DocumentsPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/affiche" element={<AffichePage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/troupe" element={<TroupePage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/menu" element={<SiteMenu onCloseClick={() => onMenuButtonClick(false)} />} />
        <Route path="/*all" element={<ErrorPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        {/* <Route path="/" element={<MainPage />} /> */}
      </Routes>
    </div>
  )
};

export default App;
