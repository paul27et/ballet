import { Component, For, Show, splitProps } from 'solid-js';
import { Footer, MainHeader, Menu, SiteMenu } from 'components';
// @ts-ignore
import { contacts } from 'database/contacts.json';
import styles from './ContactsPage.module.css';

export const ContactsPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])

  return (
    <div class={styles.page}>
      <MainHeader>Контакты</MainHeader>
      <Show when={local.isMenuActive}>
        <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
      </Show>
      <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)} />
      <div class={styles.getInTouch}>
        <div class={styles.address}>
          191014, Санкт-Петербург,<br /> ул. Маяковского, 15
        </div>
        <a class={styles.contactUs} href='mailto:paul27et@gmail.com'>
          связаться<br />с нами
        </a>
      </div>
      <div class={styles.contacts}>
        <div class={`${styles.contactsColumn} ${styles.firstColumn}`}>
          <div class={styles.contactCard}>
            <span class={styles.title}>{contacts[0].title}</span>  
            <span class={styles.phone}>{contacts[0].phone}</span>
            <span class={styles.mail}>{contacts[0].mail ? contacts[0].mail.join('\n') : ''}</span>
          </div>
          <div class={styles.contactCard}>
            <span class={styles.title}>{contacts[1].title}</span>  
            <span class={styles.phone}>{contacts[1].phone}</span>
            <span class={styles.mail}>{contacts[1].mail ? contacts[1].mail.join('\n') : ''}</span>
          </div>
        </div>
        <div class={`${styles.contactsColumn} ${styles.secondColumn}`}>
          <div class={styles.contactCard}>
            <span class={styles.title}>{contacts[2].title}</span>  
            <span class={styles.phone}>{contacts[2].phone}</span>
            <span class={styles.mail}>{contacts[2].mail ? contacts[2].mail.join('\n') : ''}</span>
          </div>
          <div class={styles.contactCard}>
            <span class={styles.title}>{contacts[3].title}</span>  
            <span class={styles.phone}>{contacts[3].phone}</span>
            <span class={styles.mail}>{contacts[3].mail ? contacts[3].mail.join('\n') : ''}</span>
          </div>
        </div>
        <div class={`${styles.contactsColumn} ${styles.thirdColumn}`}>
          <div class={styles.contactCard}>
            <span class={styles.title}>{contacts[4].title}</span>  
            <span class={styles.phone}>{contacts[4].phone}</span>
            <span class={styles.mail}>{contacts[4].mail ? contacts[4].mail.join('\n') : ''}</span>
          </div>
          <div class={styles.contactCard}>
            <span class={styles.title}>{contacts[5].title}</span>  
            <span class={styles.phone}>{contacts[5].phone}</span>
            <span class={styles.mail}>{contacts[5].mail ? contacts[5].mail.join('\n') : ''}</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};