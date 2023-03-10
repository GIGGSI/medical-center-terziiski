import React from 'react'
import Footer from '../Global/Footer/Footer'
import Navbar from '../Global/Navbar/Navbar'
import '../../assets/css/main.css'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout