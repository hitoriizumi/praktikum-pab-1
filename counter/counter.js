// // function component
// const FunctionComponent = () => {
//     const  [count, setCount] = React.useState (0)

//     const incrementCount = () => {
//         setCount (count + 1);
//     }

//     const decrementCount = () => {
//         setCount (count - 1);
//     }

//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={decrementCount}>-1</button>
//             <button onClick={incrementCount}>+1</button>
//         </div>
//     )
// }

// class component
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
  
    increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
  
    decreaseCount = () => {
        this.setState({ count: this.state.count - 1 });
    };
  
    render() {
        return (
            <div>
            <h2><strong>{this.state.count}</strong></h2>
            <div>
                <button onClick={this.decreaseCount}>-1</button>
                <button onClick={this.increaseCount}>+1</button>
            </div>
            </div>
        );
    }
}

ReactDOM.render(<ClassComponent />, document.getElementById('root'));