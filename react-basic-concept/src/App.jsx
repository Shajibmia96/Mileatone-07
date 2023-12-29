import "./App.css";
import Cart from "./Component/Cart";

 


function App() {

  const students =[
    {
      "id": 1,
      "name": "John Doe",
      "age": 25,
      "city": "New York"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 30,
      "city": "Los Angeles"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "age": 22,
      "city": "Chicago"
    }
  ]

  return (
    <div className="container mx-auto">
        <h1 className="text-3xl text-center">Wellcome to my web pase</h1>
           <div className="grid grid-cols-3 gap-5">
             
          {
            students.map(item => <Cart key={item.id} name={item.name} age={item.age}></Cart>)
          }
             
           </div>
    </div>
  );
}

export default App;
