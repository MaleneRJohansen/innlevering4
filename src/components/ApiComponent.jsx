import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'
import SearchBar from './SearchBar'

function ApiComponent() {
    const [books, setBooks] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const URL = 'https://openlibrary.org/search.json?title='

    useEffect(() => {
        if (searchQuery.length >= 3) {
            const fetchBooks = async () => {
                try {
                    const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(searchQuery)}`)
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
            
            fetchBooks()
        }
    }, [searchQuery])

    const amazonURL = (amazonID) => {
        return `https://www.amazon.com/s?k=${amazonID}`
    }

    const handleSearch = async (query) => {
        setSearchQuery(query)
    }

    return (
        <div>
            <div className='search'>
                <SearchBar handleSearch={handleSearch} />
            </div>
            <div className='book-list'>
                {books.map((book, index) => (
                    <BookCard key={index} book={book} amazonURL={amazonURL} />
                ))}
            </div>
        </div>
    );
}

export default ApiComponent