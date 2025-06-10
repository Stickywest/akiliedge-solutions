import React, { useState } from 'react';

// A list of random New Year wishes
const wishes = [
  "Wishing you a year full of health, wealth, and happiness, {name}!",
  "May the New Year bring you endless joy and success, {name}!",
  "Cheers to new beginnings and endless possibilities, {name}!",
  "Hope this New Year is filled with love, laughter, and dreams come true, {name}!",
  "Happy New Year, {name}! May it be your best one yet!"
];

const NewYearWish: React.FC = () => {
  const [recipientName, setRecipientName] = useState('');
  const [nextRecipient, setNextRecipient] = useState('');
  const [currentWish, setCurrentWish] = useState('');

  // Generate a random wish with the recipient's name
  const generateWish = () => {
    if (!recipientName) return alert("Please enter the recipient's name first!");
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setCurrentWish(randomWish.replace("{name}", recipientName));
  };

  // Reset the fields after sending the wish
  const sendWish = () => {
    if (!nextRecipient) return alert("Please enter the next recipient's name!");
    alert(`Wish sent to ${nextRecipient}: "${currentWish}"`);
    setRecipientName(nextRecipient);
    setNextRecipient('');
    setCurrentWish('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        New Year Wishes 🎉
      </h2>

      {/* Input for current recipient */}
      <input
        type="text"
        placeholder="Enter recipient's name"
        value={recipientName}
        onChange={(e) => setRecipientName(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Generate button */}
      <button
        onClick={generateWish}
        className="w-full p-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200"
      >
        Generate Wish
      </button>

      {/* Display the generated wish */}
      {currentWish && (
        <p className="mt-4 text-center text-lg font-semibold text-gray-700">
          {currentWish}
        </p>
      )}

      {/* Input for next recipient */}
      {currentWish && (
        <>
          <input
            type="text"
            placeholder="Enter next recipient's name"
            value={nextRecipient}
            onChange={(e) => setNextRecipient(e.target.value)}
            className="w-full p-2 mt-4 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Send button */}
          <button
            onClick={sendWish}
            className="w-full p-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition duration-200"
          >
            Send Wish
          </button>
        </>
      )}
    </div>
  );
};

export default NewYearWish;
