import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from '@/providers'
import Root from '@/root'

import '@/styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Root />
    </ThemeProvider>
  </StrictMode>,
)
