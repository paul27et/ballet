import { Component, onCleanup, onMount, splitProps } from "solid-js"
// @ts-ignore
import { tooltips } from 'database/tooltips.json'
import styles from '../LandingPage.module.css'
import { OverlayTrigger, Popover } from "solid-bootstrap"

const CalendarPopover = ({ data }) => {

  onMount(() => {
    document.getElementById('root').classList.add('shadowed')
    document.body.classList.add('shadowed')
  })

  onCleanup(() => {
    document.getElementById('root').classList.remove('shadowed')
    document.body.classList.remove('shadowed')
  })

  return (
    <Popover id="calendarPopover">
      <Popover.Header>
        <div class={styles.tooltipTitle}>
          <div class={styles.tooltipNumber}>
            {data.number}
          </div>
          <div class={styles.tooltipMonth}>
            {data.month}
          </div>
        </div>
        <div class={styles.tooltipSubtitle}>
          {data.day}
        </div>
      </Popover.Header>
      <Popover.Body>
        <div class={styles.tooltipContent}>
          <div>
            <img class={styles.tooltipImage} src={data.image} alt="" />
          </div>
          <div class={styles.tooltipDescription}>
            <div class={styles.tooltipContentTitle}>{data.name}</div>
            <div class={styles.tooltipContentSubtitle}>{data.place}</div>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  )
}

export const CalendarTooltip: Component<{ id?: string, placement: string }> = (props) => {
  const [local] = splitProps(props, ['id', 'placement'])
  const data = tooltips.find((tooltip: { id: string }) => tooltip.id === local.id)

  return (
    <OverlayTrigger
      trigger="click"
      delay={{ show: 250, hide: 400 }}
      overlay={<CalendarPopover data={data} />}
      placement={local.placement}
    >
      {props.children}
    </OverlayTrigger>
  )
}