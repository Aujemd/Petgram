import React, {useEffect, useState} from 'react'
import {Category} from '../Category'
import {List, Item} from './styles'

export const ListOfCategories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        window.fetch('https://petgram-server-hksev77it.now.sh/categories')
        .then(res => res.json())
        .then(response => {
            setCategories(response)
        })
    }, []) //RECORDAR EL ARRAY VACIO PORQUE SINO SE EJECUTARA INFINITAMENTE
    return (
        <List>
            {
                categories.map(category => <Item key = {category.id}><Category {...category}/></Item>)
            }
        </List>
    )
}