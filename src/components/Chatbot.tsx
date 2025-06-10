import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import akiliLogo from '../assets/appstorechat.png';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [showHelpBubble, setShowHelpBubble] = useState(false);
  const [scrollTimer, setScrollTimer] = useState<NodeJS.Timeout | null>(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Show help bubble on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowHelpBubble(true);
      if (scrollTimer) clearTimeout(scrollTimer);
      setScrollTimer(setTimeout(() => {
        setShowHelpBubble(false);
      }, 1500));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, [scrollTimer]);

  // One-time bubble on initial load
  useEffect(() => {
    if (initialLoad) {
      setShowHelpBubble(true);
      const timer = setTimeout(() => {
        setShowHelpBubble(false);
        setInitialLoad(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [initialLoad]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowHelpBubble(false);
  };

  const sendMessage = async () => {
    if (!question.trim()) return;

    const userMessage: Message = { sender: 'user', text: question };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model: 'llama3-70b-8192',
          messages: [
            {
              role: 'system',
              content: `
You are Akili, an AI assistant representing Akiliedge Solution, a Kenyan company dedicated to 'Building Sustainable Solutions' and 'Empowering African communities through tech solutions.' Focus areas include:
- Software development
- IoT systems
- Product design
- AI solutions
- Community empowerment

Respond in a friendly, professional, and confident tone. Feel free to suggest partnerships and include our email: steve.devakiliedge@gmail.com or phone: +254703373810 when appropriate.
              `,
            },
            {
              role: 'user',
              content: question,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer `, // Replace this
          },
        }
      );

      const botReply = response.data.choices[0].message.content;

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Oops! Something went wrong. Please try again later.' },
      ]);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Floating Chat Icon with Help Bubble */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        {showHelpBubble && (
          <div className="absolute -top-3 -left-32 bg-[#972326] text-white px-3 py-1 rounded-full text-sm whitespace-nowrap animate-pulse">
            Get help here!
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-[#972326]"></div>
          </div>
        )}

        <button
          className="bg-[#972326] text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-transform transform hover:scale-110"
          onClick={toggleChat}
        >
          💬
        </button>
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 left-4 sm:right-6 sm:left-auto bg-white w-auto sm:w-96 h-[32rem] rounded-lg shadow-lg border flex flex-col z-[9999]">
          {/* Header */}
          <div className="bg-[#fed90f] text-black p-3 flex justify-between items-center font-bold rounded-t-lg">
            <div className="flex items-center gap-2">
              <img src={akiliLogo} alt="Akiliedge Logo" className="h-10 w-10 rounded-full object-cover" />
              <span>Chat with Akili</span>
            </div>
            <button onClick={toggleChat} className="text-black text-2xl">&times;</button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[95%] break-words ${
                  msg.sender === 'user' ? 'bg-blue-100 self-end ml-auto' : 'bg-gray-200 self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="bg-gray-200 p-3 rounded-lg max-w-[95%] self-start">
                Akili is typing...
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          {/* Input Area */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-[#972326] text-white p-2 rounded hover:bg-[#7a1c1e] disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
