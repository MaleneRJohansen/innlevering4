import React from 'react'

const BookCard = ({book, amazonURL}) => {
  return (
    <>
    <div>
        <h2>{book.title}</h2>
        <p>Forfatter: {book.author_name && book.author_name.join(', ')}</p>
        <p>Rating: {book.ratings_average}</p>
        <p>Publiseringsår: {book.first_publish_year}</p>
        <a href={amazonURL(book.id_amazon)} target='_blank' rel='noopener noreferrer'>Kjøp på Amazon</a>
    </div>
    </>
  )
}

export default BookCard
