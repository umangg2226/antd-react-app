import { Row, Col, Typography } from 'antd'
import { User } from '.'
import { UserCard } from './UserCard'
import { CenterContent } from '../../components'

interface UserListingProps {
  users: User[]
  toggleStar: (id: number) => void
}

const UserListing: React.FC<UserListingProps> = ({ users, toggleStar }) => {
  const colSpanMap = {
    xs: 24,
    sm: 24,
    md: 8,
    lg: 6,
    xl: 4,
    xxl: 4,
  }

  if (!users.length) {
    return (
      <CenterContent>
        <Typography>No users found.</Typography>
      </CenterContent>
    )
  }

  return (
    <Row gutter={[16, 16]}>
      {users.map((user) => (
        <Col key={user.id} {...colSpanMap}>
          <UserCard
            id={user.id}
            name={user.name}
            mobile={user.phone}
            avatar={user.image}
            isOnline={user.isOnline}
            isFav={user.isFav}
            toggleStar={toggleStar}
          />
        </Col>
      ))}
    </Row>
  )
}

export { UserListing }
