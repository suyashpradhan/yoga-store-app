import axios from "axios";

export const wishlistPostData = async (product) => {
  try {
    const { _id } = product;
    const postData = await axios.post(
      "https://apiyogastore.suyashpradhan.repl.co/wishlist",
      { _id: _id, isInWishlist: true }
    );
    if (postData.status === 201) {
      dispatch({ type: "ADD_WISHLIST_ITEM", payload: product });
      toast("error", "Added to the wishlist");
    }
    console.log("after post", product);
  } catch (error) {
    console.log(error);
  }
};

export const wishlistDeleteData = async (product) => {
  try {
    const { _id } = product;
    const deletedId = await axios.delete(
      `https://apiyogastore.suyashpradhan.repl.co/wishlist/${_id}`
    );
    if (deletedId.status === 204) {
      dispatch({ type: "DELETE_WISHLIST_ITEM", payload: product });
      toast("error", "Removed Item from Wishlist");
    }
  } catch (error) {
    console.log(error);
  }
};
