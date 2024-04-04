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
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ApiComponent
