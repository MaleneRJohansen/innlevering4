import React from 'react'
import { IoSearch } from "react-icons/io5"

const SearchBar = () => {
  return (
    <div>
        <input className='input' type='text' placeholder='Search titles...'></input>
        <button className='button'><IoSearch/>Search</button>
    </div>
  )
}

export default SearchBar
