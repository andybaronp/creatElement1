import { render } from "../../react-dom.js"


function renderChildren(children, container) {

  if (Array.isArray(children)) {

    return children.forEach(child => render(child, container))
  }


  return render(children, container)
}

function setPropperties(prop, value, element) {
  // supor for children
  if (prop === 'children') {
    return renderChildren(value, element)
  }


  // suport for atribute
  const attribute = value
  return element.setAttribute(prop, attribute)
}




export function createElement(type, props, content) {

  // creando type de elemento
  const element = document.createElement(type)

  // propiedades
  if (props) {

    Object.keys(props).forEach(prop =>
      setPropperties(prop, props[prop], element))
  }



  // contenido
  if (content) {
    element.textContent = content
  }

  return element

}

