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

    // 关于 Sonic 的回复
    if (lowerMessage.includes('sonic') || lowerMessage.includes('索尼克')) {
      return '⚡ 说到 Sonic，那可是 Sean 的最爱！Sonic 的速度精神激励着 Sean 每天都要"超速前进"！就像 Sonic 收集金环一样，Sean 也在不断收集新技能和知识。Gotta go fast! 🦔💨';
    }

    // 关于国际象棋的回复
    if (lowerMessage.includes('象棋') || lowerMessage.includes('chess')) {
      return '♟️ Sean 在国际象棋方面很有天赋哦！他喜欢思考每一步棋的策略，就像 Sonic 规划最快路线一样。在棋盘上，Sean 就是运筹帷幄的指挥官！Checkmate! ✨';
    }

    // 关于足球的回复
    if (lowerMessage.includes('足球') || lowerMessage.includes('soccer') || lowerMessage.includes('football')) {
      return '⚽ 足球是 Sean 最喜欢的运动之一！在绿茵场上奔跑的感觉就像 Sonic 在赛道上飞驰一样自由！团队合作的精神让每一场比赛都充满激情。Goal! 🎯';
    }

    // 关于奥特曼的回复
    if (lowerMessage.includes('奥特曼') || lowerMessage.includes('ultraman')) {
      return '✨ Sean 相信光的力量！就像奥特曼守护地球一样，Sean 也希望用自己的方式守护身边的人。正义、勇气、永不放弃 —— 这些都是 Sean 从奥特曼身上学到的品质！💫';
    }

    // 关于疯狂动物城的回复
    if (lowerMessage.includes('疯狂动物城') || lowerMessage.includes('朱迪') || lowerMessage.includes('zootopia')) {
      return '🦊🐰 "Try Everything" 是 Sean 的人生格言之一！就像朱迪一样，即使遇到困难也要勇敢尝试。每个梦想都值得追求，每个挑战都是成长的机会！Stay positive! ✨';
    }

    // 关于 Sean 的爱好
    if (lowerMessage.includes('爱好') || lowerMessage.includes('喜欢') || lowerMessage.includes('hobby')) {
      return '🌟 Sean 有好多爱好呢！国际象棋锻炼思维、足球强身健体、Sonic 给他速度的激情、奥特曼教会他正义、疯狂动物城让他学会勇敢尝试。每个爱好都让 Sean 变得更棒！⚡';
    }

    // 问候语
    if (lowerMessage.includes('你好') || lowerMessage.includes('hi') || lowerMessage.includes('hello')) {
      return '👋 你好呀！我是 Sean 的虚拟小助手！很高兴见到你！问我任何关于 Sean 的问题吧，让我们像 Sonic 一样开启超速对话！⚡🦔';
    }

    // Sean 是谁
    if (lowerMessage.includes('sean') || lowerMessage.includes('是谁') || lowerMessage.includes('介绍')) {
      return '🦔 Sean 是一个充满活力和梦想的小朋友！他热爱运动、喜欢思考、崇尚速度、相信正义。就像 Sonic 一样，Sean 总是充满能量，永远向前冲！他的每一天都是新的冒险！✨';
    }

    // 默认回复
    const defaultResponses = [
      '⚡ 哇，有意思的问题！Sean 的世界充满了速度与激情，就像 Sonic 一样！继续探索吧！🦔',
      '🌟 Sean 最喜欢的就是学习新东西了！你的问题很棒，让我们一起超速前进！💨',
      '✨ 像 Sonic 收集金环一样，Sean 也在不断收集知识和经验！继续聊天吧！⚡',
      '🎯 Try Everything！这是 Sean 的座右铭。你的好奇心很棒，继续提问吧！🦊',
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
              <h3 className="text-xl font-bold text-white">Sean 的小助手</h3>
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
              <p className="text-lg">你好！我是 Sean 的虚拟小助手</p>
              <p className="text-sm text-sonic-accent mt-2">问我任何关于 Sean 的问题吧！</p>
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
              placeholder="输入你的问题..."
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
