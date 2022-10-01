import { useState } from "react"

function SearchBar(){
    const [search, setSearch] = useState("")

    return(
        <div className="navbar-secondLine">
            <input type="test" value={search} onChange={ (event)=> setSearch(event.target.value) } placeholder="    Put your research"/>
        </div>
    )
}

export default SearchBar