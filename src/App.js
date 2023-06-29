import './App.css';

function App() {

  return <div className="App">

    <div>
      <User name = "Afonso" age = {19} mail = "afonso.martins8282@gmail.com"/>
      <User name = "Rodrigo" age = {24} mail = "rodriradical@gmail.com"/>
      <User name = "Nicole" age = {56} mail = "nicolecampos@gmail.com"/>
    </div>

      <Job salary = {1200} position = "Junior Dev" company = "Meta"/>
      <Job salary = {3400} position = "Senior Dev" company = "Amazon" />
      <Job salary = {0} position = "Rat" company = "Streets" />
  </div>
}

/*const props = {
  name: "Afonso",
  age: 19,
  mail: "afonso.martins8282@gmail.com"
}*/

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

/*const props1 = {
  salary: 1200,
  position: "Junior Dev",
  company: "Meta"
}*/

const Job = (props1) => {
  return (
    <div>
      <h1>{props1.position}</h1>
      <h2>{props1.salary}</h2>
      <h3>{props1.company}</h3>
    </div>
  )
}


export default App;
