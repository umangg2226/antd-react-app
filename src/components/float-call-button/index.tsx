import React from 'react'
import { FloatButton } from 'antd'
import { PhoneOutlined } from '@ant-design/icons'

export const FloatingCallButton: React.FC = () => {
  return (
    <FloatButton
      tooltip={<div>Call</div>}
      type='primary'
      shape='circle'
      icon={<PhoneOutlined />}
      onClick={() => {}}
    />
  )
}
