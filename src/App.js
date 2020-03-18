import React, {useContext} from 'react'
import {GlobalStyle} from './styles/GlobalStyles'
import {Logo} from './components/Logo/index'
import {Home} from './pages/Home'
import {Router, Redirect} from '@reach/router'
import {Detail} from './pages/Detail'
import {Favs} from './pages/Favs'
import {User} from './pages/User'
import {NotRegisteredUser} from './pages/NotRegisteredUser'
import {NavBar} from './components/NavBar'
import {Context} from './Context'
import {NotFound} from './pages/NotFound'

export const App = () => {
    
    const {isAuth} = useContext(Context)
    return(    
    <>
        <GlobalStyle/>
        <Logo/>
        <Router>
            <NotFound default />
            <Home path='/'/>
            <Home path='/pet/:id'/>
            <Detail path='/detail/:detailId'/>
            {!isAuth && <NotRegisteredUser path='/login'/>}
            {!isAuth && <Redirect from='/favs' to='/login' noThrow/>}
            {!isAuth && <Redirect from='/user' to='/login' noThrow/>}
            {isAuth && <Redirect from='/login' to = '/'/>}
            <Favs path='/favs'/>
            <User path='/user'/>
        </Router>

        <NavBar></NavBar>
    </>
    )
}

