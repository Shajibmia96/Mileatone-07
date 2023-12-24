const getLSData = () =>{

     const LSString = localStorage.getItem("cart")
     if(LSString){
        return JSON.parse(LSString)
     }
     return []
}

const savedLSData = id => {
         const cart = getLSData()
         cart.push(id)
         addLSData(cart)
        
}
 export {savedLSData}

const addLSData = cart=>{
     const cartStringified = JSON.stringify(cart)
     localStorage.setItem("cart" , cartStringified)
}