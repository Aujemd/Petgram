import React from 'react'
import {Link, Image} from './styles'
import DEFAULT_IMAGE from '../../assets/cat.jpg'

export const Category = ({cover = DEFAULT_IMAGE, path = '#', emoji = '🐢'}) => (
    <Link to = {path}>
        <Image src ={cover}/>
        {emoji}
    </Link>
)