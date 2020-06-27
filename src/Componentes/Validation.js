import React from 'react'

const validation = (props) =>{

    let msg = 'Texto muito curto'
    if (props.texto >= 5){
        msg = 'O texto está bom!'
    }

    return(
        <div>
            <h5>{msg}</h5>
        </div>
    )

}

export default validation