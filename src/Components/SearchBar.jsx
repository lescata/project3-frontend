import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function SearchBar() {
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])
    const navigate = useNavigate();

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

    function searchLink(_id){
        setResult([])
        navigate(`/products/${_id}`)
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
                            <div className="searchCard" onClick={e=> searchLink(el._id)} key={`search${el._id}`} >
                                <img src={el.images[0]} alt=""/>
                                <span>{el.name}</span>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default SearchBar