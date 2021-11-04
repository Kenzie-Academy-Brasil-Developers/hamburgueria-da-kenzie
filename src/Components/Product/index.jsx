import "./style.css";

function Product({
  currentSale,
  removePrice,
  RemoveItem,
  ClearShop,
  cartTotal,
  setTrue,
}) {
  console.log(cartTotal);
  return (
    <div className="fullShop">
      <div className="shopTittle">
        <p>Carrinho de compras</p>
      </div>
      <div>
        {currentSale.map((item) => (
          <div className="buyingProduct">
            <div className="productIMG">
              <img src={item.img} alt={item.name}></img>
            </div>
            <div>
              <div className="productName">{item.name}</div>
              <div className="productCategory">{item.category}</div>
            </div>

            <button
              className="removeButton"
              onClick={() => {
                RemoveItem(item);
                removePrice(item.price);
                if (cartTotal < 19) {
                  setTrue(true);
                }
              }}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
      <div className="PriceBody">
        <div className="priceText">
          <div className="total">Total</div>
          <div className="cartTotal">R$ {Math.ceil(cartTotal)},00</div>
        </div>
        <button
          className="ClearShop"
          onClick={() => {
            ClearShop([]);
            setTrue(true);
          }}
        >
          Remover todos
        </button>
      </div>
    </div>
  );
}

export default Product;
