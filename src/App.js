import "./App.css";
import { useState } from "react";
import MenuContainer from "./Components/MenuContainer";
import Product from "./Components/Product";
import Header from "./Components/Header";
import EmptyProduct from "./Components/EmptyProduct";

function App() {
  const produtosBack = [
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ];

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  function RemoveItem(remove) {
    setCurrentSale(
      currentSale.filter((valorAtual) => {
        if (valorAtual !== remove) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  function addPrice(newPrice) {
    setCartTotal(cartTotal + newPrice);
  }

  function removePrice(newPrice) {
    setCartTotal(cartTotal - newPrice);
  }

  function addItem(newItem) {
    setCurrentSale([...currentSale, newItem]);
  }

  function showProducts(input) {
    setProducts(
      products.filter(
        (product) =>
          product.name.includes(input) || product.category.includes(input)
      )
    );
  }

  function ClearCart(input) {
    setCurrentSale(input);
    setCartTotal(0);
  }

  function setTrue(input) {
    setIsEmpty(input);
  }

  return (
    <div>
      <div>
        <Header
          showProducts={showProducts}
          products={products}
          setProducts={setProducts}
          produtosBack={produtosBack}
        ></Header>
        <div className="shopContainer">
          <MenuContainer
            products={products}
            addItem={addItem}
            addPrice={addPrice}
            setTrue={setTrue}
            currentSale={currentSale}
          />
          {isEmpty ? (
            <EmptyProduct />
          ) : (
            <Product
              currentSale={currentSale}
              ClearShop={ClearCart}
              RemoveItem={RemoveItem}
              cartTotal={cartTotal}
              removePrice={removePrice}
              setTrue={setTrue}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
