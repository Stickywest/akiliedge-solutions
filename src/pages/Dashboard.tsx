import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import YellowCoins from '../components/dashboard/YellowCoins';
import AIProducts from '../components/dashboard/AIProducts';
import ProfileCompletion from '../components/dashboard/ProfileCompletion';
import ActivityOverview from '../components/dashboard/ActivityOverview';
import TopPerformers from '../components/dashboard/TopPerformers';
import TaskManager from '../components/dashboard/TaskManager';
import TotalSignups from '../components/dashboard/TotalSignups';
import AIProductsManager from '../components/dashboard/AIProductsManager';
import AIProductsViewer from '../components/dashboard/AIProductsViewer';
import CareerViewer from '../components/dashboard/CareerViewer';
import AddComponent from '../components/dashboard/AddComponent';

const Dashboard: React.FC = () => {
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeComponent, setActiveComponent] = useState<string>('dashboard');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserEmail(user.email);
      } else {
        setCurrentUserEmail(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const isAdmin = currentUserEmail === 'steve.devakiliedge@gmail.com';

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <YellowCoins />
              <AIProducts />
              <ProfileCompletion />
              {isAdmin && (
              
                <CareerViewer />

            )}
            </div>
            <ActivityOverview />
            <AIProductsViewer />
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {isAdmin && (
              
              <AddComponent />

          )}
              <TopPerformers />
              <TaskManager />
            </div>
            {isAdmin && (
              <div className="mt-6 space-y-6">
                <TotalSignups />
                <AIProductsManager />
              </div>
            )}
          </>
        );
      case 'tasks':
        return <TaskManager />;
      case 'appointments':
        return <p>Appointments Component Placeholder</p>;
      default:
        return <p>Component Not Found</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 flex flex-col md:flex-row">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="w-full md:w-3/4 ml-0 md:ml-8">
        <Header />
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default Dashboard;
