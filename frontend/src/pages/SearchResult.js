import React, {useState, useEffect, useContext} from 'react'
import { GlobalContext } from '../context/provider';
import axios from 'axios';
import { useParams } from 'react-router';
import SearchItem from '../components/searchItem'

function SearchResultPage() {
    const {query} = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useContext(GlobalContext);

    useEffect(() => {
        setLoading(true);
        setSearchResults([]);
        // const url = "http://localhost:5000/search";
        const url = "http://3.144.115.145:5000/search";
        const params = {
            query: query
        }
        axios.post(url, params)
        .then(res => {
            setSearchResults(res.data.results);
            setLoading(false);
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [query])

    return (
        <div className='search-results-container'>
            <h3>{searchResults.length} Results Found</h3>
            {searchResults.map((each, index) => {
                return (
                    <SearchItem 
                        key={index}
                        movieIndex={each.index}
                        poster={each.optimised}
                        name={each.name}
                        genre={each.genres} />
                )
            })}
        </div>
    )
}

export default SearchResultPage