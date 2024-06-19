import React from 'react'
import '@/app/style.scss'
import {Outlet} from 'react-router-dom'
import Header from "@/widgets/header/ui/Header";
import Footer from "@/widgets/footer/ui/Footer";







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
