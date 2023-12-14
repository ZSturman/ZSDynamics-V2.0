import os
from datetime import datetime
from flask import Blueprint, jsonify, request, current_app, make_response
from flask_restful import Api, Resource
from flask_mail import Mail, Message
from dotenv import load_dotenv


mail=Mail()
mail_bp = Blueprint('mail', __name__)
api = Api(mail_bp)


@mail_bp.record
def record(state):
    app=state.app
    load_dotenv()
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USE_SSL'] = False
    app.config['MAIL_DEFAULT_SENDER'] = ("Zachary from ZSDynamics.com", "ZS@ZSDynamics.com")
    app.config['MAIL_MAX_EMAILS'] = 5

    app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
    app.config['MAIL_ASCII_ATTACHMENTS'] = True

    app.config['HOST'] = 'https://www.zsdynamics.com'

    mail.init_app(app)
    with app.app_context():
        current_app.mail = mail


class Mail(Resource):
    def post(self):
        try:
            data = request.get_json()
            msg = Message("Contact Form Submission",
                          sender=data['email'],
                          recipients=["zasturman@gmail.com"])
            msg.body = f"Name: {data['name']}\nEmail: {data['email']}\nMessage: {data['message']}"

            response_data = {"message": "Email sent successfully"}
            return make_response(jsonify(response_data), 200)

        except Exception as e:
            return make_response(jsonify({"error": str(e)}), 500)



api.add_resource(Mail, '/send_mail')


