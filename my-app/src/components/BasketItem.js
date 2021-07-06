function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className='collection-item'>
      {name}{" "}
      <i
        className='material-icons basketquantity'
        onClick={() => decQuantity(id)}
      >
        remove
      </i>
      x{quantity}{" "}
      <i
        className='material-icons basketquantity'
        onClick={() => incQuantity(id)}
      >
        add
      </i>{" "}
      = {price * quantity}
      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i class='material-icons basketdelete'>close</i>
      </span>
    </li>
  );
}

export { BasketItem };
