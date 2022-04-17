
window.addEventListener('load',function(){
    console.log('woooke')
    new Api().callProducts().then(new UI().showProducts)

})

class Api{
    async callProducts(){
        const resp=await fetch('/product/api/')
        const jsonresp=await resp.json()
        return jsonresp
    }
}

class UI{
    constructor(){
        this.showProducts=this.showProducts.bind(this)
    }

    showProducts(apiresp){
        if (!apiresp.status) return this.showNoDataFoundPage;
        let productCards=[]
        for (let product of apiresp.data){
            let card=this.createCard(product)
            productCards.push(card)
        }
        return new Page().loadPage( productCards.join(''))

    }
    showNoDataFoundPage(){
    }

    createCard(product){
        const cardTemplate=`
        <div class="col-sm-3">
            <div class="card m-2" style="width: 18rem;">
              <a href="/product">  
              <img src="${product.images}" class="card-img-top" height="250">
              </a>  
              <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  Rp. <h6 class="text-danger d-inline">${product.price}</h6>
                  <p class="card-text">${product.desc}</p>
                  <a href="#" class="btn btn-primary">Add to cart</a>
                </div>
              </div>
        </div>
        `
        return cardTemplate
    }
}

class Page{
    loadPage(page){
        let productListElement=document.getElementById('productListId')
        productListElement.innerHTML=page
    }
}