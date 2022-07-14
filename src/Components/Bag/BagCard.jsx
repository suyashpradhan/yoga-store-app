import React from 'react';
import './Bag.css';
import { increaseQuantity, decreaseQuantity, removeFromBag } from '../../server-requests';

export function BagCard({ singleProduct: { product, quantity } }) {
  const { dispatch } = useStateContext();

  return (
    <>
      <div key={product.id} className="bagItem">
        <div className="bagItemGrid">
          <div className="productImage">
            <img src={product.image} alt="productImage"></img>
          </div>
          <div className="productDetail">
            <h1 className="productName mT1 text-left">{product.name}</h1>
            <h1 className="productPrice" style={{ textAlign: 'left', display: 'block' }}>
              Rs {product.discountedPrice}
            </h1>

            <div className="buttonRow">
              <button
                className="button-extra increment"
                onClick={() => increaseQuantity(product, dispatch, quantity)}>
                +
              </button>
              <span className="product-quantity">{quantity}</span>
              <button
                className="button-extra decrement"
                onClick={() => decreaseQuantity(product, dispatch, quantity)}>
                -
              </button>
            </div>

            <div className="bagFooter mT1 mB1 block text-left">
              <button
                type="button"
                className="button button-secondary"
                onClick={() => removeFromBag(product, dispatch)}>
                REMOVE ITEM
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
