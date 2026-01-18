'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProducts } from '../../lib/products.api';
import './products.css';

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Error cargando productos');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p className="info">Cargando productos...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="products-container">
      <h1 className="products-title">Productos</h1>

      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>

            <button onClick={() => router.push(`/products/${product.id}`)}>
              Ver Detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
