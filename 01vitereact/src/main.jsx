import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

 /*This is MyApp function created by react itself. */

function MyApp(){
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
 
}

 //Can we directly inject object in our case reactElement in MyApp function and call <ReactElement/>??

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank"
//   },
//   children: "Click me to visit google"
// }
/*Injecting ReactElement object didn't work in our case because our ReactElement object is a custom react so we can define how it should be rendered but in this example we are using rendering method that has been created by react itself. So, it has it's syntax which is expected to be followed if we were to render our object and execute it.

*/

/*Here, we created a function that follows requirement of react rendering as we are importing it from react*/

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>,
  username
)



/*Now, we will make 2 steps above ReactElement object in accordance to react as we are importing from react
*/

const reactElement = React.createElement(
  "a",
  {href: "https://google.com", target:"_blank" },
  "click me to visit google"
)

/* Syntax for react: 

   1st parameter expected = a tag, 
    
   2nd parameter expected =  an object just {}.
   Inside the object, we give only the attributes of the properties i.e href = "https://www.google.com", target: "_blank" and many more attributes as we like. We can leave it blank if no attributes.

   3rd parameter expected = direct text in our case
   "Click me to visit google"

 
*/

 ReactDOM.createRoot(document.getElementById('root')).render(

    // </ReactElement>

    //We called ReactElement function but we didn't get "a"..But why?

    //But ReactElement is an object so if we directly use object, will it show up?

    //ReactElement 
    //we called our ReactElement object but still it didn't show a tag on the page..But why??

    /*To look into the matter go to webpage inspect -->console and see the error msg---> reactElement is not defined...
    
    --The ReactElement object we created was a custom react object but the rendering method i.e createRoot(document.getElementById('root')).render(ReactElement)
    is written by react itself.
     So, there is a particular syntax for an object i.e 
     type, children, props, parameter that are expected from an object..

*/

//Now, we created anotherElement above and called it here, what will happen?

//AnotherElement
//webpage shows Click me to visit google.. AnotherElement is converted to object.
    

//reactElement
//displays "click me to visit" on webpage


 App
 //prints chai is served 
 //chai aur react: chai aur code
)

