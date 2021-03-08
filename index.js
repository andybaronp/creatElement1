import { render } from './lib/react-dom.js'
// import { User } from './component/user.js'
import App from "./component/app.js"
const container = document.querySelector("#root")

// const ash = new User({
//     avatar: './images/ash.jpg',
//     name: 'Ash'
// })

// const c = new User({
//     avatar: './images/ash.jpg',
//     name: 'PiKa'
// })


render(new App(), container)