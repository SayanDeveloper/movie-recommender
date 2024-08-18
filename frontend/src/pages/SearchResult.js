import React, {useState, useEffect, useContext} from 'react'
import { GlobalContext } from '../context/provider';
import { useParams } from 'react-router';
import SearchItem from '../components/searchItem'
import axiosInstance from '../utils/axios';

function SearchResultPage() {
    const {query} = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const {setLoading} = useContext(GlobalContext);

    useEffect(() => {
        setLoading(true);
        setSearchResults([]);
        axiosInstance.get(`/search?query=${query}`)
        .then(res => {
            setSearchResults(res.data.results);
            setLoading(false);
        })
        .catch(err => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        genre={each.genres}
                    />
                )
            })}
        </div>
    )
}

export default SearchResultPage