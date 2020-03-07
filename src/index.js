import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {App} from './App'

const cliente = new ApolloClient({
    uri: 'https://petgram-server.jemd.now.sh/graphql'
})

ReactDOM.render(
<ApolloProvider client = {cliente}>
    <App/>
</ApolloProvider> 
, document.getElementById('app'))