import React from 'react'
import AboutPage from './About/AboutPage'
import HomePage from './Home/HomePage'
import {Layout} from './Navbar/Navbar'

import logoHeader from '../assets/imgs/1 - Header/logo_b.png'

export default function MainPage() {
    return (
        <React.Fragment>
            <div className="header-background">
                <Layout logoHeader={logoHeader}/>
                <HomePage/>
            </div>
            <AboutPage/>
        </React.Fragment>
    )
}
