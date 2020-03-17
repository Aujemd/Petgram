import React from 'react'
import {GlobalStyle} from './styles/GlobalStyles'
import {Logo} from './components/Logo/index'
import {Home} from './pages/Home'
import {Router} from '@reach/router'
import {Detail} from './pages/Detail'
import {Favs} from './pages/Favs'
import {User} from './pages/User'
import {NotRegisteredUser} from './pages/NotRegisteredUser'
import {NavBar} from './components/NavBar'
import Context from './Context'

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
        <Context.Consumer>
            {
                ({isAuth}) => 
                isAuth ? 
                <Router>
                    <Favs path='/favs'/>
                    <User path='/user'/>
                </Router>
                :                
                <Router>
                    <NotRegisteredUser path='/favs'></NotRegisteredUser>
                    <NotRegisteredUser path='/user'></NotRegisteredUser>
                </Router>
            }
        </Context.Consumer>
        <NavBar></NavBar>
    </>
    )
}

