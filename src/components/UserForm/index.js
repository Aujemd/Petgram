import React from 'react'

import {useInputValue} from '../../hooks/useInputValue'
import {Form, Input, Button, Title} from './styles'

export const UserForm = ({onSubmit, title}) => {

    const email = useInputValue('')
    const password = useInputValue('')  

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({email: email.value, password: password.value})
    }
 
    return (
        <>
        <Title>{title}</Title>
        <Form onSubmit={handleSubmit}>
        <Input placeholder='Email' {...email}></Input>
        <Input placeholder='Password' type='password' {...password}></Input>
        <Button>{title}</Button>
        </Form>
        </>
    )
}
