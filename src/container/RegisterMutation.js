import {Mutation} from 'react-apollo'
import {gql} from 'apollo-boost'
import React from 'react'

const REGISTER = gql`
mutation signup($input: UserCredentials!){
    signup (input: $input)
}
`

export const RegisterMutation = ({children}) => {
    return <Mutation mutation={REGISTER}>
        {children}
    </Mutation>
}