
import React from 'react'
import { NextPage } from 'next'

import styles from './styles.module.scss'
import RoundButton from '../components/RoundButton'

interface Props { }

const StylePage: NextPage<Props> = () => {
  return (
    <div>
      <h1>RoundButton</h1>
      <RoundButton label='a button' />
    </div>
  )
}

export default StylePage