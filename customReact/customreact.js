//To simulate how react works:


/*first thing react shows is type, props i.e properties object, children..React libraries are used this way and every elements is written in this way:*/


function customRender(reactElement, container){
  /*
  const domElement = document.createElement
  (reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute("href", reactElement.props.href)
  domElement.setAttribute("target",reactElement.props.target)

  container.appendChild(domElement)
  */ //not recommended way instead we can loop it.

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for(const prop in reactElement.props){
    if(prop === "children") continue;//this line can be ignored
    domElement.setAttribute(prop, reactElement.props[prop])

  }
  container.appendChild(domElement)
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "Click me to visit google"
}



const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer) 
//how do we render our element?? what method??
//So, we used customRender method and we injected reactElement and to mainContainer.
//But what is customRender method??SEE above customRender method that we defined..

