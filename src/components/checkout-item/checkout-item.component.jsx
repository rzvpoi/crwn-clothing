import Button from "../button/button.component"

function CheckoutItem({product})
{
    

    const {name, price, imageUrl, quantity} = product
    return(
           <tr>
            <td>
                <img src={imageUrl} alt={`${name}`}/>
            </td>
            <td>
                <span className="name">{name}</span>
            </td>   
            <td>
                <div>
                    <span>-</span>
                    <span className="name"> {quantity} </span>
                    <span>+</span>
                </div>
            </td>    
            <td>
                <span className="name"> {price} </span>
            </td>
            <td>
                <Button >X</Button>
            </td>
            </tr>

    )
}

export default CheckoutItem