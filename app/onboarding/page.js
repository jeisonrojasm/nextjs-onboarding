'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createOnboarding } from '../../lib/onboarding.api';
import './onboarding.css';

export default function OnboardingPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    document: '',
    email: '',
    initialAmount: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const validateForm = () => {
    if (!form.name || !form.document || !form.email || !form.initialAmount) {
      return 'Todos los campos son obligatorios';
    }

    if (!form.email.includes('@')) {
      return 'Email inválido';
    }

    if (Number(form.initialAmount) <= 0) {
      return 'El monto inicial debe ser mayor a 0';
    }

    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const response = await createOnboarding({
        name: form.name.trim(),
        document: form.document.trim(),
        email: form.email.trim(),
        initialAmount: Number(form.initialAmount.trim()),
      });

      setResult(response);
      setForm({
        name: '',
        document: '',
        email: '',
        initialAmount: '',
      });
    } catch (err) {
      setError(err.message);
      if (err.message === 'Unauthorized') router.push('/login');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>Apertura de Cuenta</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="document"
          placeholder="Documento"
          value={form.document}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="number"
          name="initialAmount"
          placeholder="Monto inicial"
          value={form.initialAmount}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Procesando...' : 'Enviar Onboarding'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && (
        <div className="success">
          <p><strong>Onboarding ID:</strong> {result.onboardingId}</p>
          <p><strong>Status:</strong> {result.status}</p>
        </div>
      )}
    </div>
  );
}
