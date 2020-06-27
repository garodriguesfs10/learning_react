import React from 'react'

const char = (props) =>{
    const style = {
        display:'inline-block',
        padding:'16px',
        border:'1px solid black',
        textAlign:'center',
        margin:'2px'
    }

    return(
        
            <div style={style} onClick={props.delete}>
                {props.char}
            </div>
       
    )

}

export default char