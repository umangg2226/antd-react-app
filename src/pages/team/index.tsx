import { useState, useCallback, useEffect, useMemo } from 'react'
import { Spin, Row, Col, theme } from 'antd'
import mockUsers from './mock.json'
import { sleep } from '../../utils'
import { UserListing } from './UserListing'
import { useDarkMode } from '../../context'
import {
  ToggleButton,
  SearchInput,
  CustomDropdown,
  CenterContent,
  FloatingCallButton,
} from '../../components'

const { useToken } = theme

export interface User {
  id: number
  name: string
  phone: string
  image?: string
  isOnline?: boolean
  isFav?: boolean
}

const opts = [
  { label: 'None', value: 'None' },
  { label: 'Name', value: 'name' },
]

const TeamHeader: React.FC<any> = ({
  onSearchChange,
  searchValue,
  showPersonalUsers,
  onToggleClick,
  sortBy,
  setSortBy,
}) => {
  const { darkMode } = useDarkMode()
  const { token } = useToken()
  return (
    <div
      style={{
        padding: '6px',
        backgroundColor: darkMode ? token.colorPrimaryBg : '#fff',
        marginBottom: '18px',
        borderRadius: '6px',
      }}
    >
      <Row gutter={[16, 16]} align='middle'>
        <Col xs={24} sm={12} lg={6}>
          <SearchInput value={searchValue} onChange={onSearchChange} />
        </Col>
        <Col xs={24} sm={12} lg={18}>
          <Row align={'middle'} justify='end' gutter={20}>
            <Col>
              <ToggleButton
                label='Personal'
                showPersonalUsers={showPersonalUsers}
                onToggleClick={onToggleClick}
              />
            </Col>
            <Col>
              <CustomDropdown
                options={opts}
                value={sortBy}
                onChange={setSortBy}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

const Team = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showPersonal, setShowPersonal] = useState(false)
  const [sortBy, setSortBy] = useState<'name' | '' | undefined>()

  useEffect(() => {
    fetchMockUsers()
  }, [])

  const fetchMockUsers = async () => {
    await sleep(Math.floor(Math.random() * (1500 - 500 + 1)) + 500)
    setUsers([...mockUsers])
    setIsLoading(false)
  }

  const filteredUsers = useMemo(() => {
    let filtered = users
      .filter((each) => {
        if (showPersonal) return each.isFav
        else return true
      })
      .filter((each) => {
        if (searchTerm.trim()) {
          return each.name
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase())
        }
        return true
      })

    if (sortBy) {
      filtered = filtered.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1
        if (a[sortBy] > b[sortBy]) return 1
        return 0
      })
    }

    return filtered
  }, [searchTerm, users, showPersonal, sortBy])

  const toggleStar = useCallback((id: number) => {
    setUsers((prev) => {
      return prev.map((u) => {
        if (u.id === id) {
          return {
            ...u,
            isFav: !u.isFav,
          }
        }
        return u
      })
    })
  }, [])

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value)
  }, [])

  const handleToggleChange = useCallback((value: boolean) => {
    setShowPersonal(value)
  }, [])

  const handleSortByChange = useCallback((value: 'name' | '' | undefined) => {
    setSortBy(value)
  }, [])

  if (isLoading)
    return (
      <CenterContent>
        <Spin />
      </CenterContent>
    )

  return (
    <>
      <TeamHeader
        searchValue={searchTerm}
        onSearchChange={handleSearchChange}
        onToggleClick={handleToggleChange}
        showPersonalUsers={showPersonal}
        sortBy={sortBy}
        setSortBy={handleSortByChange}
      />
      <UserListing users={filteredUsers} toggleStar={toggleStar} />
      <FloatingCallButton />
    </>
  )
}

export default Team
