from flask import Flask
import os

# FLASK SETTINGS
app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
api_key = os.environ.get('GOOGLE_API_KEY')

from app.routes import *

# RUN
if __name__ == '__main__':
    app.run()
