window.addEventListener('load',function(){
    new Api().callProduct().then(new UI().showProduct)

})

class Api{
    async callProduct(){
        const productId=1
        const resp=await fetch(`/product/api/${productId}`)
        const jsonresp=await resp.json()
        return jsonresp
    }
}

class UI{
    constructor(){
        this.showProduct=this.showProduct.bind(this)
    }

    showProduct(apiresp){
        if (!apiresp.status) return this.showNoDataFoundPage();
        const getEl=(id)=>document.getElementById(id);
        const product=apiresp.data[0]
        getEl('productName').innerHTML=product.name
        getEl('productDesc').innerHTML=product.desc
        getEl('type').innerHTML=product.type
        getEl('brand').innerHTML=product.brand
        getEl('stock').innerHTML=product.stock
        getEl('weight').innerHTML=product.weight
        getEl('price').innerHTML=product.price
    }
 }

