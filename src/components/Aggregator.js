import { Typography } from "@mui/material"

export default function BakeryItem(props) {
    const cart = props.cart;
    return (
        <div>
            <h2>Cart</h2>
            {Object.keys(cart).map((itemName) => (
                <Typography mt={2} key={itemName}>
                    {cart[itemName].quantity}x {itemName}
                </Typography>
            ))} {/* TODO: render a list of items in the cart */}
            {Object.keys(cart).length === 0 ? (
                <Typography>Your cart is empty. Click to start buying!</Typography>
            ) : (
                <Typography mt={2}>
                    Total: ${Object.keys(cart).reduce(
                        (prevTotal, itemName) => (
                            prevTotal + (cart[itemName].quantity * cart[itemName].price)
                        ), 0
                    )}
                </Typography>
            )}
        </div>
    )
}