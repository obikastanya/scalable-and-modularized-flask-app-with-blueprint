from flask import Flask
from application.user.route import user
from application.cart.route import cart
from application.product.route import product

app=Flask(__name__)

@app.get('/')
def index():
    return '<h1>Main menu<h1>'


app.register_blueprint(user)
app.register_blueprint(cart)
app.register_blueprint(product)

if __name__=='__main__':
    app.run(debug=True, port=8887)