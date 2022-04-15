


const appData={
    title:'Indecision App',
    subtitle:'Put your life in the hands of computer',
    options:[]
}
const onFormSubmit=(e)=>{
  e.preventDefault()
  console.log("form")

  const option=e.target.elements.options.value

  if(option)
  {
      appData.options.push(option)
      e.target.elements.options.value=''
      renderApp()
      console.log(appData.options)
  }
}
const rmvClick=()=>{
  appData.options=[]
  renderApp()
}
const makeDecision=()=>{
  const randomNum=Math.floor(Math.random()*appData.options.length)
  const op=appData.options[randomNum]
  alert(op)

}
const renderApp=()=>{
  const template =(
    <div>
         <h1>{appData.title}</h1>
        {appData.subtitle &&  <p>{appData.subtitle}</p>}
       <p> {appData.options.length>0 ? "here are options": "No options"}</p>
       <p>{appData.options.length}</p>
      
         <ol>
      {  appData.options.map((option)=>{
          return <li key={option}>{option}</li>
        })
      }
         </ol>
         <button disabled={appData.options.length===0} onClick={makeDecision}>What should I do</button>
         <button onClick={rmvClick}>Romove All</button>
         <form onSubmit={onFormSubmit}>
            <input type="text" name="options" />
            <button>Add option</button>
         </form>
    </div>
    )
    ReactDOM.render(template,appRoot)

}
  
 
const appRoot=document.getElementById('app')
renderApp()



