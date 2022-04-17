
class IndecisionApp extends React.Component{
  constructor(props)
  {
    super(props)
    this.handleDelete=this.handleDelete.bind(this)
    this.handlePick=this.handlePick.bind(this)
    this.handleAdd=this.handleAdd.bind(this)
    this.state={
      options:[]
    }
  
  }

  handleDelete(){
    this.setState(()=>{
      return {
        options:[]
      }
    })
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
    const title="Indecision"
    const subtitle="Computer work"
    
    return(
      <div>

      <Header title={title} subtitle={subtitle}/>

      <Action 
      handlePick={this.handlePick}
      hasOptions={this.state.options.length>0}
      />

      <Options 
      options={this.state.options}
      handleDelete={this.handleDelete}
      />

      <Option/>

      <AddOption
      handleAdd={this.handleAdd}
      />

      </div>
    )
  }
}


class Header extends React.Component{             //header react component
   render(){
     
     return (
     <div>
     <h1>{this.props.title}</h1>
     <h2>{this.props.subtitle}</h2>
     </div>     
       )
      }
}


class Action extends React.Component{            //Action React component
  render(){
    return (
      <div>
        <button 
        onClick={this.props.handlePick}
        disabled={!this.props.hasOptions}
        >
        What should I do ?
        </button>
      </div>
    )
  }
}


class Options extends React.Component{          //Options React component
 

  render(){
    return (
          <div>
          <button onClick={this.props.handleDelete}>Remove All</button>
            <p>Total items :{this.props.options.length}</p>
            {
              this.props.options.map((option)=><Option key={option} optionText={option}/>)
            }
          </div>
    )
  }
}


class Option extends React.Component{          //Option React component
  render(){
    return (
          <div>
           {this.props.optionText}
          </div>
    )
  }
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

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))