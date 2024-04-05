import { useState } from 'react'
import ApiComponent from './components/ApiComponent'
import './sass/app.scss'
import './sass/BookCard.scss'
import './sass/SearchResults.scss'
import './sass/SearchBar.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ApiComponent/>
    </>
  )
}

export default App
