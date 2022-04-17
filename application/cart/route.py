from flask import Blueprint, render_template
from .controller import CartController

cart=Blueprint(
    'cart', __name__, static_folder='static', template_folder='templates',
    url_prefix='/cart'
    )

@cart.get('/')
def index():
    return render_template( 'cart.html')

@cart.get('/api/')
def listOfCartItems():
    return CartController().getCarts()


@cart.get('/api/total-items')
def totalOfCartItems():
    return CartController().getTotalItemsInCart()