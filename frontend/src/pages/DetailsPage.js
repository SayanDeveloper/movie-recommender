import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
            setSelectedMovie(res.data.details);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, [])
    console.log(allRecommended);

    const responsive = {
        sc: {
            breakpoint: {max: 1700, min: 1480},
            items: 5
        },
        desktop: {
            breakpoint: { max: 1480, min: 1200 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1200, min: 930 },
            items: 3,
        },
        mid: {
            breakpoint: { max: 930, min: 750 },
            items: 2,
            partialVisibilityGutter: 40
        },
        small: {
            breakpoint: { max: 750, min: 640 },
            items: 2,
        },
        xs: {
            breakpoint: { max: 640, min: 300 },
            items: 1,
            partialVisibilityGutter:180
        },
    };

    return (
        <div>
            {/* {selectedMovie && (
                <>
                    <div>
                        Movie Name: {selectedMovie.name}
                    </div>
                    <div>
                        Director: {selectedMovie.director}
                    </div>
                    <div>
                        Genres: {selectedMovie.genres}
                    </div>
                    <br />
                    <br />
                    <br />
                </>
            )} */}
            <div className='recommend-slider'>
                <Carousel
                    responsive={responsive}
                    partialVisbile={true}
                    autoPlay={false}
                    autoPlaySpeed={3600000}>
                    {allRecommended?.map((movieData, index) => {
                        return (
                            <div key={index}>
                                <Card 
                                    mainImg={movieData.thumbnail}
                                    optimisedImg={movieData.optimised}
                                    title={movieData.name}
                                    genres={movieData.genres} />
                                <br />
                                <br />
                                <br />
                            </div>
                        )
                    })}
                    
                </Carousel>
            </div>
        </div>
    )
}

export default DetailsPage