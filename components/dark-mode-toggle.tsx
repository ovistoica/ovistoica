import * as React from 'react'
import {useTheme} from 'next-themes'
import {classNames} from '../utils/styles'
import {MoonIcon, SunIcon} from '@heroicons/react/outline'

export const DarkModeToggleDesktop: React.FC = () => {
  const [mounted, setMounted] = React.useState(false)
  const {theme, setTheme} = useTheme()
  React.useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="bg-trueGray-200 dark:bg-trueGray-800 h-10 w-10 rounded p-3"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {mounted && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className={classNames(
            'h-6 w-6 text-gray-700 dark:text-gray-200',
            'hover:text-indigo-800 dark:hover:text-yellow-500',
          )}>
          {theme === 'dark' ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
      )}
    </button>
  )
}

export const DarkModeToggleMobile: React.FC = () => {
  const [mounted, setMounted] = React.useState(false)
  const {theme, setTheme} = useTheme()
  React.useEffect(() => setMounted(true), [])

  return (
    mounted && (
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="inline-flex items-center justify-center rounded-3xl rounded-md border border-2 border-slate-300 hover:border-slate-800 hover:border-3 dark:border-slate-600 dark:hover:border-slate-300 duration-300 px-4 py-2 text-sm font-bold text-slate-900 shadow-sm focus:outline-none dark:text-slate-200"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? (
          <SunIcon className={'h-8 w-8 pr-2'} />
        ) : (
          <MoonIcon className={'h-8 w-8 pr-2'} />
        )}
        Switch to {theme === 'dark' ? 'light' : 'dark'} mode
      </button>
    )
  )
}
