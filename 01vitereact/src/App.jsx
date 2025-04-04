
import Chai from "./Chai"

// function App() {

//   return (
    
//     // <h1>Chai aur React with Vite | 
//     //   Vite is a better alternative to create a react project as it is faster and less bulkier compared to creating react project using react. 
      
//     //   To create vite project:
//     //   1. In terminal npm createvite@latest
//     //   2. Choose project name
//     //   3. Choose script -- React: 2 steps down
//     //   4. Choose variant -- Javascript: 2steps down
//     //   5. create

//     //   Vite doesn't include node_modules so to install it :In terminal:
//     //  npm i ---will install node_modules

//     //  To run Vite project:

//     //  npm run dev ---gives url for local host

//     //  **Note: To see commands used in Vite check: package.json




//     //</h1>


//     <>

//     <Chai/> 
    
//     </>
//     /* In jsx we can only export/return only element and should be wrapped in a parenthesis. So, we wrap multiple elements in a single <div> element. 
//     So, empty div is now modified as <> which is called a fragment.
//     In above code we have used <>...</>  */
//   )
// }

/* Commenting and copying above function App to how can we inject variables iin a function..
*/
function App() {

  const username = "chai aur code"

  /*We have username variable here, so how do we inject it in our code? use {}..*Note that inside {}, we can only inject the final value of JS also called evaluated expression and not the expression i.e if/else,loop etc. If we need to use if/else,loop write it outside. 
  
  The reason why we can't write expression inside {} is because App() is imported to main.jsx and in main.jsx, elements are converted into an object and in object we can't write if/else or loop. So, we need to inject evaluated JS only i.e in our case if we want to inject username in main.jsx object we can directly write username variable which will display its value as "chai aur code".
  
  */

  return (

    <>

    <Chai/> 
    <h1>chai aur react : {username} </h1>
   
    </>
 
  )
}
export default App
