import {
  Description,
  HeaderStoreItems,
  ItemCart,
  NoneItemCart,
  StoreItemsCart,
  TitleText,
} from "./_cart";
import ItemCard from "../ItemCard/ItemCard";
import { useCart } from "../../context/addCart";

const Cart = () => {
  const { cart, addItenCart, deleteItenCart } = useCart();

  return (
    <>
      <HeaderStoreItems>
        <p>Carrinho</p>
      </HeaderStoreItems>
      <StoreItemsCart>
        {cart.length > 0 ? (
          cart.map((item) => (
            <ItemCart>
              <Description>
                <TitleText></TitleText>
              </Description>
            </ItemCart>
          ))
        ) : (
          <NoneItemCart>Seu carrinho está vazio</NoneItemCart>
        )}
      </StoreItemsCart>
    </>
  );
};

export default Cart;
