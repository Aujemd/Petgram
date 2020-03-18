import React from 'react'
import {ListOfPhotoCards} from '../container/ListOfPhotoCards'
import {ListOfCategories} from '../components/ListOfCategories/index'
import {Helmet} from 'react-helmet'
import {Layout} from '../components/Layout/index'

const HomePage = ({id}) => {
    return(
        <Layout
        title="Tu app de fotos de mascotas"
        subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'
        >
        <ListOfCategories/>
        <ListOfPhotoCards categoryId = {id}></ListOfPhotoCards>
        </Layout>
    )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.categoryId === props.categoryId
})