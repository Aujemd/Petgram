import React from 'react'
import {Anchor, Image} from './styles'
import DEFAULT_IMAGE from '../../assets/cat.jpg'

export const Category = ({cover = DEFAULT_IMAGE, path, emoji = '🐢'}) => (
    <Anchor href = {path}>
        <Image src ={cover}/>
        {emoji}
    </Anchor>
)