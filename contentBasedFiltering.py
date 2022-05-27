import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# reading the csv by pandas
df = pd.read_csv("IMDB_Top_Movies.csv")
df.fillna("", inplace=True)
dframe = pd.DataFrame(df)

def get_title_from_index(index):
	return df[df.index == index]["title"].values[0]

def get_index_from_title(title):
	return df[df.title == title]["index"].values[0]

def get_row_from_index(index):
	return df[df.index == index]

def getMovieDetails(index):
	movie = get_row_from_index(index)
	movieDetails = {}
	movieDetails["name"] = movie["title"].values[0]
	movieDetails["thumbnail"] = movie["Poster"].values[0]
	movieDetails["optimised"] = movie["optimised"].values[0]
	movieDetails["director"] = movie["director"].values[0]
	movieDetails["genres"] = movie["genres"].values[0]
	movieDetails["cast"] = movie["cast"].values[0]
	movieDetails["rating"] = movie["Ratings"].values[0]
	movieDetails["index"] = int(movie["index"].values[0])
	return movieDetails


## Step 2: Select Features
features = ["keywords", "cast", "genres", "director"]
excluded = ["a", "an", "the", "and", "on", "at", "of"]

##Step 3: Create a column in DF which combines all selected features
def titleModified(row):
	newTitle = row["title"].lower().split()
	for i in excluded:
		try:
			newTitle.remove(i)
		except:
			continue
	newTitle = " ".join(newTitle)
	return newTitle

def combine_genre_cast(row):
	return row["genres"] + " " + row["director"] + " " + row["cast"]


def RecommendedList(movie):
	df["combined"] = df.apply(combine_genre_cast, axis=1)
	df["new_title"] = df.apply(titleModified, axis=1)

	##Step 4: Create count matrix from this new combined column
	cv = CountVectorizer()
	count_matrix_title = cv.fit_transform(df["new_title"])
	count_matrix_combined = cv.fit_transform(df["combined"])

	##Step 5: Compute the Cosine Similarity based on the count_matrix
	cos_sim_title = cosine_similarity(count_matrix_title)
	cos_sim_combined = cosine_similarity(count_matrix_combined)

	## Step 6: Get index of this movie from its title
	similar_movies_title = list(enumerate(cos_sim_title[movie]))
	similar_movies_combined = list(enumerate(cos_sim_combined[movie]))

	## Step 7: Get a list of similar movies in descending order of similarity score
	similar_movies_title.sort(key=lambda x: x[1], reverse=True)
	similar_movies_title.pop(0)
	similar_movies_combined.sort(key=lambda x: x[1], reverse=True)
	similar_movies_combined.pop(0)

	## Step 8: Print titles of first 50 movies
	RecommendedAllIndex = sorted((similar_movies_title[:5] + similar_movies_combined[:10]), key=lambda x: x[1], reverse=True)

	recorded = []
	RecommendedMovieList = []

	RecommendedIndexLength = len(RecommendedAllIndex)
	for i in range(min(14, RecommendedIndexLength)):
		if len(RecommendedMovieList) >= 10:
			break
		if RecommendedAllIndex[i][0] not in recorded:
			recorded.append(RecommendedAllIndex[i][0])
			movie = getMovieDetails(RecommendedAllIndex[i][0])
			RecommendedMovieList.append(movie)
	return RecommendedMovieList


# category wise movies to show in home page
top25imdb = []
for i in range(25):
	movie = getMovieDetails(i)
	top25imdb.append(movie)

action = []
for i in range(25, 100):
	if len(action) >= 10:
		break
	row = get_row_from_index(i)
	if "Action" in row["genres"].values[0]:
		movie = getMovieDetails(i)
		action.append(movie)

animated = []
for i in range(230, 400):
	if len(animated) >= 10:
		break
	row = get_row_from_index(i)
	if "Animation" in row["genres"].values[0]:
		movie = getMovieDetails(i)
		animated.append(movie)


# Movie search function
allMovies = df["title"].values
def searchTitle(subStr):
	searchResult = []
	for i in allMovies:
		if len(searchResult) == 20:
			break
		if subStr.lower() in i.lower().replace(" ", ""):
			index = get_index_from_title(i)
			movie = getMovieDetails(index)
			searchResult.append(movie)
	return searchResult

