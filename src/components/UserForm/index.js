import React from 'react'

import {useInputValue} from '../../hooks/useInputValue'

export const UserForm = ({onSubmit}) => {

    const email = useInputValue('')
    const password = useInputValue('')  

    return <form onSubmit={onSubmit}>
        <input placeholder='Email' {...email}></input>
        <input placeholder='Password' type='password' {...password}></input>
        <button>Iniciar Sesión</button>
    </form>
}
