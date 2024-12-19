import React, { useState } from 'react';

interface Performer {
  id: string;
  name: string;
  score: number;
}

interface EditTopPerformersProps {
  performer: Performer;
  onUpdate: (updatedPerformer: Performer) => void;
  onCancel: () => void;
}

const EditTopPerformers: React.FC<EditTopPerformersProps> = ({ performer, onUpdate, onCancel }) => {
  const [name, setName] = useState(performer.name);
  const [score, setScore] = useState(performer.score);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '' || score <= 0) {
      alert('Please enter valid name and score');
      return;
    }

    const updatedPerformer = { ...performer, name, score };
    onUpdate(updatedPerformer);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-gray-500 text-center">Edit Top Performer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="border rounded w-full py-2 px-3 text-gray-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Score</label>
          <input
            type="number"
            className="border rounded w-full py-2 px-3 text-gray-700"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button type="button" onClick={onCancel} className="btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn-submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTopPerformers;
