


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
const renderApp=()=>{
  const template =(
    <div>
         <h1>{appData.title}</h1>
        {appData.subtitle &&  <p>{appData.subtitle}</p>}
       <p> {appData.options.length>0 ? "here are options": "No options"}</p>
       <p>{appData.options.length}</p>
       <button onClick={rmvClick}>Romeove All</button>
         <ol>
         <li>Item one</li>
         <li>Item two</li>
         </ol>
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



