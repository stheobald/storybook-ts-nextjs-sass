import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import styles from '../components/MenuBar/styles.module.scss'

class MyApp extends App {
  render() {

    const { Component, pageProps, router } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>Repro</title>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="stylesheet" type="text/css" href="/styles/reset.css" />
          <link rel="stylesheet" type="text/css" href="/styles/rbm.css" />
          <link rel="stylesheet" type="text/css" href="/styles/form.css" />
          <link rel="stylesheet" type="text/css" href="/styles/toggle.css" />
        </Head>
        <Component {...pageProps} router={router} />
      </React.Fragment>
    )
  }
}


export default MyApp