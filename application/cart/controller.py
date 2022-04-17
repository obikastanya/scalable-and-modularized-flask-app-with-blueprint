from .model import Cart

class CartController:
    def __init__(self):
        self.model=Cart()
    
    def getCarts(self):
        data=self.model.getCarts()
        if not data:
            return {'status':False, 'data':[data], 'message':'Data is not found'}
        return {'status':True, 'data':[data], 'message':''}

    def getTotalItemsInCart(self):
        data=self.model.getTotalItemsInCart()
        if not data:
            return {'status':False, 'data':[{'total':data}], 'message':'Cant calculate total items in cart'}
        return {'status':True, 'data':[{'total':data}], 'message':''}
  