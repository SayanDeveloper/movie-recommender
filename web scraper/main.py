from bs4 import BeautifulSoup
import requests
import pandas as pd

# change this url for different pages as imdb provides 100 movies each page
url = "https://www.imdb.com/search/title/?groups=top_1000&sort=user_rating,desc&count=100&start=901&ref_=adv_nxt"
page = requests.get(url)

# the pages html is parsed and stored here
soup = BeautifulSoup(page.content, "html.parser")

# this h3 tag contains movie names
scraped_movies = soup.find_all('h3', class_='lister-item-header')

movies = []
released = []
length = len(scraped_movies)
i = 4
for index in range(length):
    # if index == 9 or index == 99:
    #   i += 1
    movie = scraped_movies[index].get_text().replace('\n', "")
    movie = movie.strip(" ")
    inLen = len(movie)
    movies.append(movie[i:inLen-6:])
    year = movie[inLen-5:inLen-1:]
    released.append(year)

# this img tag with class="_loadlate" containes all movies poster url
scraped_images = soup.find_all('img', class_='loadlate')

images = []
optimisedImg = []
for img in scraped_images:
    if img.has_attr('loadlate'):
        # by default in the page the optimised image url present
        optimisedImg.append(img['loadlate'])
        # I have observed that the if later part of '@' is removeed from url then we get real resolution
        lst = img['loadlate'].split("@")
        counter = img['loadlate'].count("@")
        real = lst[0]
        for i in range(counter):
            real += "@"
        real += ".jpg"
        images.append(real)

# scrap rating for movies
scraped_ratings = soup.find_all('div', class_='ratings-imdb-rating')

ratings = []
for rating in scraped_ratings:
    rating = rating.get_text().replace('\n', '')
    ratings.append(rating)

scraped_genres = soup.find_all('span', class_='genre')

genres = []
for genre in scraped_genres:
    genre = genre.get_text().replace('\n', '')
    genre = genre.rstrip()
    genres.append(genre)

scraped_all_items = soup.find_all('div', class_='lister-item-content')
scrapped_people = []
allLength = 0
for i in scraped_all_items:
    holders = i.find_all("a")
    ans = []
    for j in holders:
        if j["href"][:5] == "/name":
            ans.append(j.get_text())
    allLength += len(ans)
    scrapped_people.append(ans)

directors = []
actors = []
for i in scrapped_people:
    inLen = len(i)
    div = inLen - 4
    director = ", ".join(i[:div])
    directors.append(director)
    actor = ", ".join(i[div:])
    actors.append(actor)

data = pd.DataFrame()
data['Title'] = movies
data['Ratings'] = ratings
data['SmallPoster'] = optimisedImg
data['Poster'] = images
data['Genres'] = genres
data['Directors'] = directors
data['Actors'] = actors
data['Released'] = released
data.head()

# print(movies)
# print(directors)
data.to_csv('IMDB_Top_Movies9.csv', index=False)