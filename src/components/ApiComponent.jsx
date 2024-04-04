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

    return (
        <div>
            <h1>James Bond Bøker</h1>
            <div className='book-list'>
                {books.map((book, index) => (
                    <h2 key={index}>{book.title}</h2>
                ))}
            </div>
        </div>
    );
}

export default ApiComponent
