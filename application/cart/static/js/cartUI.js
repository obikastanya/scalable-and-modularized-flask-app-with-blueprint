window.addEventListener('load',function(){
    new Api().callCart().then(new UI().showCart)

})

class Api{
    async callCart(){
        const resp=await fetch(`/cart/api/`)
        const jsonresp=await resp.json()
        return jsonresp
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
    }

    createRecordCartItems(item){
        let row=`
        <tr>
        <th scope="row">${item.index}</th>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><button type="button" class="btn btn-danger cartItem" itemId=${item.id}>Hapus</button></td>
        </tr>
        `
        return row
    }
 }

