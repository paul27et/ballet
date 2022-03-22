import { Component, createSignal, onMount } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
import AOS from 'aos';
import styles from './App.module.css';
import { 
  EventsPage, 
  ErrorPage, 
  ContactsPage, 
  DocumentsPage, 
  AffichePage, 
  TroupePage, 
  RepertoirPage, 
  PlayPage, 
  LandingPage, 
  AboutPage, 
  HistoryPage
} from './pages';

export const preventScroll = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();

  return false;
}

export const parseText = (text: string, noAnimation?: boolean) => {
  return text.split('|').map(textItem => <div data-aos={noAnimation ? "" : "fade-up"}>{textItem}<br /><br /></div>)
}

const App: Component = () => {
  const [getMenuActive, setMenuActive] = createSignal(false)
  let app: HTMLDivElement

  onMount(() => {
    AOS.init({ duration: 600, delay: 100 })
  })

  const onMenuButtonClick = (state: boolean) => {
    setMenuActive(state)
  }

  return (
    <div class={styles.app}>
      <Routes base="/ballet/">
        <Route path="/" element={<LandingPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/events" element={<EventsPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/contacts" element={<ContactsPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/404" element={<ErrorPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/documents" element={<DocumentsPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/affiche" element={<AffichePage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/troupe" element={<TroupePage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/about" element={<AboutPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/history" element={<HistoryPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/repertoir" element={<RepertoirPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/repertoir/:id" element={<PlayPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
        <Route path="/*all" element={<ErrorPage onMenuButtonClick={(state: boolean) => onMenuButtonClick(state)} isMenuActive={getMenuActive()} />} />
      </Routes>
    </div>
  )
};

export default App;
