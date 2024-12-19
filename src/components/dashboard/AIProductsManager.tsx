import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import BASE_URL from "../../config";

const AIProductsManager: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !photo) {
      setMessage('Please provide both name and photo.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('photo', photo);

    try {
      await axios.post(`${BASE_URL}/ai-products/add`, formData);
      setMessage('AI Product added successfully!');
      setName('');
      setPhoto(null);
    } catch (error) {
      console.error('Error adding AI product:', error);
      setMessage('Failed to add AI product.');
    }
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Manage AI Products</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="border rounded w-full py-2 px-3 text-gray-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Photo</label>
          <input
            type="file"
            className="border rounded w-full py-2 px-3 text-gray-700"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="btn-submit">
            Add Product
          </button>
        </div>
      </form>
      {message && <p className="text-red-500 mt-4">{message}</p>}
    </div>
  );
};

export default AIProductsManager;
