import React from 'react';
import { Link } from 'react-router-dom';
import { actionOnBag } from '../../server-requests';
import { isAlreadyAdded } from '../../utils';

export const AddToBag = ({ product }) => {
  const {
    state: { itemsInBag },
    dispatch
  } = useStateContext();

  const {
    userAuthState: { isLoggedIn }
  } = useAuth();

  const isAlreadyInBag = isAlreadyAdded(itemsInBag, product._id);

  return (
    <>
      {isAlreadyInBag ? (
        <Link to="/bag">
          <button type="button" className={'button button-primary button-width'}>
            Go To Bag
          </button>
        </Link>
      ) : (
        <button
          type="button"
          className={'button button-secondary button-width'}
          onClick={() => {
            isLoggedIn
              ? actionOnBag(product, dispatch)
              : dispatch({
                  type: 'TOGGLE_TOAST',
                  payload: 'Please Login to add product in bag'
                });
          }}>
          Add to Bag
        </button>
      )}
    </>
  );
};
