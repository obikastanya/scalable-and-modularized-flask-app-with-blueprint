from flask import Blueprint, render_template

cart=Blueprint(
    'cart', __name__, static_folder='/static', template_folder='templates',
    url_prefix='/cart'
    )

@cart.get('/')
def index():
    return render_template( 'cart.html')
