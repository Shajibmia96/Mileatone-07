const getLSData =() =>{
    const storedCardStringed = localStorage.getItem("cart")
    if(storedCardStringed){
        return JSON.parse(storedCardStringed)
    }return []
};


const saveLSData =cart =>{
    const cardStringified = JSON.stringify(cart)
    localStorage.setItem("cart" , cardStringified)
}

const setLSData = id =>{
    const cart = getLSData()
    cart.push(id)
    saveLSData(cart)
}

export {setLSData}