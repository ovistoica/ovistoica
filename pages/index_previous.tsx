import {classNames} from '@/lib/utils/styles'
import Image from 'next/image'
import flash from '../public/flash-dynamic-gradient.png'
import Layout from '../components/layout'
import Link from 'next/link'

function HeroSection() {
  return (
    <div className="min-h-full lg:relative">
      <div className="lg:max-h-2xl relative mx-auto h-48 w-48 md:h-72 md:w-72 lg:absolute lg:inset-y-0 lg:right-0 lg:h-1/2 lg:w-1/2 lg:max-w-3xl lg:pt-2">
        <Image src={flash} layout="responsive" alt="Flash" />
      </div>
      <div className="lg:ext-left mx-auto w-full max-w-7xl pt-4 text-center lg:pb-20 lg:pt-24 ">
        <div className="px-4 sm:px-8 lg:w-2/3 xl:pr-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-left lg:text-6xl">
            <span className="text-black dark:text-white xl:inline">
              I help people build
            </span>
            <span className="block text-indigo-800 dark:text-indigo-200">
              quality software
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-900 dark:text-indigo-200 sm:max-w-3xl lg:mx-0 lg:w-4/5 lg:text-left">
            Hi, I'm Ovi Stoica! I help people and startups build quality
            software and I write about technology and startups
          </p>
          <div className="mt-10  sm:flex sm:max-w-none sm:justify-center lg:flex lg:justify-start">
            <div className="space-y-4 duration-200  sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 ">
              <a
                href={'https://calendly.com/ovidiu-stoica/chat'}
                className={classNames(
                  'flex items-center justify-center rounded-md border border-transparent',
                  'bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8',
                )}>
                Let's chat
              </a>
              <Link href="/blog">
                <a
                  className={classNames(
                    'flex items-center justify-center rounded-md px-4 py-3 text-base font-medium text-white transition-all sm:px-8',
                    'bg-gradient-to-r from-purple-500 to-indigo-600 hover:bg-gradient-to-l',
                  )}>
                  Read the Blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  return (
    <Layout title={'Ovi Stoica | Homepage'}>
      <HeroSection />
    </Layout>
  )
}
