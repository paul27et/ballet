import { Link } from "solid-app-router"
import { Component, createSignal, For, Match, splitProps, Switch } from "solid-js"
import arrowLeft from 'assets/arrowLeft.svg'
import arrowRight from 'assets/arrowRight.svg'
import styles from '../LandingPage.module.css'
import { CalendarTooltip } from "./CalendarTooltip"

const calendarMobile = [
  {
    "startDate": "1",
    "endDate": "6",
    "month": "ФЕВ",
    "plays": [
      {
        "date": "04",
        "time": "ПТ - 19:00",
        "name": "Щелкунчик",
        "subname": "Александрйиский театр"
      },
      {
        "date": "05",
        "time": "CБ - 18:00",
        "name": "Жизель",
        "subname": "Мариинский театр, филиал в Республике Северная Осетия - Алания"
      }
    ]
  },
  {
    "startDate": "7",
    "endDate": "12",
    "month": "ФЕВ",
    "plays": [
      {
        "date": "08",
        "time": "ПТ - 19:00",
        "name": "Щелкунчик",
        "subname": "Александрйиский театр"
      },
      {
        "date": "11",
        "time": "CБ - 18:00",
        "name": "Жизель",
        "subname": "Мариинский театр, филиал в Республике Северная Осетия - Алания"
      }
    ]
  }
]

