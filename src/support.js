const userName='Mike'

const getLocation=(location)=>{
    if(location)
    return <p>Location: {location}</p>
  
}

const user={
     name:"sart",
     age:25,
     location:"dehradun"
 }
let count=0

const addOne=()=>{
  count++
  renderCounterApp()
}

const minOne=()=>{
  count--
  renderCounterApp()
}

const reset=()=>{
  count=0
  renderCounterApp()
}
const renderCounterApp=()=>{
    const templateTwo=(
        <div>
        <h1>Count: {count}</h1>           
        <button onClick={addOne} className="button">+1</button>
        <button onClick={minOne} className="button">-1</button>
        <button onClick={reset} className="button">reset</button>
        </div>
    )
   

}


renderCounterApp()