import React, { useState } from 'react'

function SearchBar({handleImageSearch}) {

    const [searchTerm, setSearchTerm] = useState('')

    const handleFormSubmit = (e)=>{ 
        e.preventDefault()
        handleImageSearch(searchTerm)
        setSearchTerm('')
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleFormSubmit}>
                <input placeholder='Enter search term'
                onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm}></input>
            </form>
        </div>
    )
}

export default SearchBar