import { useContext} from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Button from '../../components/button/button.component';
function Checkout({products})
{
    const {cartItems} = useContext(CartContext);

    return (
        <table className="checkout-list-container">
            <tr>
                <td>Product</td>     
                <td>Description</td>
                <td>Quality</td>
                <td>Price</td>         
                <td>Remove</td>
            </tr>
            {cartItems.map((item) => ( 
                    <CheckoutItem product={item} />                               
            ))}
        </table>

    )
}

export default Checkout