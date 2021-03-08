import { Component, createElement } from "../lib/React/index.js"
import { User } from "./user.js"
import Wrapper from "./wrapper.js"
// import UserStyleld  from "./UserStyled.js"


// const element = createElement('h1', {
//     class: 'title'
// }, "HOLA ELEMENT")



class App extends Component {
    render() {
        return createElement('div', {
            class: 'prueba',
            children:
                createElement('div', {
                    class: 'app',
                    children: new Wrapper({
                        children: [

                            new User({

                                name: 'Ash',
                                avatar: './images/ash.jpg'
                            })
                        ]
                    })
                })
        })

    }
}


export default App



// ${
//     new Wrapper({

//         children: `
//                 <h1> React Js  ⭐🌟✨ </h1>

//                   ${new User({
//             avatar: ,
//             name: 'Ash'
//         }).render()
//             }

//                 `
//     }).render()
// }
// ${
//     new UserStyleld({

//         name: 'ASH STYLED'
//     }).render()
// }
