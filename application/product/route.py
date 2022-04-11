from flask import Blueprint

product=Blueprint(
    'product', __name__, static_folder='/static', template_folder='templates',
    url_prefix='/product'
    )

@product.get('/')
def index():
    return '<h1>This is product module</h1>'
