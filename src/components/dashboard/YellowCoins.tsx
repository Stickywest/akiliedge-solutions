import React, { useEffect, useState } from 'react';
import StatCard from './StatCard';

const YellowCoins: React.FC = () => {
  const [value, setValue] = useState(0); // Start from 0
  const finalValue = 1200; // Target value
  const duration = 2000; // Total animation duration in milliseconds

  useEffect(() => {
    const increment = Math.ceil(finalValue / (duration / 50)); // Increment per interval
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev + increment >= finalValue) {
          clearInterval(timer); // Stop animation when target is reached
          return finalValue;
        }
        return prev + increment;
      });
    }, 50); // Update every 50ms

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [finalValue, duration]);

  return <StatCard title="Yellow Coins" value={value.toLocaleString()} />;
};

export default YellowCoins;
