import './App.css';

function App() {

  return <div className="App">

    <div>
      <User name = "Afonso" age = {19} mail = "afonso.martins8282@gmail.com"/>
      <User name = "Rodrigo" age = {24} mail = "rodriradical@gmail.com"/>
      <User name = "Nicole" age = {56} mail = "nicolecampos@gmail.com"/>
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


export default App;
