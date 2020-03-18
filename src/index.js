import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {App} from './App'
import Context from './Context'

const cliente = new ApolloClient({
    uri: 'https://petgram-server.jemd.now.sh/graphql',
    request: operation => {
        const token = window.sessionStorage.getItem('token')
        const authorization = token ? `Bearer ${token}` : ''
        operation.setContext({
            headers:{
                authorization
            }
        })
    },
    onError: error => {
        const {networkError} = error
        if(networkError && networkError.code === "invalid_token"){
            window.sessionStorage.removeItem('token')
            window.location.href = '/'
        }
    } 

})

ReactDOM.render(
<Context.Provider>
<ApolloProvider client = {cliente}>
    <App/>
</ApolloProvider>
</Context.Provider> 
, document.getElementById('app'))