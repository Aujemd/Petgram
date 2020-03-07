import React from 'react'
import {ListOfCategories} from './components/ListOfCategories/index'
import {GlobalStyle} from './styles/GlobalStyles'
import {ListOfPhotoCards} from './container/ListOfPhotoCards'
import {Logo} from './components/Logo/index'

export const App = () => (
    <>
    <GlobalStyle/>
    <Logo/>
    <ListOfCategories/>
    <ListOfPhotoCards categoryId = {1}></ListOfPhotoCards>
    </>
)