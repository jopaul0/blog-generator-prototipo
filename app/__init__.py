from flask import Flask, render_template
import os

# FLASK SETTINGS
app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
api_key = os.environ.get('GOOGLE_API_KEY')

# ROUTES
@app.route('/')
def index():
    return render_template("index.html")

# RUN
if __name__ == '__main__':
    app.run()
