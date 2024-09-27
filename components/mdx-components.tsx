/* eslint-disable react/display-name */
import {useMemo} from 'react'
import {getMDXComponent} from 'mdx-bundler/client'
import Image from 'next/image'
import {Link} from './link'
import {TOCInline} from './toc-inline'
import Pre from './pre'
import {BlogNewsletterForm} from './newsletter-form'

export const MDXComponents = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({components, layout, ...rest}) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({layout, mdxSource, ...rest}) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
