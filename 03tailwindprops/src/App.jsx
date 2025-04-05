import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

// function App() {

//   return (
//     <>
//     { <h1 className="bg-yellow-400 text-black p-4 rounded-xl mb-4">Tailwind test  </h1> 

// /*{ <div>
// <img
//   src=" https://images.pexels.com/photos/31133725/pexels-photo-31133725/free-photo-of-streetlamp-amidst-blooming-cherry-blossoms-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//   alt="nft-gif"
//   width="400"
//   height="400"
//   className="rounded-xl"
// />
// </div>
// <div className="flex flex-col  rounded-b-xl py-4 ">
// <div className="flex justify-between">
//   <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
//   <h1 className="font-bold font-RubikBold">Price</h1>
// </div>
// <div className="flex  justify-between font-mono">
//   <p>#345</p>
//   <p>0.01</p>
// </div>
// </div>
//  </div> }
 
 
//  --We commented this div and moved to card.jsx because in react we work with js html and css in one single component and not separately so that whenever we have to change something in it or make a copy of it with different properties we can do it easily. Below, we have 2 <Card></Card> which will show two copies of card components. Now, we can modify these components to add its own props. Props makes the component reusable.
//  */
 
//     }

//       <Card></Card>
//       <Card></Card>

      
      


//     </>
//     /*To check if tailwind is working! if shows that its working..We wrote jsx so class is a reserved for JS so we write className to denote class. We can easily write css using tailwind. In jsx img tag should be a closing tag i.e <img/>    
    
//     */
//   )
// }


/*Now, that we understood how to make components, I have copied the above code and pasted it below to understand what is prop and how can we change values of props */


function App() {

 //We created an object to pass it to our card component down below.

  let myObj = {
    username: "digant",
    age: 21
  }

  //Similiarly, we can create an array too and inject it to card component

  let myArr = [1,2,3]


  return (
    <>
    { <h1 className="bg-yellow-400 text-black p-4 rounded-xl mb-4">Tailwind test  </h1> 
 
    }

      <Card username="chaiaurcode" someObj = {myObj}
      someArr = {myArr} ></Card> 

      
      <Card username="digant" btnTxt="Askhole" ></Card>

    </>
 
    /*In above <Card></Card>, we added channel="chaiaurcode" which will update empty prop object to channel :"chaiaurcode" and also someObj:{name:"digant", age:21}..

    **Note: we can't pass object array directly while calling components instead we created an object and then pass it to card component someObj = {myObj} ..Final value should be inside {}
    
    */
  )
}

export default App
