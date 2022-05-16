import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Card from '../components/card';

function DetailsPage() {
    const [allRecommended, setAllRecommended] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});
    const {movieIndex} = useParams();

    useEffect(() => {
        const url = "http://localhost:5000/"
        const params = {
            "index": parseInt(movieIndex),
            "title": "The Dark Knight"
        }
        axios.post(url, params)
        .then(res => {
            console.log(res.data);
            setAllRecommended(res.data.movies);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, [])

    return (
        <div>
            Movie Name: {}
            {allRecommended?.map((movieData, index) => {
                return (
                    <div key={index}>
                        <Card 
                            mainImg={movieData.thumbnail}
                            optimisedImg={movieData.optimised}
                            title={movieData.name}
                            genres={movieData.genres} />
                        {/* <img src={movieData.optimised} />
                        <h4>Movie name: {movieData.name}</h4>
                        <h4>Director: {movieData.director}</h4>
                        <h4>IMDB Rating: {movieData.rating}</h4>
                        <h4>Casts: {movieData.cast}</h4>
                        <h4>Genres: {movieData.genres}</h4> */}
                        <br />
                        <br />
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default DetailsPage