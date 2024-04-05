import React from 'react'
import BookCard from './BookCard'

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