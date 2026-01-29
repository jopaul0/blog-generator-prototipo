from flask import render_template, jsonify
from app import app

# ROUTES
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/generate', methods=['POST'])
def generate():
    return jsonify({"status": "recebido"})