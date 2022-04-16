import json
import pathlib

class Product:
    def __init__(self):
        self.collections=json.load(self.openDb())
        
    def openDb(self):
        return open(pathlib.Path().cwd()/'db.json')
    
    def get(self):
        return self.collections.get('products',[])
