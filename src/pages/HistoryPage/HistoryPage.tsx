import { Footer, MainHeader, Menu, SiteMenu } from 'components';
import { Component, For, Show, splitProps } from 'solid-js';
import mainBg from 'assets/history/mainBg.png'
import styles from './HistoryPage.module.css';
import { parseText } from '../../App';

const texts = {
  "mainText": "Санкт-Петербургский государственный академический театр балета имени Леонида Якобсона – уникальный художественный коллектив, являющийся жемчужиной не только Санкт-Петербурга и России, но и всего мирового культурного пространства.|Театр гордится своей 50-летней историей и с честью носит имя своего основателя – выдающегося русского хореографа XX века Леонида Вениаминовича Якобсона (1904–1975).",
  "years": [
    {
      "year": "1966",
      "image": "./history/1966.png",
      "text": "Коллектив был основан 12 ноября 1966 года, приказом Министерства культуры СССР под названием «Хореографические миниатюры».|Леонид Якобсон встал во главе театра в 1969 году, и с этого времени у труппы началась новая жизнь.|Леонид Якобсон был убежден, что каждый спектакль должен иметь индивидуальное лицо и считал классический танец – только одним (а не главным) выразительным средством в балете."
    },
    {
      "year": "1976",
      "image": "./history/1966.png",
      "text": "В 1976 году, после смерти Якобсона, место художественного руководителя получает его последователь, премьер Кировского театра Аскольд Макаров.|Именно в это время в театре появляются постановки зарубежных хореографов, масштабные классические полотна. Коллектив становится известен за пределами СССР."
    },
    {
      "year": "2011",
      "image": "./history/1966.png",
      "text": "С 2011 года художественным руководителем театра является Заслуженный артист России Андриан Фадеев.|Сегодня в театре работают воспитанники лучших хореографических школ и опытные педагоги, объединенные стремлением хранить шедевры прошлого и создавать новое.|Труппа является лауреатом Высшей театральной премии Санкт-Петербурга «Золотой софит», Российской национальной театральной премии «Золотая маска» и престижной европейской балетной премии «Тальони»."
    }
  ]
}

export const HistoryPage: Component<{ onMenuButtonClick: Function, isMenuActive: boolean }> = (props) => {
  const [local] = splitProps(props, ['onMenuButtonClick', 'isMenuActive'])

  return (
    <>
      <MainHeader>История</MainHeader>
      <div class={styles.aboutPage}>
        <Show when={local.isMenuActive}>
          <SiteMenu onCloseClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </Show>
        <div class={styles.menuContainer}>
          <Menu onClick={(state: boolean) => local.onMenuButtonClick(state)} />
        </div>
      </div>
      <div class={styles.contentHeader} style={{'background-image': `url(${mainBg})`}}>
        <div class={styles.mainText}>
          {parseText(texts.mainText)}
        </div>
      </div>
      <div class={styles.cardsContainer}>
        <For each={texts.years}>
          {(text) => (
            <div class={styles.card}>
              <div class={styles.cardYear}>{text.year}</div>
              <div class={styles.cardTextContainer}>
                <div class={styles.cardText}>{parseText(text.text)}</div>
              </div>
            </div>
          )}
        </For>
      </div>
      <div class={styles.aboutPage}>
        <div class={styles.menuContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
};