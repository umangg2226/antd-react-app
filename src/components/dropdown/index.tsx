import { Menu, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useDarkMode } from '../../context'

interface DropdownProps {
  options: { label: string; value: string }[]
  onChange: (value: string) => void
  value: string | undefined
}

export const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  value,
}) => {
  const { darkMode } = useDarkMode()

  const handleMenuClick = (e: { key: string }) => {
    onChange(e.key)
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      {options.map((option) => (
        <Menu.Item key={option.value}>{option.label}</Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Space
        style={{
          padding: '6px 12px',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          borderRadius: '6px',
          backgroundColor: darkMode ? '#444' : '#F8F8F9',
        }}
      >
        {options.find((option) => option.value === value)?.label || 'Sort By'}
        <DownOutlined />
      </Space>
    </Dropdown>
  )
}
