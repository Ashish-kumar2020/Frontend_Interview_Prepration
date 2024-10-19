const products = [
  { id: 1, name: "Product A", price: 20, category: "Electronics" },
  { id: 2, name: "Product B", price: 30, category: "Clothing" },
  { id: 3, name: "Product C", price: 15, category: "Electronics" },
  { id: 4, name: "Product D", price: 25, category: "Clothing" },
  { id: 5, name: "Product E", price: 50, category: "Electronics" },
  { id: 6, name: "Product F", price: 40, category: "Electronics" },
];

const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];

function App() {
  return (
    <>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            {prod.name} and the price is : {prod.price} and the product category
            is : {prod.category}
          </li>
        ))}
      </ul>
      <h2>FIltering the product based on Electronics Category</h2>
      <ul>
        {products
          .filter((cat) => cat.category === "Electronics")
          .map((prod) => (
            <li key={prod.id}>
              {prod.name} and the price is : {prod.price} and the product
              category is : {prod.category}
            </li>
          ))}
      </ul>
      <h2>Return the Total price of All Category</h2>
      Total Price - ${""}
      {products.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0)}
      <h2>
        Return the product price after giving 10% discount on all products
      </h2>
      <ul>
        {products
          .filter((prod) => prod.price > 20)
          .map((prod) => ({
            ...prod,
            discountedPrice: prod.price - prod.price * (10 / 100),
          }))
          .map((prod) => (
            <li key={prod.id}>
              {prod.name} - Original Price : {prod.price} and Discounted Price :{" "}
              {prod.discountedPrice}
            </li>
          ))}
      </ul>
      <h2>Return unique names from the above array- names</h2>
      <ul>
        {names
          .filter((name, index) => names.indexOf(name) === index)
          .map((name) => (
            <li key={name.id + 1}>{name}</li>
          ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
