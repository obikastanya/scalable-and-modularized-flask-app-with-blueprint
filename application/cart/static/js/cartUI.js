window.addEventListener('load',function(){
    new Api().callCart().then(new UI().showCart)
})

class Api{
    async callCart(){
        const resp=await fetch(`/cart/api/`)
        const jsonresp=await resp.json()
        return jsonresp
    }

    async removeItemFromCart(){
        const resp=await fetch('/cart/api/',
            {
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'productId':'1'})
            }
        )
        const jsonresp=await resp.json()
        console.log(jsonresp)
        new ApiNotif().callChartNotif().then(new UINotif().showCartNotif)
        new Api().callCart().then(new UI().showCart)
    }
}

class UI{
    constructor(){
        this.showCart=this.showCart.bind(this)
    }

    showCart(apiresp){
        const cart=apiresp.data[0].items
        const records=[]
        for (let [index, item] of cart.entries()){
            item.index=index+1
            records.push(this.createRecordCartItems(item))
        }

        let cartTable=document.getElementById('cartItemList')
        cartTable.innerHTML=records.join('')
        new UI().registerListenerToRemoveItem()
    }

    createRecordCartItems(item){
        let row=`
        <tr>
        <th scope="row">${item.index}</th>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><button type="button" class="btn btn-danger button-action-remove" itemId=${item.id}>Hapus</button></td>
        </tr>
        `
        return row
    }

    registerListenerToRemoveItem(){
        const listOfActionButton=document.getElementsByClassName('button-action-remove')
        for (let element of listOfActionButton){
            element.addEventListener('click', function(){
            new Api().removeItemFromCart()
            })
        }
    }
 }

