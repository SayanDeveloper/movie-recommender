import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from '../context/provider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import Card from '../components/card';

function HomePage() {
    const [top25movies, setTop25Movies] = useState([]);
    const [topActions, setTopActions] = useState([]);
    const [topAnimated, setTopAnimated] = useState([]);
    const [loading, setLoading] = useContext(GlobalContext);

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

    useEffect(() => {
        setLoading(true);
        // const url = "http://localhost:5000/home";
        const url = "https://api.moviereq.sayan.rocks//home";
        const params = {
            genres: ["action", "adventure"],
        };
        axios.post(url, params)
        .then(res => {
            console.log(res.data);
            setTop25Movies(res.data.top25imdb);
            setTopActions(res.data.topActions);
            setTopAnimated(res.data.topAnimated);
            setLoading(false);
        })
        .catch(err => {
            console.log(err.message);
        })
        }, [])

    return (
        <div className='homepage-container'>
            {top25movies && 
            (<>
                <div className='top-25-imdb'>
                    <h3 className='similar-movies-heading'>Top 25 IMDB Rated Movies</h3>
                    <div className='recommend-slider'>
                        <Carousel
                            responsive={responsive}
                            partialVisbile={true}
                            autoPlay={false}
                            autoPlaySpeed={3600000}>
                            {top25movies.map((movieData, index) => {
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
            </>)
            }
            <div className='top-25-imdb'>
                <h3 className='similar-movies-heading'>Action Movies</h3>
                <div className='recommend-slider'>
                    <Carousel
                        responsive={responsive}
                        partialVisbile={true}
                        autoPlay={false}
                        autoPlaySpeed={3600000}>
                            {topActions.map((movieData, index) => {
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
            <div className='top-25-imdb'>
                <h3 className='similar-movies-heading'>Animated Movies</h3>
                <div className='recommend-slider'>
                    <Carousel
                        responsive={responsive}
                        partialVisbile={true}
                        autoPlay={false}
                        autoPlaySpeed={3600000}>
                            {topAnimated.map((movieData, index) => {
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
        </div>
    )
}

export default HomePage