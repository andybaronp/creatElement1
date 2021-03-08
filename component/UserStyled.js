import { Component } from "../lib/React/src/React.js"
import styled from "../lib/styleComponent.js"
 

const UserStyled = styled.div`

background-image: linear-gradient(to bottom, #f9f9f9 0%, #f9f9f9 130px,rgba(0,0,0,.15) 130px, rgba(0,0,0,.15) 131px, white 131px, white 100%);
  text-align: center;
  overflow: hidden;
  padding: 20px;
  font-family: system-ui;
  border-radius: .3rem;
  box-shadow: 0 0 1px rgba(0,0,0,.5);
  cursor: pointer;
  user-select: none;

`
const AvatarStyled = styled.img`
  max-width: 150px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 0 2px black;
`

class User extends Component {
    render() {
const {  name } = this.props

    return `
    ${UserStyled(`

    
${AvatarStyled('src="./images/ash.jpg" ')    }

    <h2> ${name} </h2>
        `)}
        `
    }
        
}


export  default User










