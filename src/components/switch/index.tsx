import { Space, Switch } from 'antd'

export const ToggleButton = ({
  label,
  onToggleClick,
  showPersonalUsers,
}: any) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Space style={{ marginRight: '8px' }}>{label}</Space>
      <Switch checked={showPersonalUsers} onChange={(e) => onToggleClick(e)} />
    </div>
  )
}
