import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import {Link} from 'react-router-dom';
import './cart-dropdown.styles.scss'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'


function CartDropdown()
{
    const {cartItems} = useContext(CartContext);

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item)=> (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Link to="/checkout"><Button>Go to checkout</Button></Link>
            </div>
    )
}

export default CartDropdown;