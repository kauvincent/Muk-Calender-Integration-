import React from 'react';
import DashboardLayout from './components/DashboardLayout.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

export default function App() {
  return (
    <DashboardLayout>
      <DashboardPage />
    </DashboardLayout>
  );
}
