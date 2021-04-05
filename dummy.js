/* const itemExist = state.itemsInBag.find(
        (iterator) => iterator.id === action.payload.id
      );
      if (itemExist) {
        return {
          ...state,
          itemsInBag: state.itemsInBag.map((product) => {
            if (product.id === action.payload.id) {
              return {
                ...action.payload,
              };
            } else {
              return product;
            }
          }),
        };
      } else {
        return {
          ...state,
          itemsInBag: [
            ...state.itemsInBag,
            { ...action.payload, productQuantity: 1, isInCart: true },
          ],
        };
      } */
