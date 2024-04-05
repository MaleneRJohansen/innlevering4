import React from 'react'
import BookCard from './BookCard'
import './sass/SearchResults.scss'

const SearchResults = ({ books, amazonURL }) => {
  return (
    <div className='book-list'>
      {books.map((book, index) => (
        <BookCard key={index} book={book} amazonURL={amazonURL} />
      ))}
    </div>
  )
}

export default SearchResults