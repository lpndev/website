import type { ThemeToggleProps } from '@/types'

import { useTheme } from '@/providers'
import { Moon, Sun } from '@phosphor-icons/react'

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button className={`outline-none ${className}`} onClick={toggleTheme}>
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
