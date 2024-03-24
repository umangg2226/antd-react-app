import { useRef, useCallback } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useKeyboardShortcut } from '../../utils'

const isMacOS = window.navigator.platform.toUpperCase().includes('MAC')

const commandKey = isMacOS ? '⌘' : 'Ctrl'

const shortcutMessage = `(${commandKey} + K)`

export const SearchInput = ({
  onChange,
  value,
}: {
  onChange: (value: string) => void
  value: string
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const focusInputRef = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  useKeyboardShortcut('k', focusInputRef)

  return (
    <Input
      ref={inputRef as any}
      style={{ borderRadius: '6px', width: '100%' }}
      placeholder={`Search... ${shortcutMessage}`}
      prefix={<SearchOutlined />}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
