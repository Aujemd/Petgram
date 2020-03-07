import React, {useEffect, useRef, useState} from 'react'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

import {ImgWrapper, Img, Button, Article} from './styles'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
    
    const ref = useRef(null) //Captura el elemento del dom
    const [show, setShow] = useState(false)
    const key = `like-${id}`
    const [liked, setLiked] = useState(() => {
        try{
            return  window.localStorage.getItem(key) === 'true'
        }catch(e){
            return false
        }
    })

    useEffect(function(){

        Promise.resolve(        
        typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver
        : import('intersection-observer')
        ).then(() => {
            const observer = new window.IntersectionObserver(
                function(entries){
                    const {isIntersecting} = entries[0]
                    if(isIntersecting){
                        setShow(true)
                        observer.disconnect()
                    }
                }
            )
    
            observer.observe(ref.current)
        })
    }, [ref])

    const Icon = liked ? MdFavorite : MdFavoriteBorder

    const setLocalStorage = value => {
        try{
            window.localStorage.setItem(key, value)
            setLiked(value)
        }catch(e){
            console.error (e);
        }
    }
    
    return (
        <Article ref = {ref}>
            {
                show && <>
                <a href={`/detail/${id}`}>
                    <ImgWrapper>
                        <Img src={src}></Img>
                    </ImgWrapper>
                </a>

                <Button onClick = {
                 () => setLocalStorage(!liked)
                }>
                    <Icon size='32px'/>{likes} likes!
                </Button>
                </>
            }
        </Article>
    )
}