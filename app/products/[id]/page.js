'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProductById } from '../../../lib/products.api';
import './product.css';

export default function ProductDetailPage({ params }) {
  const { id } = use(params);
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message || 'Error cargando producto');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p className="info">Cargando producto...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="product-container">
      <h1 className="product-title">{product.name}</h1>
      <p className="product-description">{product.description}</p>

      <button onClick={() => router.push('/onboarding')}>
        Iniciar Onboarding
      </button>
    </div>
  );
}
