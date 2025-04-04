//To simulate how react works:


/*first thing react shows is type, props i.e properties object, children..React libraries are used this way and every elements is written in this way:*/

//3rd Step: We created customRender function:

function customRender(reactElement, container){
  /*
  const domElement = document.createElement
  (reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute("href", reactElement.props.href) // href and its value is reactElement.props
  domElement.setAttribute("target",reactElement.props.target) // same as above

  container.appendChild(domElement)

  not recommended as any addition of attributes or tag will be problematic so we use loop instead..
  */

  //Using Loop below:

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for(const prop in reactElement.props){
    if(prop === "children") continue;//this line can be ignored as we dont have children.
    domElement.setAttribute(prop, reactElement.props[prop]) //here we used for in loop

  }
  container.appendChild(domElement)
}



//This is to show how react element work..

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "Click me to visit google"
}


//1step: We grab our root from index.html

const mainContainer = document.getElementById("root")

//2nd step: We have to render it:

customRender(reactElement, mainContainer) 

//how do we render our element?? what method??

//So, we used customRender method and we injected reactElement and to mainContainer.

//But what is customRender method??SEE above customRender method that we have defined..

