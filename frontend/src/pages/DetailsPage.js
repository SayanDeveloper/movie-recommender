import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function DetailsPage() {
    const [allRecommended, setAllRecommended] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        const url = "http://localhost:5000/"
        const params = {
            "index": 0,
            "title": "Toy Story"
        }
        axios.post(url, params)
        .then(res => {
            console.log(res.data);
            setAllRecommended(res.data.movies);
        })
        .catch(err => {
            alert(err.message);
        })
    }, [])

    return (
        <div>
            Movie Name: {name}
            {allRecommended?.map((movieData, index) => {
                return (
                    <div key={index}>
                        <img src={movieData.optimised} style={{height: 150}} />
                        <h4>Movie name: {movieData.name}</h4>
                        <h4>Director: {movieData.director}</h4>
                        <h4>IMDB Rating: {movieData.rating}</h4>
                        <h4>Casts: {movieData.cast}</h4>
                        <h4>Genres: {movieData.genres}</h4>
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