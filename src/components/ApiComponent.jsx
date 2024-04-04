import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'

function ApiComponent() {
    const [books, setBooks] = useState([])
    const URL = 'https://openlibrary.org/search.json?title=james+bond'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL)
                if (response.ok) {
                    const jsonData = await response.json()
                    setBooks(jsonData.docs)
                } else {
                    console.error('Feil ved henting av bøker:', response.status)
                }
            } catch (error) {
                console.error('En feil oppstod under henting av bøker:', error)
            }
        }

        fetchData()
    }, [])

    const amazonURL = (amazonID) => {
        return `https://www.amazon.com/s?k=${amazonID}`
    }

    return (
        <div>
            <div className='book-list'>
                {books.map((book, index) => (
                    <BookCard key={index} book={book} amazonURL={amazonURL} />
                ))}
            </div>
        </div>
    );
}

export default ApiComponent