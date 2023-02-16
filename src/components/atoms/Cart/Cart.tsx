import { Link } from 'react-router-dom'
import cart from '/src/images/icon-cart.svg'

export function Cart() {
    return (
        <Link to="/">
            <img src={cart} alt="cart image" />
        </Link>
    )
}
