import * as React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body className="bg-slate-50 text-slate-500 antialiased dark:bg-slate-900 dark:text-slate-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
