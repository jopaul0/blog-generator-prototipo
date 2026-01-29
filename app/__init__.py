from flask import Flask
import os

# FLASK SETTINGS
app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
api_key = os.environ.get('GOOGLE_API_KEY')

# ROUTES
@app.route('/')
def hello_world():  # put application's code here
    return 'Container Funcionandoo!'

# RUN
if __name__ == '__main__':
    app.run()
