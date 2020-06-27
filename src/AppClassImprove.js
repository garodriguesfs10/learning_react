import React, { Component } from 'react'
import Person from './Persons/Person/Person'
import Validation from './Componentes/Validation'
import Char from './Componentes/CharComponent'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

class AppClass extends Component {

    state = {
        persons: [
            { id: 1, name: 'Gabriel', age: 25 },
            { id: 2,name: 'Dev', age: 10 },
            { id: 3,name: 'Teste', age: 38 }
        ],
        userInput: ''        
    }

    deleteHandler = (index) => {
        let personsss = this.state.persons
        personsss.splice(index,1)
        this.setState({persons:personsss})
    }

    HandlerNameChanged = (event, index) =>{
        let nome = event.target.value       
        
        const personIndex = this.state.persons.findIndex(p =>{
            return p.id === index
        })
        //console.log('Person index: '+personIndex)
        const person = {...this.state.persons[personIndex]}
        person.name = event.target.value
        const persons = [...this.state.persons]
        persons[personIndex] = person
        this.setState({persons:persons})
    }

    HandlerInput = (event) =>{
        const input = event.target.value  
        this.setState({userInput:input})
    }

    HandlerDeleteChar = (index) =>{
        const texto = this.state.userInput.split('')
        texto.splice(index,1)
        const newText = texto.join('')
        this.setState({userInput:newText})
    }

    addtoPerson = () =>{
        const newPerson = {id:this.state.persons.length+1,name:this.state.userInput,age:25}
        const newPersons = [...this.state.persons,newPerson]        
        this.setState({persons:newPersons})
    }
  
    render(){
        const persons = this.state.persons
        const charList = this.state.userInput.split('').map((elem,index)=>{
            return <Char char={elem} delete={() => this.HandlerDeleteChar(index)}/>
        })

        return(
            <div className='container'>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                {persons.map((elem,index)=>{
                    return (
                    <Person click={() => {this.deleteHandler(index)}} name={elem.name}
                     age={elem.age} key={elem.id} changed={(event) => this.HandlerNameChanged(event, elem.id)}/>
                    )
                })}

            <br/>
            <input type='text' onChange={(event) => this.HandlerInput(event)} value={this.state.userInput}/>
            <button className='btn btn-success' onClick={this.addtoPerson}>Adicionar</button>
            <label>Texto: {this.state.userInput}</label>
            <Validation texto={this.state.userInput.length}/>
            {charList}
            <button className='btn btn-danger'>Testeee</button>
            </div>
        )


    }

  
}

export default AppClass