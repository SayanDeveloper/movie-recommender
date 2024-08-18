import React, {useState, useEffect, useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import { GlobalContext } from '../context/provider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../components/card';
import ImageLoad from '../components/imageLoad';
import axiosInstance from '../utils/axios';

function DetailsPage() {
    const [allRecommended, setAllRecommended] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});
    const {movieIndex} = useParams();
    const {setLoading} = useContext(GlobalContext);

    useEffect(() => {
        setLoading(true);
        setAllRecommended([]);
        setSelectedMovie({});
        const params = {
            index: parseInt(movieIndex)
        }
        axiosInstance.post('/', params)
        .then(res => {
            setAllRecommended(res.data.movies);
            setSelectedMovie(res.data.details);
            setLoading(false);
        })
        .catch(err => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieIndex])

    const responsive = {
        big: {
            breakpoint: {max: 2100, min: 1700},
            items: 6
        },
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
            breakpoint: { max: 640, min: 510 },
            items: 1,
            partialVisibilityGutter:180
        },
        xsmal: {
            breakpoint: { max: 510, min: 427 },
            items: 1,
            partialVisibilityGutter: 100
        },
        xsmal1: {
            breakpoint: { max: 427, min: 370 },
            items: 1,
            partialVisibilityGutter: 50
        },
        xsmal2: {
            breakpoint: { max: 370, min: 327 },
            items: 1,
            partialVisibilityGutter: 15
        }
    };

    return (
        <div>
            <div className='detail-flex'>
                <div className='detail-img-holder'>
                    <ImageLoad 
                        className={"detail-page-img"}
                        main={selectedMovie?.thumbnail}
                        placeholder={selectedMovie?.optimised}
                        alt={"Poster"}
                        />
                </div>
                <div className='movie-details-container'>
                    <h1>{selectedMovie?.name}</h1>
                    <h4>Director: {selectedMovie?.director}</h4>
                    <h4>Casts: {selectedMovie?.cast}</h4>
                    <h4>IMDB Rating: {selectedMovie?.rating}</h4>
                    <h4>Genres: {selectedMovie?.genres}</h4>
                </div>
            </div>

            <h3 className='similar-movies-heading'>Recommended Movies</h3>
            <div className='recommend-slider'>
                <Carousel
                    responsive={responsive}
                    partialVisbile={true}
                    autoPlay={false}
                    autoPlaySpeed={3600000}>
                    {allRecommended?.map((movieData, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/movie/${movieData.index}`}>
                                    <Card 
                                        mainImg={movieData.thumbnail}
                                        optimisedImg={movieData.optimised}
                                        title={movieData.name}
                                        genres={movieData.genres} />
                                </Link>
                            </div>
                        )
                    })}
                    
                </Carousel>
            </div>
        </div>
    )
}

export default DetailsPage