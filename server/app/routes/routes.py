from flask import send_from_directory, redirect
import os


def init_routes(app):    
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')
        
        
    @app.route('/outdated_portfolio')
    def redirect_to_old_portfolio():
        return redirect("http://zsdynamics.com/outdated_portfolio", code=302)
