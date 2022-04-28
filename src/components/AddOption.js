
import React from 'react'

export default class AddOption extends React.Component{   //Addoption react component
    constructor(props)
    {
      super(props)
      this.handleAdd=this.handleAdd.bind(this)
      this.state={
        error:undefined
      }
    }
     handleAdd(e){
            e.preventDefault()
            const option=e.target.elements.option.value.trim()
           const error= this.props.handleAdd(option)
           this.setState(()=>{
             return {error}
           })
           if(!error){
             e.target.elements.option.value=''
           }
            
     }
     render(){
       return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                 <form onSubmit={this.handleAdd}>
                   <input type="text" name="option" />
                   <button>Add option</button>
                 </form>
           </div>
   
              )
     }
   }

