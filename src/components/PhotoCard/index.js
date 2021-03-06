import React from 'react'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

import {FavButton} from '../FavButton/'

import {ImgWrapper, Img, Article} from './styles'
import {useNearScreen} from '../../hooks/useNearScreen'
import {ToggleLikeMutation} from '../../container/ToggleLikeMutation'
import {Link} from '@reach/router'
import PropTypes from 'prop-types'

export const PhotoCard = ({id, liked, likes = 0, src = DEFAULT_IMAGE}) => {
    
    const[show, ref] = useNearScreen()
    
    return (
        <Article ref = {ref}>
            {
                show && <>
                <Link to={`/detail/${id}`}>
                    <ImgWrapper>
                        <Img src={src}></Img>
                    </ImgWrapper>
                </Link>
                <ToggleLikeMutation>
                    {
                        (toggleLike) => {
                            const handleFavClick = () => {
                                toggleLike({variables: {
                                    input:{id}
                                }})
                            }
                            
                            return <FavButton liked={liked} likes={likes} onClick={handleFavClick}></FavButton>
                        }
                    }
                </ToggleLikeMutation>
                </>
            }
        </Article>
    )
}

PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    likes: function(props, propName, componentName){
        const propValue = props[propName]

        if(propValue === undefined){
            return new Error(`${propName} value must be defined`)
        }

        if(propValue < 0){
            return new Error(`${propName} value must be greater than 0`)
        }
    }
}