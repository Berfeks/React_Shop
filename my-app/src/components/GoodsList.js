import { GoodsIteam } from "./GoodsIteam";

function GoodsList(props) {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing</h3>;
  }

  return (
    <div className='goods'>
      {goods.map((iteam) => (
        <GoodsIteam key={iteam.id} {...iteam} addToBasket={addToBasket} />
      ))}
    </div>
  );
}

export { GoodsList };
