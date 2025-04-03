
import Chai from "./Chai"

function App() {

  return (
    
    // <h1>Chai aur React with Vite | 
    //   Vite is a better alternative to create a react project as it is faster and less bulkier compared to creating react project using react. 
      
    //   To create vite project:
    //   1. In terminal npm createvite@latest
    //   2. Choose project name
    //   3. Choose script -- React: 2 steps down
    //   4. Choose variant -- Javascript: 2steps down
    //   5. create

    //   Vite doesn't include node_modules so to install it :In terminal:
    //  npm i ---will install node_modules

    //  To run Vite project:

    //  npm run dev ---gives url for local host

    //  **Note: To see commands used in Vite check: package.json




    //</h1>


    <>

    <Chai/> //shows Chai is served in website
    </>
    /* In jsx we can only export/return only element and should be wrapped in a parenthesis. So, we wrap multiple elements in a single <div> element. 
    So, empty div is now modified as <> which is called a fragment.
    In above code we have used <>...</>  */
  )
}

export default App
