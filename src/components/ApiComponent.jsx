import React, { useState, useEffect } from 'react'

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
            <h1>James Bond Bøker</h1>
            <div className='book-list'>
                {books.map((book, index) => (
                    <div key={index}>
                        <h2>{book.title}</h2>
                        <p>Forfatter: {book.author_name && book.author_name.join(', ')}</p>
                        <p>Gjennomsnittlig rating: {book.ratings_average}</p>
                        <p>Publiseringsår: {book.first_publish_year}</p>
                        <a href={amazonURL(book.amazon_id)} target="_blank" rel="noopener noreferrer">Kjøp på Amazon</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ApiComponent
