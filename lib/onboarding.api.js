import { apiFetch } from './api';

export const createOnboarding = (data) => {
  return apiFetch('/onboarding', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
