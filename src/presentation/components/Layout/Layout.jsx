import { useState } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import { sidebarCollapsedWidth } from '../../consts'

const { Content } = Layout

export default function AppLayout() {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar 
                collapsed={collapsed} 
                setCollapsed={setCollapsed} 
            />

            <Layout style={{ marginLeft: collapsed ? 0 : 0 }}>
                <Content style={{ marginLeft: sidebarCollapsedWidth}}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
