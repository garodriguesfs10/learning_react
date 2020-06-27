import React from 'react';


const person = (props) =>{
    return(
        <div>
            
    <h3 key={props.id} onClick={props.click}>Meu nome é {props.name} e tenho {props.age} anos, id: {props.id}</h3>
            {/*<h3>Meu nome é {props.name} e tenho {Math.floor(Math.random()*100)} anos</h3>*/}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;