import {Popover, Transition} from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
  PencilIcon,
  UserIcon,
  MailIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import {Fragment} from 'react'
import {DarkModeToggleDesktop, DarkModeToggleMobile} from './dark-mode-toggle'
import Link from 'next/link'

const solutions = [
  {name: 'Home', href: '/', icon: HomeIcon},
  {
    name: 'Blog',
    href: '/blog',
    icon: PencilIcon,
  },
  {
    name: 'About',
    href: '/about',
    icon: UserIcon,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: MailIcon,
  },
]

function NavLink({href, name}) {
  return (
    <Link href={href}>
      <a className="underlined block whitespace-nowrap text-base font-medium text-slate-800 dark:text-slate-300 ">
        <span className={'link-underline link-underline-black'}>{name}</span>
      </a>
    </Link>
  )
}

export function Nav() {
  return (
    <Popover className="text-slate- relative bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-between md:space-x-10 lg:px-8">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <span className="sr-only">Ovi Stoica</span>
          <Link href={'/'}>
            <a className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none">
              <h1 className="link-underline link-underline-black text-slate-900 dark:text-slate-200 ">
                Ovi Stoica
              </h1>
            </a>
          </Link>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-slate-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-slate-900 dark:text-gray-200">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          <NavLink href={'/blog'} name={'Blog'} />
          <NavLink href={'/about'} name={'About'} />
          <NavLink href={'/contact'} name={'Contact'} />
        </Popover.Group>
        <div className="hidden items-center justify-end md:flex lg:flex-1 ">
          <DarkModeToggleDesktop />
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden">
          <div className="rounded-lg bg-slate-50 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <span className="sr-only">Ovi Stoica</span>
                  <a
                    className="text-primary underlined block whitespace-nowrap text-2xl font-medium text-gray-700 transition focus:outline-none"
                    href="/">
                    <h1 className="link-underline link-underline-black text-gray-700 dark:text-gray-300">
                      Ovi Stoica
                    </h1>
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className={
                      'inline-flex items-center justify-center rounded-md bg-slate-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                    }>
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className=" grid grid-cols-1 gap-7">
                  {solutions.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-900">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900 dark:text-gray-200">
                          {item.name}
                        </div>
                      </a>
                    </Link>
                  ))}
                  <DarkModeToggleMobile />
                  <div className="h-36" />
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      <style jsx global>{
        //language=CSS
        `
          .link-underline {
            border-bottom-width: 0;
            background-image: linear-gradient(transparent, transparent),
              linear-gradient(#fff, #fff);
            background-size: 0 3px;
            background-position: 0 100%;
            background-repeat: no-repeat;
            transition: background-size 0.1s ease-in-out;
          }

          .link-underline-black {
            background-image: linear-gradient(transparent, transparent),
              linear-gradient(to right, rgb(168 85 247), rgb(79 70 229));
          }

          .link-underline:hover {
            background-size: 100% 3px;
            background-position: 0 100%;
          }
        `
      }</style>
    </Popover>
  )
}
