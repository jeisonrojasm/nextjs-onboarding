import { apiFetch } from './api';

export const getProducts = () => {
  return apiFetch('/products');
}

export const getProductById = (id) => {
  return apiFetch(`/products/${id}`);
}
