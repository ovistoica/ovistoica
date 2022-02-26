declare global {
  interface Window {
    disqus_config: Function
    DISQUS?: {reset: ({reload}: {reload: boolean}) => void} | undefined
  }
}
