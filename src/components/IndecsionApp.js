
import React from 'react'

import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'

export default class IndecisionApp extends React.Component{
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
    componentDidMount(){
     try{
      const json=localStorage.getItem('options')
      const options=JSON.parse(json)
     if(options)
     {
      this.setState(()=>({options}))
  
     }
     }catch(e)
     {
  
     }
     
    }
  
    componentDidUpdate(prevProps,prevState){
      if(prevState.options.length!==this.state.options.length)
      {
      const json=JSON.stringify(this.state.options)
      localStorage.setItem('options',json)
        
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
  
  
  
  IndecisionApp.defaultProps={
    options:[]
  
  }
  