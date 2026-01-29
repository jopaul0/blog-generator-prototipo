import json
import os
import google.generativeai as genai
from app import api_key

def load_data(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_content(prompt):
    config = load_data(os.path.join(os.path.dirname(__file__), '..', 'config', 'gemini_config.json'))

    genai.configure(api_key=api_key)
    model = genai.GenerativeModel(
        model_name=config['model_name'],
        generation_config=config['generation_config']
    )

    response = model.generate_content(prompt)
    return response.text

