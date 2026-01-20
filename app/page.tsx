'use client';

import { useState } from 'react';
import Image from 'next/image';
import ChatBox from './components/ChatBox';

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [showSoccerImage, setShowSoccerImage] = useState(false);

  const hobbies = [
    {
      icon: '♟️',
      title: 'Chess',
      description: 'On the chessboard, I am the strategic commander. Checkmate!',
      color: 'border-gray-800',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]',
      is3D: false,
    },
    {
      icon: '⚽',
      title: 'Soccer',
      description: 'Running on the field is my happiest time. Goal!',
      color: 'border-green-500',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]',
      is3D: true,
    },
    {
      icon: '🦔',
      title: 'Sonic',
      description: 'Chasing speed, never stopping. Gotta go fast!',
      color: 'border-sonic-light',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(0,102,217,0.7)]',
      is3D: false,
    },
    {
      icon: '✨',
      title: 'Ultraman',
      description: 'Believe in the power of light, protecting peace on Earth!',
      color: 'border-red-500',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]',
      is3D: false,
    },
    {
      icon: '🦊🐰',
      title: 'Zootopia',
      description: '"Try Everything" - Be brave like Judy!',
      color: 'border-orange-400',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(251,146,60,0.5)]',
      is3D: false,
    },
    {
      icon: '⛏️',
      title: 'Minecraft',
      description: 'Building worlds block by block. The only limit is imagination!',
      color: 'border-emerald-500',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]',
      is3D: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Tech Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-sonic-light/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-sonic-speed/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-sonic-accent/10 rounded-full blur-2xl animate-bounce"></div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="tech-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          ></div>
        ))}

        {/* Data Streams */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="data-stream"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Scanning Light Effect */}
      <div className="scan-effect"></div>

      {/* Navigation */}
      <nav className="relative z-10 glass-card border-b-2 border-sonic-speed/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-widest">
            <span className="neon-text text-sonic-accent">SEAN</span>
            <span className="text-white">&apos;S WORLD</span>
          </h1>
          <div className="flex gap-4 md:gap-6">
            <a href="#hobbies" className="text-white hover:text-sonic-speed transition-all duration-300 hover:neon-text">
              Hobbies
            </a>
            <button
              onClick={() => setShowChat(!showChat)}
              className="text-white hover:text-sonic-speed transition-all duration-300 hover:neon-text"
            >
              Chat
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
            <div className="text-8xl md:text-9xl speed-trail filter drop-shadow-[0_0_30px_rgba(0,217,255,0.8)]">🦔</div>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4 italic neon-text">
            SEAN
          </h2>
          <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-sonic-accent via-sonic-speed to-sonic-accent bg-clip-text text-transparent">
            Chess Player | Soccer Star | Guardian of Justice
          </p>
          <div className="mt-4 text-sonic-speed text-lg font-bold tracking-widest neon-text animate-pulse">
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
          My <span className="neon-text text-sonic-accent">Super Powers</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              onClick={() => hobby.title === 'Soccer' && setShowSoccerImage(true)}
              className={`glass-card rounded-2xl p-6 border-t-4 ${hobby.color} ${hobby.bgGlow}
                transform transition-all duration-500 hover:-translate-y-3 ${hobby.is3D ? '' : 'hover:scale-105'} cursor-pointer
                group relative overflow-hidden ${hobby.is3D ? 'soccer-card-3d' : ''}
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, transparent 0%, ${hobby.color.includes('sonic') ? 'rgba(0, 217, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'} 50%, transparent 100%)`,
                }}
              ></div>

              {/* Tech Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-sonic-speed/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sonic-speed/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className={`relative z-10 ${hobby.is3D ? 'card-inner' : ''}`}>
                <div className={`text-5xl md:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-[0_0_20px_rgba(0,217,255,0.6)]
                  ${hobby.is3D ? 'animate-[soccer-bounce_2s_ease-in-out_infinite]' : ''}`}>
                  {hobby.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-sonic-speed transition-colors duration-300">{hobby.title}</h4>
                <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">{hobby.description}</p>
              </div>

              {/* Scan Line Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sonic-speed/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 group-hover:animate-[scan-light_2s_ease-in-out_infinite]"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Soccer Image Modal */}
      {showSoccerImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowSoccerImage(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-gradient-to-br from-green-900 to-green-700 rounded-3xl shadow-2xl overflow-hidden border-4 border-green-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-green-800/80 backdrop-blur-lg px-6 py-4 border-b border-green-500/30 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="text-3xl">⚽</div>
                <div>
                  <h3 className="text-xl font-bold text-white">Cristiano Ronaldo</h3>
                  <p className="text-xs text-green-300">🔥 Bicycle Kick Legend</p>
                </div>
              </div>
              <button
                onClick={() => setShowSoccerImage(false)}
                className="text-2xl text-white hover:text-green-300 transition-colors duration-300 hover:rotate-90 transform"
              >
                ✕
              </button>
            </div>

            {/* Image */}
            <div className="relative aspect-video">
              <Image
                src="/ronaldo.jpeg"
                alt="Cristiano Ronaldo Bicycle Kick"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Caption */}
            <div className="p-4 text-center bg-green-800/50">
              <p className="text-white text-lg font-semibold">🌟 The Greatest Bicycle Kick in History! 🌟</p>
              <p className="text-green-200 text-sm mt-1">CR7 - Champions League vs Juventus 2018</p>
            </div>
          </div>
        </div>
      )}

      {/* Chat Box */}
      {showChat && <ChatBox onClose={() => setShowChat(false)} />}

      {/* Footer */}
      <footer className="relative z-10 text-center py-10 glass-card border-t-2 border-sonic-speed/30">
        <p className="text-sm md:text-base text-gray-300">
          © 2025 Built with <span className="text-red-500 animate-pulse">❤️</span> and{' '}
          <span className="neon-text text-sonic-accent">⚡</span> for Sean
        </p>
        <p className="text-xs mt-2 text-gray-400">Powered by Next.js & Tailwind CSS</p>
      </footer>

      {/* Floating Chat Button */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-8 right-8 w-16 h-16 glass-card border-2 border-sonic-speed/50
            rounded-full shadow-2xl flex items-center justify-center text-3xl
            hover:scale-110 transition-all duration-300 z-50 animate-bounce
            hover:border-sonic-speed hover:shadow-[0_0_30px_rgba(0,217,255,0.6)]
            bg-gradient-to-br from-sonic-blue/20 to-sonic-light/20"
        >
          💬
        </button>
      )}
    </div>
  );
}
