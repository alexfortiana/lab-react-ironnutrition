import React, { useState } from 'react'

function SearchBar(props) {

    const [search, setSearch] = useState("")

    const handleChange = (event) => {

    setSearch(event.target.value)

    props.searchProduct(event.target.value)


}

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" name='search' value={search} onChange={handleChange}/>

    </div>
  )
}

export default SearchBar