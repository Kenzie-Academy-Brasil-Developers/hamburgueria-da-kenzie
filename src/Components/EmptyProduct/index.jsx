import "./style.css";

function EmptyProduct() {
  return (
    <div className="shopBody">
      <div className="TittleShop2">
        <p>Carrinho de compras</p>
      </div>
      <div className="EmptyBox">
        <div className="Box1">sua sacola está vazia</div>
        <div className="Box2">Adicione itens</div>
      </div>
    </div>
  );
}

export default EmptyProduct;
