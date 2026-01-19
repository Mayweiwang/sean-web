'use client';

import { useState } from 'react';
import ChatBox from './components/ChatBox';

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  const hobbies = [
    {
      icon: '♟️',
      title: '国际象棋',
      description: '在棋盘上，我就是运筹帷幄的指挥官。Checkmate!',
      color: 'border-gray-800',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]',
      is3D: false,
    },
    {
      icon: '⚽',
      title: '足球',
      description: '绿茵场上的奔跑，是我最快乐的时间。Goal!',
      color: 'border-green-500',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]',
      is3D: true,
    },
    {
      icon: '🦔',
      title: 'Sonic 索尼克',
      description: '追求速度，永不止步。Gotta go fast!',
      color: 'border-sonic-light',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(0,102,217,0.7)]',
      is3D: false,
    },
    {
      icon: '✨',
      title: '奥特曼',
      description: '相信光的力量，守护地球的和平！',
      color: 'border-red-500',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]',
      is3D: false,
    },
    {
      icon: '🦊🐰',
      title: '疯狂动物城',
      description: '"尝试一切(Try Everything)"，像朱迪一样勇敢。',
      color: 'border-orange-400',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(251,146,60,0.5)]',
      is3D: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sonic-light/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-sonic-speed/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-sonic-accent/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-sonic-dark/80 backdrop-blur-lg border-b border-sonic-light/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-widest sonic-glow">
            <span className="text-sonic-accent">SEAN</span>
            <span className="text-white">&apos;S WORLD</span>
          </h1>
          <div className="flex gap-4 md:gap-6">
            <a href="#hobbies" className="text-white hover:text-sonic-accent transition-colors duration-300">
              爱好
            </a>
            <button
              onClick={() => setShowChat(!showChat)}
              className="text-white hover:text-sonic-accent transition-colors duration-300"
            >
              聊天
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sonic-dark via-sonic-blue to-sonic-light opacity-50"></div>

        {/* Sonic Speed Lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-sonic-speed to-transparent opacity-30"
              style={{
                top: `${20 + i * 15}%`,
                left: '-100%',
                width: '200%',
                animation: `speed-lines ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center">
          <div className="mb-6 inline-block animate-bounce">
            <div className="text-8xl md:text-9xl speed-trail">🦔</div>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4 italic text-white sonic-glow">
            SEAN
          </h2>
          <p className="text-xl md:text-2xl text-sonic-accent font-semibold">
            国际象棋手 | 小球员 | 正义守护者
          </p>
          <div className="mt-4 text-sonic-speed text-lg font-bold tracking-widest animate-pulse">
            ⚡ GOTTA GO FAST! ⚡
          </div>
        </div>

        {/* Floating Rings */}
        <div className="absolute bottom-10 right-10">
          <div className="w-16 h-16 border-4 border-sonic-accent rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-10 left-10">
          <div className="w-12 h-12 border-4 border-sonic-speed rounded-full animate-ping delay-500"></div>
        </div>
      </header>

      {/* Hobbies Section */}
      <section id="hobbies" className="relative z-10 container mx-auto py-16 md:py-20 px-4">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          我的<span className="text-sonic-accent">超级力量</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border-t-4 ${hobby.color} ${hobby.bgGlow}
                transform transition-all duration-300 hover:-translate-y-3 ${hobby.is3D ? '' : 'hover:scale-105'} cursor-pointer
                group relative overflow-hidden ${hobby.is3D ? 'soccer-card-3d' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-sonic-light/0 via-sonic-light/0 to-sonic-light/20
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className={`relative z-10 ${hobby.is3D ? 'card-inner' : ''}`}>
                <div className={`text-5xl md:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300
                  ${hobby.is3D ? 'animate-[soccer-bounce_2s_ease-in-out_infinite]' : ''}`}>
                  {hobby.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-white">{hobby.title}</h4>
                <p className="text-gray-200 leading-relaxed">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chat Box */}
      {showChat && <ChatBox onClose={() => setShowChat(false)} />}

      {/* Footer */}
      <footer className="relative z-10 text-center py-10 text-gray-300 border-t border-sonic-light/30 bg-sonic-dark/50">
        <p className="text-sm md:text-base">
          © 2025 Built with <span className="text-red-500 animate-pulse">❤️</span> and{' '}
          <span className="text-sonic-accent">⚡</span> for Sean
        </p>
        <p className="text-xs mt-2 text-gray-400">Powered by Next.js & Tailwind CSS</p>
      </footer>

      {/* Floating Chat Button */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-sonic-blue to-sonic-light
            rounded-full shadow-2xl flex items-center justify-center text-3xl
            hover:scale-110 transition-transform duration-300 sonic-glow z-50 animate-bounce"
        >
          💬
        </button>
      )}
    </div>
  );
}
