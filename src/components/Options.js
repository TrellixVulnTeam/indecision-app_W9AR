
import React from 'react'
import Option from './Option'

 const Options=(props)=>{
    return (
      <div>
      <div
      className='widget-header'
      >
      <h3
      className='widget-header__title'
      >Your Options</h3>
      
      
      <button 
      className='button button--link'
      onClick={props.handleDelete}>
      Remove All
      </button>
      </div>
      <div
      className='widget-message'>
      {props.options.length===0 && <p>Please add an option</p>}
      </div>
     
        {
          props.options.map((option,index)=>(
            <Option key={option}
             optionText={option}
             count={index+1}
             handleDeleteSinlge={props.handleDeleteSinlge}
             />
          ))
        }
      </div>
  )
  
  }
  
  export default Options