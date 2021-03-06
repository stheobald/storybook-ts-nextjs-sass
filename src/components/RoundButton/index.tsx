import React from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'

interface Props { label: string, href?: string, action?: Function }

const RoundButton: React.FunctionComponent<Props> = (props) => {
  const router = useRouter()
  const { label, href, action } = props

  const doTheThing = (e) => {
    e.preventDefault()
    if (href) {
      router.push(href)
    }
    if (action) action()
  }

  return <div className={styles.Rectangle}
    onClick={doTheThing}  >
    <p className={styles.LabelText}>{label.toUpperCase()}</p>
  </div>
}

export default RoundButton
