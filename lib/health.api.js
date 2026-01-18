import { apiFetch } from './api';

export const getHealth = () => {
  return apiFetch('/health');
}
