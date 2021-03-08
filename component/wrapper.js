
import { Component, createElement } from "../lib/React/index.js"

class Wrapper extends Component {
    render() {
        const { children } = this.props
        return createElement('div', {
            class: 'wrapper',
            children
        })

    }
}

export default Wrapper