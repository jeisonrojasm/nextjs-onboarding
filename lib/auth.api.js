import { apiFetch } from './api';

export const login = (username, password) => {
  return apiFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
}
