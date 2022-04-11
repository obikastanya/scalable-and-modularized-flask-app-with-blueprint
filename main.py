from flask import Flask

app=Flask(__name__)

@app.get('/')
def index():
    return '<h1>Main menu<h1>'



if __name__=='__main__':
    app.run(debug=True, port=8887)