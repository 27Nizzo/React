import './App.css';

function App() {
  const age2 = 17;
  const isGreen = true;
  const users = [
    { name: "Pedro", age: 21},
    { name: "Jake", age: 25 },
    {name: "Jessica", age: 45}
    
  ];

  return <div className="App">

    <div><h1>VIDEO 1 E 2</h1></div>

    <div>
      <User name = "Afonso" age = {19} mail = "afonso.martins8282@gmail.com"/>
      <User name = "Rodrigo" age = {24} mail = "rodriradical@gmail.com"/>
      <User name = "Nicole" age = {56} mail = "nicolecampos@gmail.com"/>
    </div>

    <div>  
      <Job salary = {1200} position = "Junior Dev" company = "Meta"/>
      <Job salary = {3400} position = "Senior Dev" company = "Amazon" />
      <Job salary = {0} position = "Rat" company = "Streets" />
    </div>

    <div>
      <Menu titulo = "Prato 1" prato = "Bacalhau à Brás" preço = {"12$"}  />
      <Menu titulo = "Prato 2" prato = "Massa à Bolonhesa" preço = {"15$"} />
      <Menu titulo = "Prato 3" prato = "Salmão Com Arroz" preço = {"18$"}/>
    </div> 
  
  <div>------------------------------------------------------------------------------------------</div>

  <div><h1>VIDEO 3</h1></div>
    <div>
      <h1 className = "name2">Afonso</h1>
    </div>

  <div className ="App">
    {age2 >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
    <h1 style = {{color: isGreen ? "green" : "red"}}>This has Color</h1>
    {isGreen && <button><h2><em>THIS IS A BUTTON</em></h2></button>}
  </div>
  <div>-------------------------------------------------------------------------------------------</div>
  <div className = "App">
      <h1>{users.map((user, key) => {
        return <div key = {key}>{user.name} {user.age}</div>
      })}</h1>
  </div>
  </div>
}

const props = {
  name: "Afonso",
  age: 19,
  mail: "afonso.martins8282@gmail.com"
}

//Componentes começam sempre por letra maiuscula
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.mail}</h3>
    </div>
  );
}

const props1 = {
  salary: 1200,
  position: "Junior Dev",
  company: "Meta"
}

const Job = (props1) => {
  return (
    <div>
      <h1>{props1.position}</h1>
      <h2>{props1.salary}</h2>
      <h3>{props1.company}</h3>
    </div>
  )
}

const Menu = (props2) => {
  return (
    <div>
      <h1>{props2.titulo}</h1>
      <h2>{props2.prato}</h2>
      <h3>{props2.preço}</h3>
    </div>
    
  )
//----
const Users1 = (props3) => {
  return (
    <div>
      {props3.name} {props3.age}
    </div>
  )  
}

}


export default App;
