const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(endpoint, options = {}) {
  const token =
    typeof window !== 'undefined'
      ? localStorage.getItem('token')
      : null;

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorMessage = 'Error en la petición';

    try {
      const errorData = await response.json();
      errorMessage = errorData.data.message || errorMessage;
    } catch (_) { }

    throw new Error(errorMessage);
  }

  const data = await response.json();

  if ('data' in data) {
    return data.data.data;    
  }

  return data
}
