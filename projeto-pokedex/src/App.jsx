import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import Router from './Router/Router'
import BASE_URL from './constants/BASE_URL'
import { GlobalStyles } from './GolbalStyles'



function App() {
  const [pokemons, setPokemons] = useState([])


  useEffect(() => {
      fetchPokemons()

  }, [])
  

  const fetchPokemons = async () => {
    try {
      const fetchedPokemons = []

      for (let i = 1; i <= 20; i++) {
        
        const res = await axios.get(`${BASE_URL}/${i}`)
        fetchedPokemons.push(res.data)

      }
      setPokemons(fetchedPokemons)
      
    } catch (error) {
      console.log(error.message)
    }

  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <Router pokemons={pokemons}/>
       
    </>
  )
}

export default App
