import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
      <div className="content">
        <Link to="/">
          <h2>
          Store
          </h2>
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
            </span>
          </div>
          <FaShoppingCart size={30} color="#fff" />
        </Cart>
      </div>
    </Container>
  );
};

export default Header;
