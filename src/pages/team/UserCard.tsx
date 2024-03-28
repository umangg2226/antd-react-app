import { Card, Avatar, Space, Badge } from 'antd'
import {
  PhoneOutlined,
  StarOutlined,
  StarFilled,
  VideoCameraOutlined,
  MessageOutlined,
  MoreOutlined,
} from '@ant-design/icons'

interface UserCardProps {
  id: number
  name: string
  mobile: string
  avatar?: string
  isOnline?: boolean
  isFav?: boolean
  toggleStar: (id: number) => void
}

const { Meta } = Card

const UserCard: React.FC<UserCardProps> = ({
  id,
  name,
  mobile,
  avatar,
  isOnline,
  isFav,
  toggleStar,
}) => (
  <Card
    actions={[
      <PhoneOutlined key='call' />,
      <VideoCameraOutlined key='video' />,
      <MessageOutlined key='chat' />,
      isFav ? (
        <StarFilled
          onClick={() => toggleStar(id)}
          style={{ color: '#FF9736' }}
        />
      ) : (
        <StarOutlined onClick={() => toggleStar(id)} />
      ),
      <MoreOutlined key='more' />,
    ]}
    styles={{
      title: {
        marginBottom: '0',
      },
      actions: {
        borderTop: '0',
      },
    }}
  >
    <Meta
      avatar={
        <Space size={40}>
          <Badge dot status={isOnline ? 'success' : 'error'} offset={[-2, 30]}>
            <Avatar shape='circle' src={avatar} />
          </Badge>
        </Space>
      }
      title={name}
      description={mobile}
    />
  </Card>
)

export { UserCard }
