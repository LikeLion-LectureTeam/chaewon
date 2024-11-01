import { Component } from "react";


class MyComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <p>You have clicked {this.state.count} times.</p>
                <button onClick={this.incrementCount}>Click Here.</button>
            </div>
        )
    }
}

export default MyComponents;