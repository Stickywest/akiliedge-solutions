import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  // Google Generative AI API key
  const apiKey = 'AIzaSyAmpWcsFZohxtsxAJzQoBm9BquvoGWvjy0'; // replace with your actual key

  const toggleChat = () => setIsOpen(!isOpen);

  const handleAskQuestion = async () => {
    if (!question) {
      setAnswer('Please enter a question.');
      return;
    }

    // Predefined responses for basic questions
    const responses: { [key: string]: string } = {
      'what does akiliedge do': 'Akiliedge Solutions provides sustainable tech solutions with a focus on cutting-edge technology and innovation.',
      'what is your vision': 'Our vision is to empower communities through sustainable and innovative technology solutions.',
      'where are you located': 'We are located in [Your Location, e.g., Nairobi, Kenya].',
      'what is your phone number': 'You can reach us at +254-XXXX-XXXXXX.',
      'what are your business hours': 'We are open from Monday to Friday, 9 AM to 5 PM.',
      'tell me about akiliedge solutions': 'Akiliedge Solutions is dedicated to providing top-notch technology solutions that empower businesses and communities. Our services range from IoT to software development and more.',
    };

    // Attempt to match the question to a predefined answer
    const lowerCaseQuestion = question.toLowerCase();
    const matchedAnswer = Object.keys(responses).find((key) =>
      lowerCaseQuestion.includes(key)
    );

    if (matchedAnswer) {
      setAnswer(responses[matchedAnswer]);
    } else {
      // If no match is found, use the Google API to fetch a response
      try {
        const response = await fetch(
          `https://generativeai.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${apiKey}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              prompt: question,
              temperature: 0.7,
              max_output_tokens: 150,
            }),
          }
        );

        // Log the response status and headers for debugging
        console.log('Response Status:', response.status);
        console.log('Response Headers:', response.headers);

        const data = await response.json();
        console.log('API Response:', data); // Log the entire response

        // Check if the response was successful
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        // Set the answer from the API response
        setAnswer(data.candidates?.[0]?.output || 'No response received from AI');
      } catch (error) {
        console.error('Error fetching answer:', error);
        setAnswer('There was an issue fetching a response from the AI. Please try again later.');
      }
    }

    setQuestion(''); // Clear the question input after response
  };

  return (
    <>
      {/* Floating chat icon */}
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-[#972326] text-white rounded-full p-4 shadow-lg hover:bg-[#a5362a] focus:outline-none"
      >
        💬
      </button>

      {/* Chatbot window */}
      {isOpen && (
        <div className="fixed bottom-20 right-8 bg-white border rounded-lg shadow-lg p-4 w-80 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#972326]">Akiliedge Support</h2>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">&times;</button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Ask a Question</label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none"
                placeholder="Type your question..."
              />
              <button
                onClick={handleAskQuestion}
                className="w-full mt-2 bg-[#972326] text-white font-semibold rounded p-2 hover:bg-[#a5362a]"
              >
                Send
              </button>
            </div>

            {answer && (
              <div className="bg-yellow-50 p-2 rounded border border-yellow-200 text-gray-700">
                <p>{answer}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
