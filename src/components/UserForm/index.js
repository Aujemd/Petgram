import React from 'react'

import {useInputValue} from '../../hooks/useInputValue'
import {Error, Form, Input, Title} from './styles'
import {SubmitButton} from '../SubmitButton'

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
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
        </Form>
        {error && <Error>{error}</Error>}
        </>
    )
}
