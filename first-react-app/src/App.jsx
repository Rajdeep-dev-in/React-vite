import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0)
  function addValue(){
    if(counter < 20){
      counter += 1
      setCounter(counter)
      console.log(counter);
    }
    
  }

  let removeValue = () =>{
    if(counter > 0){
      counter -= 1
      setCounter(counter)
      console.log(counter);
    }
    
  }
  
  return(
    <>
      <h1>The Value of Counter is : {counter}</h1>
      <br />
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
  
}

export default App
