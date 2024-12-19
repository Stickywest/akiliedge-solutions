import { useState } from "react";
import BASE_URL from "../config";

type Message = {
  type: "user" | "ai"; // Either "user" or "ai"
  text: string; // The content of the message
};

function ChatComponent() {
  const [question, setQuestion] = useState<string>("");
  const [conversation, setConversation] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const askQuestion = async () => {
    if (!question) {
      alert("Please enter a question.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/chatbot/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();

      if (res.ok) {
        setConversation([
          ...conversation,
          { type: "user", text: question },
          { type: "ai", text: data.answer },
        ]);
        setQuestion("");
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
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-8 right-8 bg-[#AC2027] text-white p-3 rounded-full shadow-lg hover:bg-[#A8CE3B] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-comment"></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white p-4 border rounded-lg shadow-lg sm:w-80 w-[90%] max-h-[70vh] overflow-y-auto sm:right-8 flex flex-col">
          <h2 className="text-xl mb-2 text-[#AC2027] text-center">
            Ask a Question
          </h2>
          <div className="flex-grow overflow-y-auto mb-4">
            {conversation.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                } mb-2`}
              >
                {message.type === "ai" && (
                  <img
                    src="https://via.placeholder.com/40/AC2027/FFFFFF?text=AI"
                    alt="AI"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                <div
                  className={`p-2 rounded-lg max-w-[75%] ${
                    message.type === "user"
                      ? "bg-[#fed90f] text-black rounded-br-none"
                      : "bg-[#A8CE3B] text-black rounded-bl-none"
                  }`}
                >
                  {message.text}
                </div>
                {message.type === "user" && (
                  <img
                    src="https://via.placeholder.com/40/6c757d/FFFFFF?text=U"
                    alt="User"
                    className="w-8 h-8 rounded-full ml-2"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Text Input Area */}
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="w-full p-2 border border-gray-300 rounded mb-2 resize-none"
            rows={2}
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
  className="mt-2 w-full text-[#AC2027] bg-gray-100 hover:bg-gray-200 p-2 rounded-lg font-medium transition duration-200 ease-in-out shadow-sm"
>
  Close Chat
</button>
        </div>
      )}
    </div>
  );
}

export default ChatComponent;
