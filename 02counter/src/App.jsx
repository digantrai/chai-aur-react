import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //using useState hook: inside (), it can be anything like parameter, object, function, boolean etc

  const [counter, setCounter] = useState(15)
 /*In useState we get two states in a form of array. First
 is we get counter(can be any name) which is a variable and second one is a function/method which is usually setCounter. setCounter is a method that will control our counter variable.
 Now, what happens is, whenever counter variable is present, it displays updated value of counter. NO need to write document.elements , get references etc.
 */

 //let counter = 15 

  /*we commented this variable as it will never be updated it in UI; useState hook is used instead with counter variable */

  //To addValue:

 const addValue = ()=>{
  //console.log("value added", Math.random()); 
  //randomly generates value when addValue button is clicked

  //counter = counter + 1; 

 // console.log("clicked", counter);
  /*prints 16,17,18... everytime its add value is clicked.
  But, in UI it is not updated..In react, to control variables as to where it should be updated in UI, hooks are used..
  */

  //setCounter(counter);

  if(counter >= 20){
    return false
  }
  else{
  setCounter(counter +1);
  console.log("clicked", counter);}
  
   /*error assignment to constant variable because our counter variable is constant, if let than will work..
   But, we can directly setCounter(counter + 1) and it will update the value in UI everywhere counter is present(note we need to comment counter= counter + 1 in our case)*/
 }

 //To remove Value:

 const removeValue = ()=>{
  if(counter < 1) {
   return false;
  }
  else{
  setCounter(counter -1);
  console.log("clicked", counter);}
//Will remove value by -1 in every click


 }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    
    >Add value {counter}</button> 
    <br></br>
    <button
    onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
