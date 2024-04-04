import { useState } from 'react'
import SearchBar from './components/SearchBar'
import BookCard from './components/BookCard'
import ApiComponent from './components/ApiComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SearchBar/>
    <ApiComponent/>
    </>
  )
}

export default App