export const Calendar: Component<{ month: string, setMonth: Function }> = (props) => {
  const [local] = splitProps(props, ['month', 'setMonth'])
  const [getPlaysToShow, setPlaysToShow] = createSignal(0)
  const isMobile = window.innerWidth / window.innerHeight < 0.75;

  const onPrevClick = () => {
    if (getPlaysToShow() > 0) {
      setPlaysToShow(getPlaysToShow() - 1)
    }
  }

  const onNextClick = () => {
    if (getPlaysToShow() < calendarMobile.length - 1) {
      setPlaysToShow(getPlaysToShow() + 1)
    }
  } 

  if (isMobile) {
    return (
      <>
        <div class={`${styles.titleContainer} ${styles.month}`} data-aos="fade">
          <img class={`${styles.mobileArrow} ${getPlaysToShow() === 0 && styles.arrowInactive}`} src={arrowLeft} alt= "" onclick={onPrevClick} />
          <div class={styles.title}>
            <div class={styles.titleNumber}>{calendarMobile[getPlaysToShow()].startDate}</div>
            {calendarMobile[getPlaysToShow()].month + " - "} 
            <div class={styles.titleNumber}>{calendarMobile[getPlaysToShow()].endDate}</div>
            {calendarMobile[getPlaysToShow()].month}
          </div>
          <img class={`${styles.mobileArrow} ${getPlaysToShow() === calendarMobile.length - 1 && styles.arrowInactive}`} src={arrowRight} alt= "" onclick={onNextClick} />
        </div>
        <For each={calendarMobile[getPlaysToShow()].plays}>
          {(play) => (
            <div class={`${styles.rowContainer} ${styles.month}`} data-aos="fade">
              <div class={styles.dateContainer}>
                <div class={styles.date}>
                  {play.date}
                </div>
                <div class={styles.time} >
                  {play.time}
                </div>
              </div>
              <div class={styles.nameContainer}>
                <div class={styles.name}>
                  {play.name}
                </div>
                <div class={styles.subname} >
                  {play.subname}
                </div>
              </div>
            </div>
          )}
        </For>
        <div class={styles.borderMobile} data-aos="fade">
        </div>
      </>
    )
  }

  return (
    <div class={styles.table}>
      <div class={`${styles.titleContainer} ${styles.month}`} data-aos="fade-up">
        <img class={`${local.month === 'Февраль' && styles.arrowInactive}`} src={arrowLeft} alt= "" onclick={() => local.setMonth('Февраль')} />
        <div class={styles.title}>{local.month}</div>
        <img class={`${local.month === 'Март' && styles.arrowInactive}`} src={arrowRight} alt= "" onclick={() => local.setMonth('Март')} />
      </div>
      <Switch>
        <Match when={local.month === 'Февраль'}>
          <div class={`${styles.flexTable} ${styles.header}`} data-aos="fade-up">
            <div class={`${styles.flexRow} ${styles.first}`} role="columnheader">ПН</div>
            <div class={styles.flexRow} role="columnheader">ВТ</div>
            <div class={styles.flexRow} role="columnheader">СР</div>
            <div class={styles.flexRow} role="columnheader">ЧТ</div>
            <div class={styles.flexRow} role="columnheader">ПТ</div>
            <div class={styles.flexRow} role="columnheader">СБ</div>
            <div class={styles.flexRow} role="columnheader">ВС</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup" data-aos="fade-up">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell"></div>
            <div class={styles.flexRow} role="cell">1</div>
            <div class={styles.flexRow} role="cell">2</div>
            <div class={styles.flexRow} role="cell">3</div>
            <div class={styles.flexRow} role="cell">
              <CalendarTooltip id="4feb" placement="left">
                {/* <Link class={styles.tableLink} href="/ballet/affiche">4</Link> */}
                <div class={styles.tableLink}>4</div>
              </CalendarTooltip>
            </div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">5</Link></div>
            <div class={styles.flexRow} role="cell">6</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup" data-aos="fade-up">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell">7</div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">8</Link></div>
            <div class={styles.flexRow} role="cell">9</div>
            <div class={styles.flexRow} role="cell">10</div>
            <div class={styles.flexRow} role="cell">11</div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">12</Link></div>
            <div class={styles.flexRow} role="cell">13</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup" data-aos="fade-up">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">14</Link></div>
            <div class={styles.flexRow} role="cell">15</div>
            <div class={styles.flexRow} role="cell">16</div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">17</Link></div>
            <div class={styles.flexRow} role="cell">18</div>
            <div class={styles.flexRow} role="cell">19</div>
            <div class={styles.flexRow} role="cell">20</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup" data-aos="fade-up">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell">21</div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">22</Link></div>
            <div class={styles.flexRow} role="cell">23</div>
            <div class={styles.flexRow} role="cell">24</div>
            <div class={styles.flexRow} role="cell">25</div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">26</Link></div>
            <div class={styles.flexRow} role="cell">27</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup" data-aos="fade-up">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">28</Link></div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
          </div>
        </Match>
        <Match when={local.month === 'Март'}>
          <div class={`${styles.flexTable} ${styles.header}`} data-aos="fade-up">
            <div class={`${styles.flexRow} ${styles.first}`} role="columnheader">ПН</div>
            <div class={styles.flexRow} role="columnheader">ВТ</div>
            <div class={styles.flexRow} role="columnheader">СР</div>
            <div class={styles.flexRow} role="columnheader">ЧТ</div>
            <div class={styles.flexRow} role="columnheader">ПТ</div>
            <div class={styles.flexRow} role="columnheader">СБ</div>
            <div class={styles.flexRow} role="columnheader">ВС</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup" data-aos="fade-up">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell"></div>
            <div class={styles.flexRow} role="cell">1</div>
            <div class={styles.flexRow} role="cell">2</div>
            <div class={styles.flexRow} role="cell">3</div>
            <div class={styles.flexRow} role="cell">4</div>
            <div class={styles.flexRow} role="cell">5</div>
            <div class={styles.flexRow} role="cell">6</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup" data-aos="fade-up">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">7</Link></div>
            <div class={styles.flexRow} role="cell">8</div>
            <div class={styles.flexRow} role="cell">9</div>
            <div class={styles.flexRow} role="cell">10</div>
            <div class={styles.flexRow} role="cell">11</div>
            <div class={styles.flexRow} role="cell">12</div>
            <div class={styles.flexRow} role="cell">13</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup" data-aos="fade-up">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell">14</div>
            <div class={styles.flexRow} role="cell">15</div>
            <div class={styles.flexRow} role="cell">16</div>
            <div class={styles.flexRow} role="cell">17</div>
            <div class={styles.flexRow} role="cell">18</div>
            <div class={styles.flexRow} role="cell">19</div>
            <div class={styles.flexRow} role="cell">20</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup" data-aos="fade-up">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">21</Link></div>
            <div class={styles.flexRow} role="cell"><Link class={styles.tableLink} href="/ballet/affiche">22</Link></div>
            <div class={styles.flexRow} role="cell">23</div>
            <div class={styles.flexRow} role="cell">24</div>
            <div class={styles.flexRow} role="cell">25</div>
            <div class={styles.flexRow} role="cell">26</div>
            <div class={styles.flexRow} role="cell">27</div>
          </div>
          <div class={`${styles.flexTable} ${styles.row}`} role="rowgroup" data-aos="fade-up">
            <div class={`${styles.flexRow} ${styles.first}`} role="cell">28</div>
            <div class={styles.flexRow} role="cell">29</div>
            <div class={styles.flexRow} role="cell">30</div>
            <div class={styles.flexRow} role="cell">31</div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
            <div class={styles.flexRow} role="cell"></div>
          </div>
        </Match>
      </Switch>
    </div>
  )
}