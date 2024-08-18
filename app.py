from fastapi import FastAPI, Path
from contentBasedFiltering import *

app = FastAPI()

@app.get("/")
def get_dashboard_data():
	try:
		res = {
			"success": True,
			"top25imdb": top25imdb,
			"topActions": action,
			"topAnimated": animated
		}
		return res
	except:
		return { "success": False }

@app.get("/movie/{id}")
def get_movie_details(id: int = Path(description="The ID of the movie")):
	try:
		Movies = RecommendedList(id)
		GetMovieByIndex = getMovieDetails(id)
		return {
			"success": True,
			"details": GetMovieByIndex,
			"movies": Movies
		}
	except:
		return { "success": False }

@app.get("/search")
def get_movies_by_name(query: str):
	try:
		searchRes = searchTitle(query)
		res = {
			"success": True,
			"results": searchRes,
		}
		return res
	except:
		return { "success": False }
