import json
import pathlib

class Cart:
    def __init__(self):
        self.collections=json.load(self.openDb())
        
    def openDb(self):
        return open(pathlib.Path().cwd()/'db.json')
    
    def getCarts(self):
        users=self.collections.get('carts')
        return users[0]

    def getTotalItemsInCart(self):
        users=self.collections.get('carts')
        return len(users[0].get('items',[]))