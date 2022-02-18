import * as React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import appleTouch from '../public/apple-touch-icon.png'
import largeFav from '../public/favicon-32x32.png'
import smallFav from '../public/favicon-16x16.png'
// @ts-ignore

export default class MyDocument extends Document {
  render() {
    return (
      <Html className={'font-sans'}>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={'/apple-touch-icon.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={'/favicon-32x32.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={'/favicon-16x16.png'}
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="bg-slate-50 text-slate-500 antialiased dark:bg-slate-900 dark:text-slate-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
