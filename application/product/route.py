from flask import Blueprint, render_template

product=Blueprint(
    'product', __name__, static_folder='/static', template_folder='templates',
    url_prefix='/product'
    )

@product.get('/')
def index():
    return render_template('product.html')
