'use client';

import { useState } from 'react';
import ChatBox from './components/ChatBox';

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [showSoccerModal, setShowSoccerModal] = useState(false);
  const [showSoccerVideo, setShowSoccerVideo] = useState(false);
  const [showMathModal, setShowMathModal] = useState(false);
  const [showMathVideo, setShowMathVideo] = useState(false);
  const [showMinecraftModal, setShowMinecraftModal] = useState(false);
  const [showMinecraftVideo, setShowMinecraftVideo] = useState(false);
  const [showUltramanModal, setShowUltramanModal] = useState(false);
  const [showUltramanVideo, setShowUltramanVideo] = useState(false);
  const [showChessModal, setShowChessModal] = useState(false);
  const [showChessVideo, setShowChessVideo] = useState(false);

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
    {
      icon: '🤺',
      title: 'Fencing',
      description: 'Swift like lightning, precise like a laser. En garde!',
      color: 'border-slate-400',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(148,163,184,0.5)]',
      is3D: false,
    },
    {
      icon: '🧮',
      title: 'Math',
      description: 'Numbers are the language of the universe. Problem solved!',
      color: 'border-indigo-500',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]',
      is3D: false,
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
              onClick={() => {
                if (hobby.title === 'Soccer') setShowSoccerModal(true);
                if (hobby.title === 'Math') setShowMathModal(true);
                if (hobby.title === 'Minecraft') setShowMinecraftModal(true);
                if (hobby.title === 'Ultraman') setShowUltramanModal(true);
                if (hobby.title === 'Chess') setShowChessModal(true);
              }}
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

      {/* Soccer Stadium Modal */}
      {showSoccerModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          onClick={() => { setShowSoccerModal(false); setShowSoccerVideo(false); }}
        >
          {/* Stadium Background - Night Sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-green-900"></div>

          {/* Stadium Lights */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`light-${i}`}
              className="absolute"
              style={{
                left: `${10 + i * 16}%`,
                top: '5%',
              }}
            >
              {/* Light pole */}
              <div className="w-2 h-24 bg-gray-600"></div>
              {/* Light fixture */}
              <div
                className="absolute -top-2 -left-4 w-10 h-6 bg-yellow-100"
                style={{
                  boxShadow: '0 0 60px 30px rgba(255, 255, 200, 0.4)',
                }}
              ></div>
            </div>
          ))}

          {/* Soccer Field */}
          <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-green-700 via-green-600 to-green-500" style={{ perspective: '500px' }}>
            {/* Field Stripes */}
            <div className="absolute inset-0 flex">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`stripe-${i}`}
                  className="flex-1 h-full"
                  style={{
                    backgroundColor: i % 2 === 0 ? 'rgba(34, 197, 94, 0.3)' : 'transparent',
                  }}
                />
              ))}
            </div>

            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white/60 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/80 rounded-full"></div>

            {/* Center Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-white/60"></div>

            {/* Left Goal Area */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-40 border-4 border-l-0 border-white/60"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-24 border-4 border-l-0 border-white/60"></div>

            {/* Right Goal Area */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-16 h-40 border-4 border-r-0 border-white/60"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-24 border-4 border-r-0 border-white/60"></div>

            {/* Corner Arcs */}
            <div className="absolute top-0 left-0 w-8 h-8 border-b-4 border-r-4 border-white/60 rounded-br-full"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-b-4 border-l-4 border-white/60 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-t-4 border-r-4 border-white/60 rounded-tr-full"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-t-4 border-l-4 border-white/60 rounded-tl-full"></div>
          </div>

          {/* Crowd Silhouette */}
          <div className="absolute bottom-[45%] left-0 right-0 h-20 bg-gradient-to-t from-slate-800 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 h-12 flex items-end justify-around">
              {[...Array(40)].map((_, i) => (
                <div
                  key={`crowd-${i}`}
                  className="w-3 rounded-t-full bg-slate-700"
                  style={{
                    height: `${8 + Math.random() * 16}px`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => { setShowSoccerModal(false); setShowSoccerVideo(false); }}
            className="absolute top-6 right-6 text-3xl text-white hover:text-green-300 transition-colors duration-300 hover:rotate-90 transform z-50 bg-black/30 rounded-lg p-2"
          >
            ✕
          </button>

          {/* Title */}
          <div className="absolute top-6 left-6 z-50 bg-black/30 rounded-lg p-3">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              ⚽ <span className="text-green-300">Soccer Stadium</span>
            </h3>
            <p className="text-green-200 text-sm mt-1">Kick the ball to watch! 🥅</p>
          </div>

          {!showSoccerVideo ? (
            /* Soccer Ball to Click */
            <div
              className="relative cursor-pointer group"
              onClick={(e) => { e.stopPropagation(); setShowSoccerVideo(true); }}
            >
              {/* Ball Glow */}
              <div className="absolute inset-0 bg-green-400/30 rounded-full blur-3xl scale-150 group-hover:scale-175 transition-transform duration-500"></div>

              {/* Soccer Ball */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 group-hover:scale-110 transition-transform duration-500 animate-bounce">
                <div
                  className="w-full h-full rounded-full bg-white relative overflow-hidden"
                  style={{
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset -5px -5px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  {/* Pentagon patterns */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-black" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
                  <div className="absolute bottom-2 left-1/4 w-8 h-8 bg-black" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
                  <div className="absolute bottom-2 right-1/4 w-8 h-8 bg-black" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
                  <div className="absolute top-1/3 left-2 w-7 h-7 bg-black" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
                  <div className="absolute top-1/3 right-2 w-7 h-7 bg-black" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
                </div>
              </div>

              {/* Click Hint */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white text-center animate-bounce bg-black/30 rounded-lg px-4 py-2">
                <p className="text-sm font-bold">👆 GOAL!</p>
              </div>
            </div>
          ) : (
            /* YouTube Video - Shorts format */
            <div
              className="relative w-full max-w-sm mx-4 aspect-[9/16] rounded-lg overflow-hidden shadow-2xl border-4 border-green-500"
              onClick={(e) => e.stopPropagation()}
              style={{ boxShadow: '0 0 40px rgba(34, 197, 94, 0.5)' }}
            >
              <iframe
                src="https://www.youtube.com/embed/YfSy-IxzKPI?autoplay=1"
                title="Soccer Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </div>
      )}

      {/* Math Universe Modal */}
      {showMathModal && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
          onClick={() => { setShowMathModal(false); setShowMathVideo(false); }}
        >
          {/* Stars Background */}
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  opacity: Math.random() * 0.8 + 0.2,
                }}
              />
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={() => { setShowMathModal(false); setShowMathVideo(false); }}
            className="absolute top-6 right-6 text-3xl text-white hover:text-indigo-300 transition-colors duration-300 hover:rotate-90 transform z-50"
          >
            ✕
          </button>

          {/* Title */}
          <div className="absolute top-6 left-6 z-50">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              🧮 <span className="text-indigo-300">Math Universe</span>
            </h3>
            <p className="text-indigo-200 text-sm mt-1">Click the planet to explore! 🚀</p>
          </div>

          {!showMathVideo ? (
            /* Planet */
            <div
              className="relative cursor-pointer group"
              onClick={(e) => { e.stopPropagation(); setShowMathVideo(true); }}
            >
              {/* Planet Glow */}
              <div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-3xl scale-150 group-hover:scale-175 transition-transform duration-500"></div>

              {/* Planet Body */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-indigo-700 shadow-2xl group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                {/* Planet Surface Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 rounded-full"></div>
                <div className="absolute top-1/4 left-1/4 w-12 h-8 bg-indigo-300/30 rounded-full blur-sm rotate-12"></div>
                <div className="absolute bottom-1/3 right-1/4 w-16 h-10 bg-purple-300/20 rounded-full blur-sm -rotate-12"></div>

                {/* Math Symbols on Planet */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl opacity-80 group-hover:opacity-100 transition-opacity">π∞∑</span>
                </div>

                {/* Ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-16 border-4 border-indigo-300/40 rounded-full -rotate-12 group-hover:rotate-0 transition-transform duration-700"></div>
              </div>

              {/* Click Hint */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-center animate-bounce">
                <p className="text-sm">👆 Click me!</p>
              </div>
            </div>
          ) : (
            /* YouTube Video */
            <div
              className="relative w-full max-w-4xl mx-4 aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-indigo-500"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.youtube.com/embed/B1J6Ou4q8vE?autoplay=1"
                title="Math Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </div>
      )}

      {/* Minecraft World Modal */}
      {showMinecraftModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          onClick={() => { setShowMinecraftModal(false); setShowMinecraftVideo(false); }}
        >
          {/* Minecraft Sky Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200"></div>

          {/* Pixelated Clouds */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`cloud-${i}`}
              className="absolute bg-white"
              style={{
                left: `${10 + i * 15}%`,
                top: `${5 + (i % 3) * 8}%`,
                width: `${60 + Math.random() * 40}px`,
                height: '20px',
                boxShadow: '10px 10px 0 white, 20px 0 0 white, -10px 10px 0 white',
                imageRendering: 'pixelated',
              }}
            />
          ))}

          {/* Sun */}
          <div
            className="absolute w-16 h-16 bg-yellow-300"
            style={{
              top: '10%',
              right: '15%',
              boxShadow: '0 0 40px rgba(255, 255, 0, 0.6)',
            }}
          />

          {/* Ground - Grass and Dirt Layers */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            {/* Grass Layer */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-green-600 flex">
              {[...Array(50)].map((_, i) => (
                <div
                  key={`grass-${i}`}
                  className="flex-1 h-full"
                  style={{
                    backgroundColor: i % 3 === 0 ? '#22c55e' : i % 3 === 1 ? '#16a34a' : '#15803d',
                  }}
                />
              ))}
            </div>
            {/* Dirt Layer */}
            <div className="absolute top-8 left-0 right-0 h-24 flex flex-wrap">
              {[...Array(200)].map((_, i) => (
                <div
                  key={`dirt-${i}`}
                  className="w-[2%] h-6"
                  style={{
                    backgroundColor: i % 4 === 0 ? '#92400e' : i % 4 === 1 ? '#78350f' : i % 4 === 2 ? '#a16207' : '#854d0e',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Some Trees */}
          <div className="absolute bottom-32 left-[10%]">
            {/* Tree trunk */}
            <div className="w-8 h-20 bg-amber-800 mx-auto" style={{ boxShadow: '4px 0 0 #78350f' }}></div>
            {/* Tree leaves */}
            <div className="absolute -top-12 -left-8 w-24 h-24 bg-green-700" style={{ boxShadow: '8px 8px 0 #15803d, -8px 8px 0 #15803d, 8px -8px 0 #22c55e, -8px -8px 0 #22c55e' }}></div>
          </div>

          <div className="absolute bottom-32 right-[15%]">
            {/* Tree trunk */}
            <div className="w-8 h-16 bg-amber-800 mx-auto" style={{ boxShadow: '4px 0 0 #78350f' }}></div>
            {/* Tree leaves */}
            <div className="absolute -top-10 -left-6 w-20 h-20 bg-green-600" style={{ boxShadow: '6px 6px 0 #16a34a, -6px 6px 0 #16a34a' }}></div>
          </div>

          {/* Floating Blocks */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`block-${i}`}
              className="absolute w-10 h-10 animate-bounce"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 10}%`,
                animationDelay: `${i * 0.3}s`,
                backgroundColor: i % 3 === 0 ? '#6b7280' : i % 3 === 1 ? '#f59e0b' : '#22c55e',
                boxShadow: '4px 4px 0 rgba(0,0,0,0.3)',
              }}
            />
          ))}

          {/* Close Button */}
          <button
            onClick={() => { setShowMinecraftModal(false); setShowMinecraftVideo(false); }}
            className="absolute top-6 right-6 text-3xl text-white hover:text-emerald-300 transition-colors duration-300 hover:rotate-90 transform z-50 bg-black/30 rounded-lg p-2"
          >
            ✕
          </button>

          {/* Title */}
          <div className="absolute top-6 left-6 z-50 bg-black/30 rounded-lg p-3">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2" style={{ fontFamily: 'monospace' }}>
              ⛏️ <span className="text-emerald-300">Minecraft World</span>
            </h3>
            <p className="text-emerald-200 text-sm mt-1">Click the block to watch! 🎮</p>
          </div>

          {!showMinecraftVideo ? (
            /* Minecraft Block to Click */
            <div
              className="relative cursor-pointer group"
              onClick={(e) => { e.stopPropagation(); setShowMinecraftVideo(true); }}
            >
              {/* Block Glow */}
              <div className="absolute inset-0 bg-emerald-500/30 blur-3xl scale-150 group-hover:scale-175 transition-transform duration-500"></div>

              {/* 3D Grass Block */}
              <div className="relative w-32 h-32 md:w-48 md:h-48 group-hover:scale-110 transition-transform duration-500" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-20deg) rotateY(45deg)' }}>
                {/* Top Face - Grass */}
                <div
                  className="absolute w-full h-full bg-green-500"
                  style={{
                    transform: 'translateZ(64px)',
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)',
                    background: 'linear-gradient(135deg, #22c55e 25%, #16a34a 50%, #15803d 75%)',
                  }}
                >
                  <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="border border-green-700/30" style={{ backgroundColor: i % 3 === 0 ? '#22c55e' : '#16a34a' }}></div>
                    ))}
                  </div>
                </div>

                {/* Front Face - Dirt with grass on top */}
                <div
                  className="absolute w-full h-full"
                  style={{
                    transform: 'rotateX(-90deg) translateZ(64px)',
                    background: 'linear-gradient(to bottom, #22c55e 0%, #22c55e 15%, #92400e 15%, #78350f 100%)',
                  }}
                >
                  <div className="w-full h-full grid grid-cols-4 grid-rows-4 pt-[15%]">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="border border-amber-900/20" style={{ backgroundColor: i % 4 === 0 ? '#92400e' : '#78350f' }}></div>
                    ))}
                  </div>
                </div>

                {/* Right Face - Dirt with grass on top */}
                <div
                  className="absolute w-full h-full"
                  style={{
                    transform: 'rotateY(90deg) translateZ(64px)',
                    background: 'linear-gradient(to bottom, #16a34a 0%, #16a34a 15%, #78350f 15%, #854d0e 100%)',
                  }}
                >
                  <div className="w-full h-full grid grid-cols-4 grid-rows-4 pt-[15%]">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="border border-amber-900/20" style={{ backgroundColor: i % 3 === 0 ? '#78350f' : '#854d0e' }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Click Hint */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white text-center animate-bounce bg-black/30 rounded-lg px-4 py-2">
                <p className="text-sm font-bold" style={{ fontFamily: 'monospace' }}>👆 Click to play!</p>
              </div>
            </div>
          ) : (
            /* YouTube Video */
            <div
              className="relative w-full max-w-4xl mx-4 aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-emerald-500"
              onClick={(e) => e.stopPropagation()}
              style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.5)' }}
            >
              <iframe
                src="https://www.youtube.com/embed/zoOKYHwGgG0?autoplay=1"
                title="Minecraft Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </div>
      )}

      {/* Ultraman World Modal */}
      {showUltramanModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          onClick={() => { setShowUltramanModal(false); setShowUltramanVideo(false); }}
        >
          {/* Dramatic Sky Gradient - Sunset/Battle Scene */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-600 via-red-700 to-purple-900"></div>

          {/* Light Rays from above */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute top-0 w-2 bg-gradient-to-b from-yellow-300/60 via-orange-400/30 to-transparent"
              style={{
                left: `${10 + i * 12}%`,
                height: '60%',
                transform: `rotate(${-15 + i * 4}deg)`,
                transformOrigin: 'top center',
              }}
            />
          ))}

          {/* City Silhouette */}
          <div className="absolute bottom-0 left-0 right-0 h-48">
            {/* Buildings */}
            {[...Array(20)].map((_, i) => {
              const height = 80 + Math.random() * 120;
              const width = 30 + Math.random() * 40;
              return (
                <div
                  key={`building-${i}`}
                  className="absolute bottom-0"
                  style={{
                    left: `${i * 5}%`,
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: '#1a1a2e',
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Windows */}
                  <div className="grid grid-cols-3 gap-1 p-2 h-full">
                    {[...Array(12)].map((_, j) => (
                      <div
                        key={j}
                        className="bg-yellow-400/70"
                        style={{
                          opacity: Math.random() > 0.3 ? 0.8 : 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Explosion/Energy Effects */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-orange-500/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-yellow-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Specium Ray Effect (diagonal beam) */}
          <div
            className="absolute w-4 h-64 bg-gradient-to-b from-cyan-300 via-cyan-400 to-transparent opacity-60 blur-sm animate-pulse"
            style={{
              top: '10%',
              left: '60%',
              transform: 'rotate(45deg)',
            }}
          />

          {/* Close Button */}
          <button
            onClick={() => { setShowUltramanModal(false); setShowUltramanVideo(false); }}
            className="absolute top-6 right-6 text-3xl text-white hover:text-red-300 transition-colors duration-300 hover:rotate-90 transform z-50 bg-black/30 rounded-lg p-2"
          >
            ✕
          </button>

          {/* Title */}
          <div className="absolute top-6 left-6 z-50 bg-black/30 rounded-lg p-3">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              ✨ <span className="text-red-300">Ultraman Universe</span>
            </h3>
            <p className="text-red-200 text-sm mt-1">Click to unleash the light! 🌟</p>
          </div>

          {!showUltramanVideo ? (
            /* Ultraman Color Timer to Click */
            <div
              className="relative cursor-pointer group"
              onClick={(e) => { e.stopPropagation(); setShowUltramanVideo(true); }}
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-cyan-500/40 rounded-full blur-3xl scale-150 group-hover:scale-175 transition-transform duration-500 animate-pulse"></div>

              {/* Color Timer (the iconic chest light) */}
              <div className="relative w-40 h-56 md:w-48 md:h-64 group-hover:scale-110 transition-transform duration-500">
                {/* Outer Silver Frame */}
                <div
                  className="absolute inset-0 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500"
                  style={{
                    boxShadow: '0 0 30px rgba(192,192,192,0.5), inset 0 0 20px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Inner Color Timer (Blue/Cyan light) */}
                  <div
                    className="absolute top-[15%] left-[20%] right-[20%] bottom-[25%] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-b from-cyan-300 via-cyan-500 to-blue-600 animate-pulse"
                    style={{
                      boxShadow: '0 0 40px rgba(0,255,255,0.8), 0 0 60px rgba(0,200,255,0.6), inset 0 0 30px rgba(255,255,255,0.4)',
                    }}
                  >
                    {/* Inner highlight */}
                    <div className="absolute top-[10%] left-[20%] w-[30%] h-[20%] bg-white/60 rounded-full blur-sm"></div>
                  </div>
                </div>

                {/* Red accent lines (Ultraman's body pattern) */}
                <div className="absolute -left-4 top-1/4 w-3 h-20 bg-gradient-to-b from-red-500 via-red-600 to-red-700 rounded-full" style={{ boxShadow: '0 0 10px rgba(239,68,68,0.6)' }}></div>
                <div className="absolute -right-4 top-1/4 w-3 h-20 bg-gradient-to-b from-red-500 via-red-600 to-red-700 rounded-full" style={{ boxShadow: '0 0 10px rgba(239,68,68,0.6)' }}></div>
              </div>

              {/* Click Hint */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white text-center animate-bounce bg-black/30 rounded-lg px-4 py-2">
                <p className="text-sm font-bold">👆 Shuwatch!</p>
              </div>
            </div>
          ) : (
            /* YouTube Video */
            <div
              className="relative w-full max-w-4xl mx-4 aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-red-500"
              onClick={(e) => e.stopPropagation()}
              style={{ boxShadow: '0 0 40px rgba(239, 68, 68, 0.5)' }}
            >
              <iframe
                src="https://www.youtube.com/embed/uW618phchp0?autoplay=1"
                title="Ultraman Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </div>
      )}

      {/* Chess World Modal */}
      {showChessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          onClick={() => { setShowChessModal(false); setShowChessVideo(false); }}
        >
          {/* Dark elegant background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-900 to-neutral-950"></div>

          {/* Ambient light effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>

          {/* Chess Board Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-[600px] h-[600px] grid grid-cols-8 grid-rows-8 transform rotate-45 scale-75">
              {[...Array(64)].map((_, i) => {
                const row = Math.floor(i / 8);
                const col = i % 8;
                const isLight = (row + col) % 2 === 0;
                return (
                  <div
                    key={i}
                    className={isLight ? 'bg-amber-100' : 'bg-amber-900'}
                  />
                );
              })}
            </div>
          </div>

          {/* Floating Chess Pieces */}
          <div className="absolute top-[15%] left-[10%] text-6xl opacity-30 animate-pulse">♔</div>
          <div className="absolute top-[20%] right-[15%] text-5xl opacity-25 animate-pulse" style={{ animationDelay: '0.5s' }}>♕</div>
          <div className="absolute bottom-[25%] left-[20%] text-5xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>♗</div>
          <div className="absolute bottom-[30%] right-[10%] text-6xl opacity-25 animate-pulse" style={{ animationDelay: '1.5s' }}>♘</div>
          <div className="absolute top-[40%] left-[5%] text-4xl opacity-20 animate-pulse" style={{ animationDelay: '0.3s' }}>♖</div>
          <div className="absolute top-[35%] right-[8%] text-4xl opacity-20 animate-pulse" style={{ animationDelay: '0.8s' }}>♙</div>

          {/* Black pieces floating */}
          <div className="absolute top-[10%] left-[40%] text-5xl opacity-25 animate-pulse" style={{ animationDelay: '0.2s' }}>♚</div>
          <div className="absolute bottom-[15%] right-[35%] text-5xl opacity-20 animate-pulse" style={{ animationDelay: '0.7s' }}>♛</div>
          <div className="absolute bottom-[40%] left-[8%] text-4xl opacity-25 animate-pulse" style={{ animationDelay: '1.2s' }}>♝</div>
          <div className="absolute top-[50%] right-[5%] text-4xl opacity-20 animate-pulse" style={{ animationDelay: '0.4s' }}>♞</div>

          {/* Close Button */}
          <button
            onClick={() => { setShowChessModal(false); setShowChessVideo(false); }}
            className="absolute top-6 right-6 text-3xl text-white hover:text-amber-300 transition-colors duration-300 hover:rotate-90 transform z-50 bg-black/30 rounded-lg p-2"
          >
            ✕
          </button>

          {/* Title */}
          <div className="absolute top-6 left-6 z-50 bg-black/30 rounded-lg p-3">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              ♟️ <span className="text-amber-300">Chess Arena</span>
            </h3>
            <p className="text-amber-200 text-sm mt-1">Click the King to play! 👑</p>
          </div>

          {!showChessVideo ? (
            /* Chess King to Click */
            <div
              className="relative cursor-pointer group"
              onClick={(e) => { e.stopPropagation(); setShowChessVideo(true); }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-amber-500/30 rounded-full blur-3xl scale-150 group-hover:scale-175 transition-transform duration-500"></div>

              {/* King piece with pedestal */}
              <div className="relative group-hover:scale-110 transition-transform duration-500">
                {/* Pedestal */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 bg-gradient-to-t from-amber-900 to-amber-700 rounded-t-lg" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}></div>

                {/* Chess Board mini */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-28 h-4 grid grid-cols-8 overflow-hidden rounded-sm">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={i % 2 === 0 ? 'bg-amber-100' : 'bg-amber-800'}></div>
                  ))}
                </div>

                {/* King piece */}
                <div
                  className="text-[120px] md:text-[150px] filter drop-shadow-2xl"
                  style={{
                    textShadow: '0 0 40px rgba(251, 191, 36, 0.6), 0 10px 30px rgba(0,0,0,0.5)',
                    color: '#fef3c7',
                  }}
                >
                  ♔
                </div>
              </div>

              {/* Click Hint */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-white text-center animate-bounce bg-black/30 rounded-lg px-4 py-2">
                <p className="text-sm font-bold">👆 Checkmate!</p>
              </div>
            </div>
          ) : (
            /* YouTube Video - Shorts format */
            <div
              className="relative w-full max-w-sm mx-4 aspect-[9/16] rounded-lg overflow-hidden shadow-2xl border-4 border-amber-500"
              onClick={(e) => e.stopPropagation()}
              style={{ boxShadow: '0 0 40px rgba(251, 191, 36, 0.5)' }}
            >
              <iframe
                src="https://www.youtube.com/embed/fH0rX2uH5sc?autoplay=1"
                title="Chess Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
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
