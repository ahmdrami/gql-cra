import React from 'react'
import { gql, useQuery } from '@apollo/client'

export const ME_QUERY = gql`
  query {
    me
  }
`
type Data = {
  me: number
}
function App() {
  const { loading, error, data } = useQuery<Data>(ME_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <div className="App">User: {data?.me}</div>
}

export default App
