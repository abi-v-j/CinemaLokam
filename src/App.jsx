import axios from 'axios'
import React, { useEffect } from 'react'

const App = () => {

  const fetchMovie = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie',
      {
        params: {
          api_key: API_KEY,
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