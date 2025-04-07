
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive") 
  /*To implement state we have to give style={{}}. we can inject variable directly as it already has double curly braces.
  When we refresh the page, its default color is olive as we have set olive here
*/

  return (
    
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
            //onClick= {setColor("red")} //error

            onClick = {()=>setColor("red")} 
            /*if we directly pass onClick = {setColor} i.e reference of function we cannot pass parameter,but if we onClick = {setColor(red)}, than the return value will be stored in onClick but onClick only expects a call back function and not a return value.*/

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>



              <button 
               onClick = {()=>setColor("blue")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>


            <button
             onClick = {()=>setColor("green")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>

            <button
             onClick = {()=>setColor("olive")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>Olive</button>

            <button
             onClick = {()=>setColor("white")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"white", color:"black"}}>White</button>

          </div>
        </div>

      </div>
    
  )
 
}

export default App
