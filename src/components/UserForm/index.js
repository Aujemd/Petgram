import React from 'react'

import {useInputValue} from '../../hooks/useInputValue'
import {Error, Form, Input, Button, Title} from './styles'

export const UserForm = ({error, onSubmit, disabled, title}) => {

    const email = useInputValue('')
    const password = useInputValue('')  

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({email: email.value, password: password.value})
    }
 
    return (
        <>
        <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email}></Input>
        <Input disabled={disabled} placeholder='Password' type='password' {...password}></Input>
        <Button disabled={disabled}>{title}</Button>
        </Form>
        {error && <Error>{error}</Error>}
        </>
    )
}
