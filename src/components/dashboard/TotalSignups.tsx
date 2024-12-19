import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const TotalSignups: React.FC = () => {
  const [userCount, setUserCount] = useState<number | null>(null);
  const db = getFirestore();

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const usersCollection = collection(db, 'Users'); // Firestore 'Users' collection
        const snapshot = await getDocs(usersCollection);
        setUserCount(snapshot.size); // Get total document count
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchUserCount();
  }, [db]);

  if (userCount === null) return <p>Loading...</p>;

  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <h2 className="text-gray-500">Total Users</h2>
      <p className="text-2xl font-bold">{userCount}</p>
    </div>
  );
};

export default TotalSignups;
