import React from 'react';

interface Props {

}

interface State {
    count: number;
}

class App extends React.Component<Props, State> {
    state: State = {
        count: 0
    }

    add = ():void => {
        this.setState(
            ({count}) => ({count: count + 1}))
    }

    minus = ():void => {
        this.setState(
            ({count}) => ({count: count - 1})
        )
    };

    componentDidMount() {
        console.log("component rendered")
    }

    componentDidUpdate() {
        console.log("component updated")
    }

    componentWillUnmount() {
        console.log("Good bye")
    }

    render() {
        console.log("I'm rendering...")
        return (
            <div className="App">
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;
