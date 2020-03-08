import React from 'react'
import {ListOfCategories} from './components/ListOfCategories/index'
import {GlobalStyle} from './styles/GlobalStyles'
import {ListOfPhotoCards} from './container/ListOfPhotoCards'
import {Logo} from './components/Logo/index'
import {PhotoCardWithQuery} from './container/PhotoCardWithQuery'

export const App = () => {

    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')    
    return(    
    <>
        <GlobalStyle/>
        <Logo/>
        {
            detailId
            ? <PhotoCardWithQuery id = {detailId}/>
            :
            <>
            <ListOfCategories/>
            <ListOfPhotoCards categoryId = {1}></ListOfPhotoCards>
            </>
        }
    </>
    )
}

