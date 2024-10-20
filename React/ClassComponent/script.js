function App() {
  return (
    <>
      <h1>Functional Vs Class Based Component</h1>
      <Counter />
    </>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 0,
    };
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  incrementCounter1 = () => {
    this.setState({
      count1: this.state.count1 + 1,
    });
  };

  componentDidMount() {
    console.log(
      "When ever the component gets loaded this lifecycle method is called - componentDidMount"
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(
        "This is called whenever the state changes - main use of this is to call the api it is same as useEffect hook in functional Component"
      );
    }
  }

  componentWillUnmount() {
    console.log(
      "This is called at the very end.Main purpose of this is clean the component from the DOM"
    );
  }

  render() {
    return (
      <div>
        <p>Counter : {this.state.count}</p>
        <p>Counter1 : {this.state.count1}</p>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.incrementCounter1}>Increment1</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
