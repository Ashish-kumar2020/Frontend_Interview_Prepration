function Counter() {
  const [count, setCount] = React.useState(0);

  const increament = () => {
    setCount(count + 1);
  };

  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement("p", null, `Count : ${count}`),
  //     React.createElement("button", { onClick: increament }, "Increment")
  //   );

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increament}>Increment</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));
