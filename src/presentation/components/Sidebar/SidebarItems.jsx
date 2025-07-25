import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import SidebarIcons from './Icons'

export default function SidebarItems({ collapsed }) {
  const location = useLocation()

  const items = [
    { path: '/search', name: 'Search', icon: SidebarIcons.search },
    { path: '/', name: 'Home', icon: SidebarIcons.home },
    { path: '/shows', name: 'TV Shows', icon: SidebarIcons.shows },
    { path: '/movies', name: 'Movies', icon: SidebarIcons.movies },
    { path: '/genres', name: 'Genres', icon: SidebarIcons.genres },
    { path: '/watch-letter', name: 'Watch Letter', icon: SidebarIcons.watchLetter },
  ]

  const renderIcon = (src, alt) => (
    <img src={src} alt={alt} style={{ width: 18 }} />
  )

  return (
    <Menu
      theme="dark"
      mode="vertical"
      selectedKeys={[location.pathname]}
      style={{ borderRight: 0, paddingInline: '8px' }}
    >
      {items.map((item) => (
        <Menu.Item
          key={item.path}
          icon={renderIcon(item.icon, item.name)}
          style={{
            borderRadius: collapsed ? '50px' : '8px',
            display: 'flex',
            fontWeight: 'bold',
            alignItems: 'center',
            paddingInline: '16px',
            marginInline: '0px'
          }}
        >
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}
