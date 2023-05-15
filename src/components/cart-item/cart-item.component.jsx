import { CartItemContainer } from "./cart-item.styles";

const CartItem =  ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <CartItemContainer> 
        <img src={imageUrl} alt={`${name}`}/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} X ${price}</span>
        </div></CartItemContainer>
       
    )

}
export default CartItem;