import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList, Container } from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount;    
  }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/product');
      const productFormatted = response.data.map(function (product: Product) {
        return { ...product, price: formatPrice(product.price) }
      })
      setProducts(productFormatted)
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <Container>
      <ProductList>
      {products.map(product => ( 
      <li key={product.id}>
        <img src={product.image} alt={product.name} />
        <strong>{product.name}</strong>
        <span>{product.price}</span>
        <button
          type="button"
          onClick={() => handleAddProduct(product.id)}
        >
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            {cartItemsAmount[product.id] || 0} 
          </div>

          <span>ADICIONAR</span>
        </button>
      </li>
      ))};
    </ProductList>
    </Container>
    
  );
};

export default Home;
