import React from 'react'
import '@/app/style.scss'
import {Outlet} from 'react-router-dom'

import {Footer} from "@/widgets/footer";
import {Header} from "@/widgets/header";


const Layout = () => {
    return (
        <div className="root-wrapper">
            <Header/>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </div>
    )
}

export default Layout
