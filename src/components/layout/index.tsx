import React, { ReactNode, useEffect, useState, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  DesktopOutlined,
  TeamOutlined,
  MessageOutlined,
  VideoCameraOutlined,
  PhoneOutlined,
  ContactsOutlined,
  MailOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  MoonOutlined,
  SunOutlined,
  MobileOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button, Badge, Avatar, Typography } from 'antd'
import { useDarkMode, useDrawer } from '../../context'
import { theme } from 'antd'
import useMediaQuery from 'use-media-antd-query'
import { useKeyboardShortcut } from '../../utils'

const { useToken } = theme

const { Header, Content, Sider } = Layout

type MenuItem = {
  key: string
  label: ReactNode
  icon: ReactNode
  to: string
  children?: MenuItem[]
}

const getItem = (
  label: ReactNode,
  to: string,
  icon: ReactNode,
  children?: MenuItem[]
): MenuItem => {
  return {
    key: to,
    icon,
    children,
    label,
    to,
  }
}

const mainItems: MenuItem[] = [
  getItem('Team', '/', <TeamOutlined />),
  getItem('Chat', '/chat', <MessageOutlined />),
  getItem('Meet', '/meet', <VideoCameraOutlined />),
  getItem('Call', '/call', <PhoneOutlined />),
  getItem('Panel', '/panel', <DesktopOutlined />),
  getItem('Contacts', '/contacts', <ContactsOutlined />),
  getItem('Voicemail', '/voicemail', <MailOutlined />),
  getItem('Settings', '/settings', <SettingOutlined />),
]

const bottomItems: MenuItem[] = [
  getItem('Web App', '/web-app', <DesktopOutlined />),
  getItem('Mobile App', '/mobile-app', <MobileOutlined />),
]

type AppLayoutProps = {
  children: ReactNode
}

const PageTitle: React.FC<{
  title: string | undefined
  backgroundColor: string
}> = ({ title, backgroundColor }) => {
  return (
    <div style={{ padding: '10px 12px', backgroundColor }}>
      <Typography style={{ fontSize: '16px', fontWeight: 600 }}>
        {title}
      </Typography>
    </div>
  )
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [title, setTitle] = useState<string | undefined>('')
  const { token } = useToken()
  const { darkMode, toggleDarkMode } = useDarkMode()
  const { isDrawerOpen, toggleDrawer } = useDrawer()
  const location = useLocation()

  const colSize = useMediaQuery()

  useKeyboardShortcut('b', toggleDrawer)

  useEffect(() => {
    const pathName = location.pathname

    const name = [...mainItems, ...bottomItems].find(
      (s) => s.key === pathName
    )?.label

    setTitle(name as string)
    document.title = `ASTPP | ${name}`
  }, [location.pathname])

  const isMobile = useMemo(() => {
    return ['sm', 'xs'].includes(colSize)
  }, [colSize])

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        collapsed={!isDrawerOpen}
        onCollapse={toggleDrawer}
        style={{ backgroundColor: token.colorPrimaryBg }}
        trigger={null}
        collapsible
        collapsedWidth={isMobile ? 0 : 80}
        width={isMobile ? 160 : 220}
      >
        <div>
          <img src='./ASTPP.png' alt='App Logo' className='logo' />
          <Menu
            style={{
              backgroundColor: token.colorPrimaryBg,
              padding: '0px 16px',
            }}
            mode='inline'
            selectedKeys={[location.pathname]}
          >
            {mainItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.to ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </Menu.Item>
            ))}
          </Menu>
        </div>
        <Menu
          color='secondary'
          style={{ backgroundColor: token.colorPrimaryBg, padding: '0px 16px' }}
          mode='inline'
          selectedKeys={[location.pathname]}
        >
          {bottomItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.to}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className='header'
          style={{
            borderBottom: `1px solid ${
              darkMode ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,0.1)'
            }`,
          }}
        >
          <Button
            type='text'
            icon={!isDrawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleDrawer}
            style={{ fontSize: '16px', width: 40, height: 40 }}
          />
          <div>
            <Button
              type='text'
              shape='circle'
              icon={darkMode ? <SunOutlined /> : <MoonOutlined />}
              style={{ fontSize: '16px', marginRight: 6, padding: 0 }}
              onClick={toggleDarkMode}
            />
            <Button
              type='text'
              shape='circle'
              icon={<MenuOutlined />}
              style={{ fontSize: '16px', marginRight: 6, padding: 0 }}
            />

            <Button shape='circle' type='text' style={{ padding: 0 }}>
              <Badge dot status='success'>
                <Avatar
                  shape='circle'
                  src='https://robohash.org/Edwina.png?set=set4'
                  size='small'
                />
              </Badge>
            </Button>
          </div>
        </Header>
        <PageTitle
          title={title}
          backgroundColor={darkMode ? token.colorPrimaryBg : '#fff'}
        />
        <Content style={{ padding: '14px', overflow: 'auto' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
