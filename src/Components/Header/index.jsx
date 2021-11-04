import { useState } from "react";
import "./style.css";

function Header({ showProducts, products, setProducts, produtosBack }) {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="headBody">
      <div className="logo">
        <div className="Burguer">Burguer</div>
        <div className="Kenzie">Kenzie</div>
      </div>
      <div className="input">
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          placeholder="Digitar Pesquisa"
        />
        <button
          className="buttonHeader"
          onClick={() => {
            if (userInput === "") {
              setProducts(produtosBack);
              setUserInput("");
            } else {
              showProducts(userInput);
              setUserInput("");
            }
          }}
        >
          Pesquisar
        </button>
      </div>
    </div>
  );
}

export default Header;
