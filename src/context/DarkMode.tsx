import {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react'

interface DarkModeContextType {
  darkMode: boolean
  toggleDarkMode: () => void
}

const initialDarkMode = localStorage.getItem('darkMode') === 'true'

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
)

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(initialDarkMode)

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const newValue = !prev
      localStorage.setItem('darkMode', String(newValue))
      return newValue
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext)

  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }

  return context
}
