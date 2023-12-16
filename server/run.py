import os
from app import create_app

app = create_app()

port = int(os.environ.get("PORT", 5005))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)



""" from appv2 import create_app

app = create_app()

if __name__ == '__main__':
    app.run()
 """