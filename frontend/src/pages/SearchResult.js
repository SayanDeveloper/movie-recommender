import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import SearchItem from '../components/searchItem'

function SearchResultPage() {
    const {query} = useParams();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setSearchResults([]);
        const url = "http://localhost:5000/search";
        const params = {
            query: query
        }
        axios.post(url, params)
        .then(res => {
            setSearchResults(res.data.results);
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