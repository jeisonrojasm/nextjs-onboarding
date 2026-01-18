'use client';

import { useEffect, useState } from 'react';
import { getHealth } from '../../lib/health.api';
import './health.css';

export default function HealthPage() {
  const [status, setStatus] = useState('Cargando...');
  const [error, setError] = useState('');

  useEffect(() => {
    getHealth()
      .then(() => setStatus('Sistema en línea ✅'))
      .catch(() => setError('Sistema fuera de línea ❌'));
  }, []);

  return (
    <div className="container">
      <h1>Estado del Sistema</h1>
      {error ? <p className="error">{error}</p> : <p className="success">{status}</p>}
    </div>
  );
}
