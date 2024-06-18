import axios from 'axios'
import React, { useEffect } from 'react'

const App = () => {
 const apiKey = 'f665ed3ec1602e6a94fcf6b4d4f391b0'

  const fetchMovie = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie',
      {
        params: {
          api_key: apiKey,
          language: 'en-US',
          page: 1,
        },
      }
    )
    console.log(response.data.results);
  }

  useEffect(() => {
    fetchMovie()
  }, [])
  return (
    <div>App</div>
  )
}

export default App