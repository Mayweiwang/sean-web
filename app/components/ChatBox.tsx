'use client';

import { useState, useRef, useEffect } from 'react';

interface ChatBoxProps {
  onClose: () => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBox({ onClose }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // About Sonic
    if (lowerMessage.includes('sonic')) {
      return '⚡ Sonic is Sean\'s absolute favorite! Sonic\'s spirit of speed inspires Sean to "go fast" every day! Just like Sonic collects gold rings, Sean is constantly collecting new skills and knowledge. Gotta go fast! 🦔💨';
    }

    // About Chess
    if (lowerMessage.includes('chess')) {
      return '♟️ Sean is really talented at chess! He loves thinking about the strategy of each move, just like Sonic planning the fastest route. On the chessboard, Sean is the strategic commander! Checkmate! ✨';
    }

    // About Soccer
    if (lowerMessage.includes('soccer') || lowerMessage.includes('football')) {
      return '⚽ Soccer is one of Sean\'s favorite sports! Running on the field feels as free as Sonic racing on the track! The spirit of teamwork makes every game exciting. Goal! 🎯';
    }

    // About Ultraman
    if (lowerMessage.includes('ultraman')) {
      return '✨ Sean believes in the power of light! Just like Ultraman protects Earth, Sean hopes to protect those around him in his own way. Justice, courage, never giving up — these are all qualities Sean learned from Ultraman! 💫';
    }

    // About Zootopia
    if (lowerMessage.includes('zootopia') || lowerMessage.includes('judy')) {
      return '🦊🐰 "Try Everything" is one of Sean\'s life mottos! Like Judy, he bravely tries even when facing difficulties. Every dream is worth pursuing, and every challenge is an opportunity to grow! Stay positive! ✨';
    }

    // About Minecraft
    if (lowerMessage.includes('minecraft') || lowerMessage.includes('block') || lowerMessage.includes('craft')) {
      return '⛏️ Minecraft is Sean\'s creative playground! He loves building amazing structures and exploring infinite worlds. From castles to redstone machines, Sean\'s imagination has no limits! Every block is a possibility! 🏰✨';
    }

    // About hobbies
    if (lowerMessage.includes('hobby') || lowerMessage.includes('hobbies') || lowerMessage.includes('like')) {
      return '🌟 Sean has so many hobbies! Chess exercises his mind, soccer keeps him fit, Sonic gives him passion for speed, Ultraman teaches him justice, Zootopia inspires him to be brave, and Minecraft unleashes his creativity. Every hobby makes Sean even better! ⚡';
    }

    // Greetings
    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      return '👋 Hi there! I\'m Sean\'s virtual assistant! Nice to meet you! Ask me anything about Sean, and let\'s start a super-fast conversation like Sonic! ⚡🦔';
    }

    // About Sean
    if (lowerMessage.includes('sean') || lowerMessage.includes('who')) {
      return '🦔 Sean is an energetic and dreamy kid! He loves sports, enjoys thinking, pursues speed, and believes in justice. Just like Sonic, Sean is always full of energy and always moving forward! Every day is a new adventure for him! ✨';
    }

    // Default responses
    const defaultResponses = [
      '⚡ Wow, interesting question! Sean\'s world is full of speed and passion, just like Sonic! Keep exploring! 🦔',
      '🌟 Sean loves learning new things! Your question is great, let\'s go super fast together! 💨',
      '✨ Just like Sonic collects gold rings, Sean keeps collecting knowledge and experience! Keep chatting! ⚡',
      '🎯 Try Everything! That\'s Sean\'s motto. Your curiosity is awesome, keep asking! 🦊',
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // 模拟 AI 思考时间
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(input),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-sonic-dark to-sonic-blue w-full max-w-2xl h-[600px] rounded-3xl shadow-2xl sonic-glow flex flex-col overflow-hidden border-2 border-sonic-light/30">
        {/* Header */}
        <div className="bg-sonic-dark/80 backdrop-blur-lg px-6 py-4 border-b border-sonic-light/30 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl animate-bounce">🦔</div>
            <div>
              <h3 className="text-xl font-bold text-white">Sean&apos;s Assistant</h3>
              <p className="text-xs text-sonic-accent">⚡ Powered by AI</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-2xl text-white hover:text-sonic-accent transition-colors duration-300 hover:rotate-90 transform"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-300 mt-20">
              <div className="text-6xl mb-4 animate-pulse">💬</div>
              <p className="text-lg">Hi! I&apos;m Sean&apos;s Virtual Assistant</p>
              <p className="text-sm text-sonic-accent mt-2">Ask me anything about Sean!</p>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-sonic-light text-white'
                    : 'bg-white/10 backdrop-blur-md text-gray-100 border border-sonic-light/30'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="text-xl mb-1">🦔</div>
                )}
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-sonic-light/30">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-sonic-accent rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-sonic-accent rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-sonic-accent rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="bg-sonic-dark/80 backdrop-blur-lg px-6 py-4 border-t border-sonic-light/30">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-white/10 border border-sonic-light/30 rounded-full px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sonic-accent focus:border-transparent transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-sonic-blue to-sonic-light text-white px-6 py-3 rounded-full font-semibold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all sonic-glow"
            >
              {isLoading ? '⏳' : '🚀'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
