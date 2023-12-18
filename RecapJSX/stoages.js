const dataSet =() =>{
   const key =  getInputValue("input-key");
   const value =  getInputValue("input-value");
   console.log(key , value)
   localStorage.setItem(key , value)
}
// get item from localStorages
  const setDataInLocalStorages = () =>{
     
  }
// get input value
const getInputValue = (id) =>{
       const inputValue = document.getElementById(id)
       const value = inputValue.value;
       inputValue.value = "";
       return value;
};