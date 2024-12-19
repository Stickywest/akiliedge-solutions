import React, { useState, useEffect } from 'react';
import BASE_URL from "../../config";

const TopPerformers: React.FC = () => {
  const [performers, setPerformers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopPerformers = async () => {
      try {
        console.log('Fetching top performers...');
        const response = await fetch(`${BASE_URL}/top-performers/list`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}, ${response.statusText}`);
        }
        
        const data = await response.json();
        setPerformers(data.top_performers);  // Update state with fetched data
      } catch (error) {
        console.error('Error fetching top performers:', error);
        if (error instanceof Error) {
          setError(`Failed to load top performers: ${error.message}`);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTopPerformers();
  }, []);

  if (loading) {
    return <div>Loading top performers...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Top Performers</h2>
      <ul>
        {performers.map((performer, index) => (
          <li key={index} className="mb-2">
            <span className="font-medium">{performer.name}</span>: {performer.score} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopPerformers;
