import React, { useState } from "react";

// Define the type for a message in the conversation
type Message = {
  type: "user" | "ai"; // Either "user" or "ai"
  text: string; // The content of the message
};

function ChatComponent() {
  const [question, setQuestion] = useState<string>(""); // The current question being asked
  const [conversation, setConversation] = useState<Message[]>([]); // Store the conversation (array of messages)
  const [loading, setLoading] = useState<boolean>(false); // Loading state for the AI response
  const [isOpen, setIsOpen] = useState<boolean>(false); // Whether the chat input is open

  const askQuestion = async () => {
    if (!question) {
      alert("Please enter a question.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("http://127.0.0.1:5000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();

      if (res.ok) {
        // Add the new question and answer to the conversation history
        setConversation([
          ...conversation,
          { type: "user", text: question },
          { type: "ai", text: data.answer },
        ]);
        setQuestion(""); // Clear the input after sending
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error asking question:", error);
      alert("An error occurred while fetching the answer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Chat Icon Button */}
      <button
        className="fixed bottom-8 right-8 bg-[#AC2027] text-white p-3 rounded-full shadow-lg hover:bg-[#AC2027] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-comment"></i>
      </button>

      {/* Chat Input Section */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white p-4 border rounded-lg shadow-lg sm:w-80 w-[90%] max-h-[70vh] overflow-y-auto sm:right-8">
          <h2 className="text-xl mb-2 text-[#AC2027]">Ask a Question</h2>
          <div className="mb-4">
            {/* Display Conversation */}
            <div className="space-y-2">
              {conversation.map((message, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${
                    message.type === "user"
                      ? "bg-[#fed90f] text-black text-right"
                      : "bg-[#A8CE3B] text-black text-left"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
          </div>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button
            onClick={askQuestion}
            disabled={loading}
            className="w-full bg-[#AC2027] text-white p-2 rounded-lg hover:bg-[#A8CE3B] focus:outline-none"
          >
            {loading ? "Processing..." : "Ask"}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-2 text-gray-500"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatComponent;
