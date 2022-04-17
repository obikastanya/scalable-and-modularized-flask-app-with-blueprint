
window.addEventListener('load',function(){
    new ApiNotif().callChartNotif().then(new UINotif().showCartNotif)
})

class ApiNotif{
    async callChartNotif(){
        const resp=await fetch('/cart/api/total-items')
        const jsonresp=await resp.json()
        return jsonresp
    }
}

class UINotif{
    constructor(){
        this.showCartNotif=this.showCartNotif.bind(this)
    }

    showCartNotif(apiresp){
        if (!apiresp.status) return this.showNoDataFoundPage;
        document.getElementById('notifId').innerHTML=apiresp.data[0].total;        
    }
    showNoDataFoundPage(){
    }

}
