from flask import Flask, jsonify, request, redirect, url_for, render_template
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define a model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

# Create the database
with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']

    # In a real application, you would validate the user here

    user = User.query.filter_by(email=email, password=password).first()
    if user:
        return jsonify(message="Login successful!"), 200
    else:
        return jsonify(message="Login failed!"), 401

if __name__ == '__main__':
    app.run(port=5000)
