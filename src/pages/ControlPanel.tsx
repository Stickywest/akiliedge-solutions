// src/pages/ControlPanel.tsx
import React, { useEffect, useState } from 'react';
import { db } from '../components/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ControlPanel: React.FC = () => {
  const [signups, setSignups] = useState<any[]>([]);

  useEffect(() => {
    const fetchSignups = async () => {
      const querySnapshot = await getDocs(collection(db, 'signups'));
      setSignups(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchSignups();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">All Signups</h2>
      <ul>
        {signups.map((signup) => (
          <li key={signup.id} className="p-4 mb-2 bg-white rounded shadow">
            <p>Name: {signup.name}</p>
            <p>Email: {signup.email}</p>
            <p>Specialization: {signup.specialization}</p>
            <p>Languages: {signup.languages.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ControlPanel;
