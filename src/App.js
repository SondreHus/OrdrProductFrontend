import "./App.css";

import products from "./data/products.json";
import Menu from "./components/MenuAndHighlight";

function App() {
  console.log(products);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to <i>La Rem-Ipsum</i>, home of the frozen ball
        </p>
        <Menu productList={products}></Menu>
        <p>Disclosure: Some of the items on this menu may be edible</p>
      </header>
    </div>
  );
}

export default App;
