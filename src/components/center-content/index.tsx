import { ReactNode } from 'react'
import { Space } from 'antd'

type CenterContentProps = {
  children: ReactNode
}

export const CenterContent: React.FC<CenterContentProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
      }}
    >
      <Space
        direction='vertical'
        align='center'
        size='large'
        style={{ textAlign: 'center' }}
      >
        {children}
      </Space>
    </div>
  )
}
