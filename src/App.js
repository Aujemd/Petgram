import React from 'react'
import {GlobalStyle} from './styles/GlobalStyles'
import {Logo} from './components/Logo/index'
import {Home} from './pages/Home'
import {Router} from '@reach/router'
import {Detail} from './pages/Detail'
import {NavBar} from './components/NavBar'
export const App = () => {   
    return(    
    <>
        <GlobalStyle/>
        <Logo/>
        <Router>
            <Home path='/'/>
            <Home path='/pet/:id'/>
            <Detail path='/detail/:detailId'/>
        </Router>
        <NavBar></NavBar>
    </>
    )
}

