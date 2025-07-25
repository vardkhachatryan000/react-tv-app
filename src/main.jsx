import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US'
import '@ant-design/v5-patch-for-react-19';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sidebarBackgroud } from './presentation/consts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        locale={enUS}
        theme={{
          token: {
            colorPrimary: '#fff',
            colorBgContainer: '#000',
            borderRadius: 8,
            colorText: '#fff',
          },
          components: {
            Layout: {
              headerBg: '#000',
              siderBg: '#000',
              bodyBg: '#000',
              itemColor: '#fff',
            },
            Menu: {
              bodyBg: sidebarBackgroud,
              itemColor: '#fff',
              darkItemBg: sidebarBackgroud,
              darkItemHoverBg: '#3b486d',
              darkItemSelectedBg: '#3b486d',
              darkItemColor: '#fff',
              darkItemSelectedColor: '#fff',
              iconSize: 24,
            },
            Button: {
              primaryColor: '#000',
              fontWeight: 'bold',
              defaultBg: "#2224e1",
              defaultBorderColor: "#2224e1",
              defaultColor: "#fff",
              defaultHoverBg: 'transparent',
              defaultHoverBorderColor: '#2224e1',
              defaultHoverColor: '#2224e1',
            }
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)
