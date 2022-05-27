from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from contentBasedFiltering import *

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods = ['POST'])
@cross_origin()
def home():
	try:
		req = request.json
		Movies = RecommendedList(req["index"])
		GetMovieByIndex = getMovieDetails(req["index"])
		res = {
			"success": True,
			"details": GetMovieByIndex,
			"movies": Movies
		}
		return jsonify(res)
	except:
		return jsonify({"success": False})

@app.route('/detail', methods=['POST'])
@cross_origin()
def details():
	try:
		req = request.json
		movieDetails = getMovieDetails(req["index"])
		res = {
			"success": True,
			"details": movieDetails
		}
		return jsonify(res)
	except:
		return jsonify({"success": False})

@app.route('/home', methods=['POST', 'GET'])
@cross_origin()
def dashboardData():
	try:
		req = request.json
		res = {
			"success": True,
			"top25imdb": top25imdb,
			"topActions": action,
			"topAnimated": animated
		}
		return jsonify(res)
	except:
		return jsonify({"success": False})

@app.route('/search', methods=['POST'])
@cross_origin()
def searchResponse():
	try:
		req = request.json
		searchRes = searchTitle(req["query"])
		res = {
			"success": True,
			"results": searchRes,
		}
		return jsonify(res)
	except:
		return jsonify({ "success": False })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)