import React, { useState, useEffect } from 'react'

const BookCard = ({ book, amazonURL }) => {
  const { title, author_name } = book

  const [coverURL, setCoverURL] = useState('')

  useEffect(() => {
    //ChatGPT kom men en generell "fetch" og jeg har tilpasset den koden min, og lagt inn elementer som gjør det mulig å hente fra api
    const fetchCoverURL = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author_name[0])}&maxResults=1`)
        if (response.ok) {
          const data = await response.json()
          if (data.items && data.items.length > 0) {
            const coverLink = data.items[0].volumeInfo.imageLinks.thumbnail
            setCoverURL(coverLink)
          }
        } else {
          console.error('Feilet ved henting av forside', response.status)
        }
      } catch (error) {
        console.error('Feil under henting av forsidebilde', error)
      }
    }

    fetchCoverURL()
  }, [title, author_name])

  return (
    <div className="book-card">
      {coverURL && <img src={coverURL} alt={`Forside av ${title}`} />}
      <div>
        <h2>{title}</h2>
        <p>Author: {author_name && author_name.join(', ')}</p>
        <p>Published: {book.first_publish_year}</p>
        <p>Rating: {book.ratings_average}</p>
        <a href={amazonURL(book.id_amazon)} target='_blank' rel='noopener noreferrer'>Kjøp på Amazon</a>
      </div>
    </div>
  )
}

export default BookCard
