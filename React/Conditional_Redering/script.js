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
      <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <img src="image.jpg" alt="example" />
        <p>This card displays an image and some text.</p>
      </Card>
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

function Card({ children }) {
  return <div className="card">{children}</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
