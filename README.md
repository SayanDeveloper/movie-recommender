<p align="center">
<img src="https://user-images.githubusercontent.com/67837886/170816113-dd8eeb53-30ee-4c21-a6e1-76dfc8a9272e.png" />
</p>
<h4 align="center">A movie recommendation engine demonstration website built with Python and ReactJs</h4>
<h4 align="center">Built as a project for Microsoft Engage 2022 (Problem Statement 3 - Algorithm)</h4>
<p align="center">
<img src=https://visitor-badge.glitch.me/badge?page_id=SayanDeveloper.movie-suggestor"/>
<img src="https://img.shields.io/github/license/SayanDeveloper/movie-suggestor"/>
<img src="https://img.shields.io/github/stars/SayanDeveloper/movie-suggestor"/>
<img src="https://img.shields.io/github/forks/SayanDeveloper/movie-suggestor"/>
</p>

## What is it?

**Movie-Recommender** is a website to demonstrate how recommendation engine works in real world applications. Here I have applied only content based filtering for the recommendation engine. Also I have scraped the movie dataset from imdb. This recommendation engine accuracy will improve more if we put more relevant data in dataset.

## Main Features
- When visiting a movie details, the similar movies are recommended on the basis of title, genre, director, casts similarities
- The search function is also implemented to find any movies using search algorithms (only you can search within the 1000 movies which are present in the dataset)
- In homepage, few category movies are recommended

## Technologies Used
- Python and Flask (for backend)
- ReactJs (for frontend)

## Dependencies
- Backend
  > Backend Dependencies are provided in [/requirements.txt](https://github.com/SayanDeveloper/movie-suggestor/blob/main/requirements.txt)
  - flask
  - flask_cors
  - pandas
  - numpy
  - sklearn
- Frontend
  > Frontend Dependencies are provided in [/frontend/package.json](https://github.com/SayanDeveloper/movie-suggestor/blob/main/frontend/package.json)

## Setup Guide To Run In Localhost
- Firstly clone the github repo using `git clone https://github.com/SayanDeveloper/movie-recommender.git`
- Then for backend setup, open terminal in the root directory of this repo,
- Type in terminal `pip3 install -r requirements.txt` (You should have python3 and pip installed in your machine)
- Then `python3 app.py`
- Now your backend server is running
- For frontend, open another terminal and go to `/frontend` directory
- Type `npm install` to install all dependencies of frontend (npm and node is required in your machine to run this)
- Then `npm start` to start react server
- I have pushed the code for production server so using my production backend server domain for api fetching
- To use your localhost as api endpoint, replace `url` constant in `useEffect` of the files [DetailsPage.js](https://github.com/SayanDeveloper/movie-suggestor/blob/main/frontend/src/pages/DetailsPage.js), [HomePage.js](https://github.com/SayanDeveloper/movie-suggestor/blob/main/frontend/src/pages/HomePage.js), [SearchResult.js](https://github.com/SayanDeveloper/movie-suggestor/blob/main/frontend/src/pages/SearchResult.js)
                                                                                                                 
## Happy Coding :-)


