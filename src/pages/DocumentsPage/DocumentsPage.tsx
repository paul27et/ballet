import { Component, createSignal, For, Show, splitProps } from 'solid-js';
import { Accordion } from 'solid-bootstrap';
import { MainHeader, Menu, HoverOverHoc, SiteMenu, Footer } from 'components';
import { DocumentInterface } from 'interfaces';
// @ts-ignore
import { documents } from 'database/documents.json';
import styles from './DocumentsPage.module.css';

export const DocumentsPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])
  const isMobile = window.innerWidth / window.innerHeight < 0.75;

  const [getIsActive, setIsActive] = createSignal(false)
  const [getIsActive2, setIsActive2] = createSignal(false)
  
  return (
    <>
      <MainHeader>Документы</MainHeader>
      <Show when={local.isMenuActive}>
        <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
      </Show>
      <div class={styles.documentsPage}>
        <div class={styles.menuContainer}>
          <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)}/>
        </div>
        <div class={styles.accordionContainer}>
          <Accordion flush>
            <For each={documents as DocumentInterface[]}>
              {(document, idx) => (
                <>
                {isMobile ? (
                  <Accordion.Item eventKey={`${idx()}`}>
                    <Accordion.Header bsPrefix={styles.documentTitle}>
                        {document.title.split('|').map(text => <>{text}<br /></>)}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div class={styles.accordionBody}>
                        {document.content.map((obj) => (
                          <HoverOverHoc setIsAnyActive={setIsActive2} getIsAnyActive={getIsActive2} notMainColor>
                            <a href={Object.values(obj)[0]} class={styles.documentLink}>{Object.keys(obj)[0]}<br /></a>
                          </HoverOverHoc>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ) : (
                  <HoverOverHoc setIsAnyActive={setIsActive} getIsAnyActive={getIsActive}>
                    <Accordion.Item eventKey={`${idx()}`}>
                      <Accordion.Header bsPrefix={styles.documentTitle}>
                          {document.title.split('|').map(text => <>{text}<br /></>)}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div class={styles.accordionBody}>
                          {document.content.map((obj) => (
                            <HoverOverHoc setIsAnyActive={setIsActive2} getIsAnyActive={getIsActive2} notMainColor>
                              <a href={Object.values(obj)[0]} class={styles.documentLink}>{Object.keys(obj)[0]}<br /></a>
                            </HoverOverHoc>
                          ))}
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </HoverOverHoc>
                )}
                </>
              )}
            </For>
          </Accordion>
        </div>
      </div>
      <div class={styles.footerContainer}>
        <Footer />
      </div>
    </>
  );
};