import {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react'

interface DrawerContextType {
  isDrawerOpen: boolean
  toggleDrawer: () => void
}

const initialIsDrawerOpen = localStorage.getItem('isDrawerOpen')
  ? localStorage.getItem('isDrawerOpen') === 'true'
  : true

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(initialIsDrawerOpen)

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((prev) => {
      const newValue = !prev
      localStorage.setItem('isDrawerOpen', String(newValue))
      return newValue
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('isDrawerOpen', String(isDrawerOpen))
  }, [isDrawerOpen])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawer = (): DrawerContextType => {
  const context = useContext(DrawerContext)

  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider')
  }

  return context
}
