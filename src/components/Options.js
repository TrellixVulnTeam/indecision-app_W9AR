
import React from 'react'
import Option from './Option'

 const Options=(props)=>{
    return (
      <div>
      <button onClick={props.handleDelete}>Remove All</button>
       
        {
          props.options.map((option)=>(
            <Option key={option}
             optionText={option}
             handleDeleteSinlge={props.handleDeleteSinlge}
             />
          ))
        }
      </div>
  )
  
  }
  
  export default Options