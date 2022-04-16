from .model import Product

class ProductController:
    def __init__(self):
        self.model=Product()

    def get(self):
        data=self.model.get()
        print(data)
        if not data:
            return {'status':False, 'data':data, 'message':'Data is not found'}
        return {'status':True, 'data':data, 'message':''} 