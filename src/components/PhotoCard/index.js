import React from 'react'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

import {ImgWrapper, Img, Button} from './styles'
import {MdFavoriteBorder} from 'react-icons/md'

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
    return (
        <article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src}></Img>
                </ImgWrapper>
            </a>

            <Button>
                <MdFavoriteBorder size='32px'/>{likes} likes!
            </Button>
        </article>
    )
}