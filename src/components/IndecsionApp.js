
import React from 'react'

import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'

import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component{
  state={
    options:[],
    selectedOption:undefined
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
  
    componentDidUpdate (prevProps,prevState){
      if(prevState.options.length!==this.state.options.length)
      {
      const json=JSON.stringify(this.state.options)
      localStorage.setItem('options',json)
        
      }
    }
  
    handleDelete=()=>{
      this.setState(()=>{
        return {
          options:[]
        }
      })
    }
    
    handleClearSelectedOption=()=>{
      this.setState({
        selectedOption: undefined
      })
    }

    handleDeleteSinlge=(optionToremove)=>{
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToremove !== option)
    }))
  
    }
  
    handlePick=()=>{
      const randomNum=Math.floor(Math.random()*this.state.options.length)
      const option=this.state.options[randomNum]
     // alert(option)

     this.setState({
      selectedOption: option
     })

    }
    handleAdd=(option)=>{
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
     
      const subtitle="Choose your task"
      
      return(
        <div>
        <Header subtitle={subtitle}/>
        <div className='container'>
      
  
        <Action 
        handlePick={this.handlePick}
        hasOptions={this.state.options.length>0}
        />
  <div
  className='widget'>
  <Options 
        options={this.state.options}
        handleDelete={this.handleDelete}
        handleDeleteSinlge={this.handleDeleteSinlge}
        />
        <AddOption
        handleAdd={this.handleAdd}
        />
  </div>
        
  
        
  
        

        </div>
        
        <OptionModal
        selectedOption={this.state.selectedOption}
        handleClearSelectedOption={this.handleClearSelectedOption}
        />
  
        </div>
      )
    }
  }
  
  
  
  IndecisionApp.defaultProps={
    options:[]
  
  }
  