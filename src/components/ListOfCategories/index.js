import React, {useEffect, useState} from 'react'
import {Category} from '../Category'
import {List, Item} from './styles'

export const ListOfCategories = () => {

    const [categories, setCategories] = useState([])
    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => {
        window.fetch('https://petgram-server-hksev77it.now.sh/categories')
        .then(res => res.json())
        .then(response => {
            setCategories(response)
        })
    }, []) //RECORDAR EL ARRAY VACIO PORQUE SINO SE EJECUTARA INFINITAMENTE
    
    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && 
            setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed) => (
        <List className = {fixed ? 'fixed' : ''}>
            {
                categories.map(category => <Item key = {category.id}><Category {...category}/></Item>)
            }
        </List>
    )

    return (
        <>        
        {renderList()}
        {showFixed && renderList(true)}
        </>
    )
}