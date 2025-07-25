import { Layout } from 'antd'
import { Avatar } from 'antd';
import { sidebarCollapsedWidth, sidebarActiveWidth, sidebarBackgroud } from '../../consts'
import SidebarItems from './SidebarItems'

const { Sider } = Layout

export default function Sidebar({ collapsed, setCollapsed }) {
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            collapsedWidth={sidebarCollapsedWidth}
            trigger={null}
            onMouseEnter={() => setCollapsed(false)}
            onMouseLeave={() => setCollapsed(true)}
            width={'50vw'}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                zIndex: 1000,
                background: sidebarBackgroud,
                paddingTop: '100px'
            }}
        >
            <div
                style={{ 
                    width: collapsed ? sidebarCollapsedWidth : sidebarActiveWidth,
                    transition: "all 0.3s ease",
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%' 
                }}>
                {collapsed ? null : (
                    <div className='flex items-center gap-4 px-3 mb-4'>
                        <Avatar size={70} src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?_gl=1*1fzncyj*_ga*Nzk2NTQyNTI2LjE3NTM0NzY0ODA.*_ga_8JE65Q40S6*czE3NTM0NzY0NzkkbzEkZzEkdDE3NTM0NzY0ODQkajU1JGwwJGgw" />
                        <span className='text-xl'>Daniel</span>
                    </div>
                )}

                <SidebarItems collapsed={collapsed} />

                {collapsed ? null : <div className='flex-1 flex flex-col justify-end px-3 mb-8'>
                    <div className='flex flex-col justify-end items-start gap-4 text-[#858688]'>
                        <div className='text-lg uppercase'>Language</div>
                        <div className='text-lg uppercase'>Get help</div>
                        <div className='text-lg uppercase'>Exit</div>
                    </div>
                </div>}
            </div>
        </Sider>
    )
}
