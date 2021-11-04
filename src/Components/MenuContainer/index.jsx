import "./style.css";

function MenuContainer({ products, addItem, addPrice, setTrue, currentSale }) {
  return (
    <div className="Container">
      {products.map((item) => (
        <div key={item.id} className="products">
          <div className="menuImg">
            <img src={item.img} alt={item.name}></img>
          </div>
          <div className="menuName">{item.name}</div>
          <div className="menuCategory">{item.category}</div>
          <div className="menuPrice">R$ {Math.ceil(item.price)},00</div>
          <button
            className="menuButton"
            onClick={() => {
              if (currentSale.includes(item) === false) {
                addItem(item);
                addPrice(item.price);
                setTrue(false);
              }
            }}
          >
            Adicionar
          </button>
        </div>
      ))}
    </div>
  );
}

export default MenuContainer;
