'use client';

import { useRouter } from 'next/navigation';
import './dashboard.css';

export default function DashboardPage() {
  const router = useRouter();

  function goToProducts() {
    router.push('/products');
  }

  function goToOnboarding() {
    router.push('/onboarding');
  }

  function goToHealth() {
    router.push('/health');
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-buttons">
        <button onClick={goToProducts}>Productos</button>
        <button onClick={goToOnboarding}>Onboarding</button>
        <button onClick={goToHealth}>Estado del sistema</button>
      </div>
    </div>
  );
}
