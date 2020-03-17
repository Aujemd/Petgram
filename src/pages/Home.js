import React from 'react'
import {ListOfPhotoCards} from '../container/ListOfPhotoCards'
import {ListOfCategories} from '../components/ListOfCategories/index'

export const Home = ({id}) => {
    return(
        <>
        <ListOfCategories/>
        <ListOfPhotoCards categoryId = {id}></ListOfPhotoCards>
        </>
    )
}