import React, { useEffect, useState } from 'react';
import StatCard from './StatCard'; // Adjust the path if needed
import BASE_URL from "../../config";

const CareerCount: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = `${BASE_URL}`; // Replace with your actual base URL

  useEffect(() => {
    const fetchCareerCount = async () => {
      try {
        setError(null); // Clear any previous error
        const response = await fetch(`${API_BASE_URL}/career/count`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: Failed to fetch career count`);
        }

        const data = await response.json();
        setCount(data.count);
      } catch (error: any) {
        console.error('Error fetching career count:', error.message);
        setError(error.message || 'An error occurred while fetching career count');
      } finally {
        setLoading(false);
      }
    };

    fetchCareerCount();
  }, []);

  if (loading) {
    return <p>Loading career count...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="max-w-sm mx-auto">
  <StatCard 
    title="Career Submissions" 
    value={count || 0} 
    valueColor="green" 
  />
</div>

  );
};

export default CareerCount;
