import { useState } from "react"
import axios from "axios"

function SearchBar() {
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])
    

    function searchRequest(value) {
        setSearch(value)

        if(search.length > 1){
            axios.get(`/products?q=${value}`)
            .then(response => setResult(response.data))
            .catch(err => console.log("erreur axios search:", err))
            
        } else{
            setResult([])
        }
    }

    return (
        <div>
            <div className="navbar-searchBar">
            <input type="text" value={search} onChange={(event) => searchRequest(event.target.value)} placeholder="Put your research" />
            </div>
            {
                result.length > 0 &&
                <div className="searchResult">
                    {
                        result.map(el=>(
                            <a href={`/products/${el._id}`} key={`search${el._id}`}>
                                <div className="searchCard">
                                    <img src={el.images[0]} alt=""/>
                                    <span>{el.name}</span>
                                </div>
                            </a>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default SearchBar