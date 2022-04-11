from sys import prefix
from flask import Blueprint

cart=Blueprint(
    'cart', __name__, static_folder='/static', template_folder='templates',
    prefix='/cart'
    )

@cart.get('/')
def index():
    return '<h1>This is cart module</h1>'
