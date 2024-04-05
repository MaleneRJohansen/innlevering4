import React from 'react'
import { useState } from 'react'
import { IoSearch } from "react-icons/io5"

const SearchBar = ({handleSearch}) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSearchClick = () => {
        handleSearch(searchQuery)
    }

  return (
    <div className='search-bar'>
        <input className='input' type='text' placeholder='Search titles...' value={searchQuery} onChange={handleInputChange} />
        <button className='button' onClick={handleSearchClick}><IoSearch/>Search</button>
    </div>
  )
}

export default SearchBar
