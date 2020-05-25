import React from 'react'
import { Route, Link} from 'react-router-dom'
import { Layout, Menu, ConfigProvider} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

//import Employ from './employee'

import './App.css'

const { Header, Content, Footer} = Layout

const App = ({match}: any) => {
    let defaultKey = match.url.replace('/','') || 'employee'
    return <ConfigProvider locale={zh_CN}>
            <Layout>
                <Header>
                    <Menu
                        theme='dark'
                        mode='horizontal'
                        defaultOpenKeys={[defaultKey]}
                        className='menu'
                    >
                    </Menu>
                </Header>
            </Layout>
           </ConfigProvider>
}

export default App;