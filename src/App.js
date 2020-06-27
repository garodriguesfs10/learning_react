import React, { useState } from 'react';

import './App.css';
import Person from './Persons/Person/Person'


function App() {
  //primeiro passa o estado inicial no UseState, sempre usa 2 elementos, SEMPRE
  const [personsState, setPersonsState] = useState([{
    persons: [
      { name: 'Gabriel', age: '25' },
      { name: 'Testooo', age: '252' },
      { name: 'eoq', age: '7487' }
    ],
    count: 0
  }])

  const [countState, setCountState] = useState({ count: personsState.count })
  const incrementa = () => {
    setCountState({ count: countState.count + 1 })
  }

  const switchNameHandler = props => {
    setPersonsState({
      persons: [
        { name: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', age: '25' },
        { name: 'Testooo', age: '252' },
        { name: 'eoq', age: '7487' }
      ]
    })
  }



  /* countHandler = () => {
     this.setState({ count: personsState.count + 1 })
   }*/
  function getValue() {
    setPersonsState({
      persons: [
        ...personsState, { name: 'Gabriel', age: 'qweweqwqe' }
      ]
    })
  }

  console.log()

  return (
    <div className="App">
      <h1>From Class</h1>
      <p>This is working!</p>
      <p>{countState.count}</p>
      <button onClick={incrementa}>Incrementar</button>
      <button onClick={switchNameHandler}>Switch Names</button>
      <input itemID='nome' placeholder="Nome:" />
      <input itemID='idade' placeholder="Age: " />
      <button onClick={getValue}>Cadastrar</button>
      {personsState.map(el => (
        <p>{el.persons.values}</p>
      ))

      }
      <Person click={switchNameHandler} name={personsState.map[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

      

    </div>
  )
}


export default App;





/*function getAge(){
return Math.floor(Math.random()*100)
}*/

/*
class App extends Component {

  //trabalhando com estados: state
  state = {
    persons: [
      { name: 'Gabriel', age: '25' },
      { name: 'Testooo', age: '252' },
      { name: 'eoq', age: '7487' }
    ],
    count: 0,
    date: new Date()
  }

  switchNameHandler = () => {
    // dont do this: personsState.persons[0].name = 'oiiiiiiiiii'
    //console.log('Was clicked')
    // setState recebe um objeto como parametro
    this.setState({
      persons: [
        { name: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', age: '25' },
        { name: 'Testooo', age: '252' },
        { name: 'eoq', age: '7487' }
      ]})
  }

  countHandler = () =>{
    this.setState({count: personsState.count + 1})
  }


  render() {
    return (
      <div className="App">
        <h1>From Class</h1>
        <p>This is working!</p>
        <p>{personsState.count}</p>
        <button onClick={this.countHandler}>Incrementar</button>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        /*<Person age={getAge()} />*/
/*<Person name="Gabriel" age='23'>Meu hobbie é codar</Person>*/
/*
<Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
<Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
<Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
</div>
)
}
}
*/

