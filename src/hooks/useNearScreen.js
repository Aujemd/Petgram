import {useEffect, useState, useRef} from 'react'

export function useNearScreen (){
    const ref = useRef(null) //Captura el elemento del dom
    const [show, setShow] = useState(false)
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

    return [show, ref]
}