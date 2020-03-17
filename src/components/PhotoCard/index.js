import React from 'react'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

import {FavButton} from '../FavButton/'

import {ImgWrapper, Img, Article} from './styles'
import {useLocalStorage} from '../../hooks/useLocalStorage'
import {useNearScreen} from '../../hooks/useNearScreen'
import {ToggleLikeMutation} from '../../container/ToggleLikeMutation'

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
    
    const[show, ref] = useNearScreen()
    const key = `like-${id}`
    const [liked, setLiked] = useLocalStorage(key, false)
    
    return (
        <Article ref = {ref}>
            {
                show && <>
                <a href={`/?detail=${id}`}>
                    <ImgWrapper>
                        <Img src={src}></Img>
                    </ImgWrapper>
                </a>
                <ToggleLikeMutation>
                    {
                        (toggleLike) => {
                            const handleFavClick = () => {
                                !liked && toggleLike({variables: {
                                    input:{id}
                                }})
                                setLiked(!liked)
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