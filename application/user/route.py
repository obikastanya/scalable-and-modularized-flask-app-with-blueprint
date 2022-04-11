from flask import Blueprint

user=Blueprint(
    'user', __name__, static_folder='/static', template_folder='templates',
    prefix='/user'
    )

@user.get('/')
def index():
    return '<h1>This is user module</h1>'
