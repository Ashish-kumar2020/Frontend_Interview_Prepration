function App() {
  let obj = {
    name: "Ashish",
    // getAddress: {
    //   city: "Bijnor",
    // },
  };
  return (
    <>
      <h1>Conditional Rendring</h1>;<h2>Optional Chaining</h2>
      {/* This does not gives the eror on the page */}
      {obj?.getAddress?.city}
      {/* <NullishCoalishingOperator /> */}
      {/* Using Children Props */}
      <WrapperComponent>
        <h1>Hi From Children Props</h1>
        <p>Testing Children props</p>
      </WrapperComponent>
    </>
  );
}

const NullishCoalishingOperator = () => {
  let user = null;
  let secuser = "Hello, I am second user";
  //   return <p>{user ? user : secuser}</p>;  this is the tradional method
  // using NullishCoalishingOperator
  return <p>{user ?? secuser}</p>;
};

function WrapperComponent({ children }) {
  return <div>{children}</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
