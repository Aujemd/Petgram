import React from 'react'
import {ListOfCategories} from './components/ListOfCategories/index'
import {GlobalStyle} from './GlobalStyles'
import {ListOfPhotoCards} from './components/ListOfPhotoCards'

export const App = () => (
    <>
    <GlobalStyle/>
    <ListOfCategories/>
    <ListOfPhotoCards></ListOfPhotoCards>
    </>
)