import './App.css';

function App() {
  const users = [
    {name: "Pedro", age: 21},
    {name: "Ana", age: 20},
    {name: "Jessica", age: 24},
  ]


  return <div className="App">
 
      {users.map((user, key) => {
        return <div>
          <User name = {user.name} age = {user.age} />
        </div>
      })}
      
    </div>

    
    
 }
 const User = (props) => {
  return (
    <div>
        <h1>{props.name} {props.age}</h1>
    </div>
  )
 }
 

export default App;
