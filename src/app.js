
class IndecisionApp extends React.Component{
  constructor(props)
  {
    super(props)
    this.handleDelete=this.handleDelete.bind(this)
    this.handlePick=this.handlePick.bind(this)
    this.handleAdd=this.handleAdd.bind(this)
    this.handleDeleteSinlge=this.handleDeleteSinlge.bind(this)
    this.state={
      options:props.options
    }
  
  }

  handleDelete(){
    this.setState(()=>{
      return {
        options:[]
      }
    })
  }
  
handleDeleteSinlge(optionToremove){
  this.setState((prevState) => ({
    options: prevState.options.filter((option) => optionToremove !== option)
  }))

}

  handlePick(){
    const randomNum=Math.floor(Math.random()*this.state.options.length)
    const option=this.state.options[randomNum]
    alert(option)
  }
  handleAdd(option){
    if(!option){
      return 'Enter Valid value to add item'
    }
    else if(this.state.options.indexOf(option)>-1)
    {
      return "Already in list"
    }
    else{
      this.setState((prevState)=>{
        return{
          options:prevState.options.concat([option])
        }
      })
    }
   

  }
  render(){ 
   
    const subtitle="Computer work"
    
    return(
      <div>

      <Header subtitle={subtitle}/>

      <Action 
      handlePick={this.handlePick}
      hasOptions={this.state.options.length>0}
      />

      <Options 
      options={this.state.options}
      handleDelete={this.handleDelete}
      handleDeleteSinlge={this.handleDeleteSinlge}
      />

      

      <AddOption
      handleAdd={this.handleAdd}
      />

      </div>
    )
  }
}


// class Header extends React.Component{             //header react component
//    render(){
     
    
//       }
// }

const Header=(props)=>{

  return (
    <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>     
      )

}

Header.defaultProps={
  title:'Indecison App',


}
IndecisionApp.defaultProps={
  options:[]

}
const Action=(props)=>{              //stateless fuctional componenet
  return (
    <div>
      <button 
      onClick={props.handlePick}
      disabled={!props.hasOptions}
      >
      What should I do ?
      </button>
    </div>
  )
}

// class Action extends React.Component{            //Action React component
//   render(){
  
//   }
// }


// class Options extends React.Component{          //Options React component
 

//   render(){
   
//   }
// }

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

// class Option extends React.Component{          //Option React component
//   render(){
  
//   }
// }
const Option=(props)=>{
  return (
    <div>
     {props.optionText}
     <button 
     onClick={(e)=>{
       props.handleDeleteSinlge(props.optionText)
     }}
     > 
     remove 
     </button>
    </div>
)
}

class AddOption extends React.Component{   //Addoption react component
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


/*
const jsx=(
  <div>
  <IndecisionApp/>
  </div>
)
*/



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))