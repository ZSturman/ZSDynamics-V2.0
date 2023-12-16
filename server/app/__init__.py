import os
from flask import Flask
from flask_cors import CORS
from app.routes.routes import init_routes
from dotenv import load_dotenv
from app.mail.mail_config import mail_bp

def create_app():
    load_dotenv()

    print("create_app")

    app = Flask(__name__)

    static_folder = os.environ.get('STATIC_FOLDER')

    if not os.path.exists(static_folder):
        app_dir = os.path.abspath(os.path.dirname(__file__))
        static_folder = os.path.join(app_dir, '../../client/dist')
    app.static_folder = static_folder

    CORS(app) 
    
    init_routes(app)

    app.register_blueprint(mail_bp, url_prefix='/api')

    return app