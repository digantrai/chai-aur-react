//Here we made a card component.

import React from "react" 

// function Card(props){
    //console.log(props);

    /*it is an empty object so we can fill it by simply inserting the value in <Card></Card> in App.jsx and whatever value given will be modified in the page */

    //After creating username while calling card on app.jsx, we can access username here by simply 

    // console.log(prop.username); 
    // prints chai aur code


    //IN above code, we can avoid writing prop.username by simply de-constructing our object shown below:

    function Card({username, btnTxt ="visit me"}){
      console.log(username);
      //prints chaiaurcode 


  return (
 <div className="flex flex-col rounded-xl  p-4"
   style={{
     border: '0.88px solid',

     backdropFilter: 'saturate(180%) blur(14px)',
     background: ' #ffffff0d',
   }}
 >
   <div>
     <img
       src=" https://images.pexels.com/photos/31133725/pexels-photo-31133725/free-photo-of-streetlamp-amidst-blooming-cherry-blossoms-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
       alt="nft-gif"
       width="400"
       height="400"
       className="rounded-xl"
     />
   </div>
   <div className="flex flex-col  rounded-b-xl py-4 ">
     <div className="flex justify-between">
       <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
       <h1 className="font-bold font-RubikBold">Price</h1>
     </div>
     <div className="flex  justify-between font-mono">
       <p>#345</p>
       <button>{btnTxt}</button>
       <p>0.01</p>
     </div>
   </div>
   <h2>{username}</h2>

 </div>
  )
}

export default Card