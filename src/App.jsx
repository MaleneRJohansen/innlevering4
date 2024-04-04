import { useState } from 'react'
import SearchBar from './components/SearchBar'
import BookCard from './components/BookCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SearchBar/>
    <BookCard/>
    </>
  )
}

export default App
