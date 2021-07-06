function GoodsIteam(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype,

    } = props;

    return (<div className="card">
        <div className="card-image">
          <img src={full_background} alt={name}/>
         
         </div>
        <div className="cardcontent">
         <span className="card-title">{name}</span>
          <p>{description}</p>
             <div className="card-action">
          <button className='btn' onClick={() => addToBasket({
            id,
            name,
            price,
          })}>Купить</button>
          <span className='right' style={{fontSize: '1.5rem'}}>{price}грн.</span>
        </div>
        </div>
      </div>
      );
}

export {GoodsIteam}

