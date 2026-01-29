from flask import render_template, jsonify, request
from app import app
from app.services import generate_content
import json

# ROUTES
@app.route('/')
def index():
    return render_template("index.html")


@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    tema = data.get('tema')

    if not tema:
        return jsonify({"error": "O tema é obrigatório"}), 400

    try:
        raw_response = generate_content(tema)

        clean_json = raw_response.replace('```json', '').replace('```', '').strip()
        content_data = json.loads(clean_json)

        return jsonify(content_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500