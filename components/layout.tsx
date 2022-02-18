import React, {ReactNode} from 'react'
import Head from 'next/head'
import {Footer} from './footer'
import {Nav} from './nav'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => (
  <div className={'grid min-h-screen grid-cols-1'}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav />
    </header>
    <main className="container mx-auto bg-slate-50 transition-all dark:bg-slate-900 sm:px-6 lg:max-w-7xl lg:px-8">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
