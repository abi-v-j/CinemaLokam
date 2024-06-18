import axios from 'axios'
import React, { useEffect } from 'react'
const dotenv = require('dotenv');
API_KEY = f665ed3ec1602e6a94fcf6b4d4f391b0

const App = () => {
  console.log(process.env.API_KEY);

  const fetchMovie = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie',
      {
        params: {
          api_key: process.env.API_KEY,
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