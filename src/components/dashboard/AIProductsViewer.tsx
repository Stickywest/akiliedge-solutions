import React, { useEffect, useState } from 'react';
import BASE_URL from "../../config";
interface AIProduct {
  name: string;
  photo: string;
}

const AIProductsViewer: React.FC = () => {
  const [products, setProducts] = useState<AIProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // API base URL
  const API_BASE_URL = `${BASE_URL}`;

  useEffect(() => {
    const fetchAIProducts = async () => {
      try {
        setError(null); // Clear any previous error
        const response = await fetch(`${API_BASE_URL}/ai-products/all`, {
          method: 'POST', // Adjusted to POST method if needed
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: Failed to fetch AI products`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error: any) {
        console.error('Error fetching AI products:', error.message);
        setError(error.message || 'An error occurred while fetching AI products');
      } finally {
        setLoading(false);
      }
    };

    fetchAIProducts();
  }, []);

  if (loading) {
    return <p>Loading AI products...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">AI Products</h2>
      {products.length === 0 ? (
        <p>No AI products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
              <img
                src={`${API_BASE_URL}/${product.photo}`} // Correctly formatted URL with base path
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AIProductsViewer;
