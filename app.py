from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(_name_)
CORS(app)  # Enable CORS for cross-origin requests

@app.route('/calculate', methods=['POST'])
def calculate_score():
    data = request.json  # Get JSON data from the frontend

    # Extract distances from the request (default to 0 if not provided)
    foot = float(data.get('foot', 0))
    bicycle = float(data.get('bicycle', 0))
    public_transport = float(data.get('public_transport', 0))
    car = float(data.get('car', 0))

    # Calculate sustainability score
    score = (foot * 4) + (bicycle * 3) + (public_transport * 2) + (car * 1)

    return jsonify({'score': score})  # Return the score as JSON

if _name_ == '_main_':
    app.run(debug=True)