import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import LoadingScreen from './components/LoadingScreen';
import MainExperience from './components/MainExperience';

// The user should place 'sempurna.mp3' in the 'public' folder.
const AUDIO_SRC = '/sempurna.mp3'; 

export default function App() {
  const [appState, setAppState] = useState<'intro' | 'loading' | 'main'>('intro');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(AUDIO_SRC);
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.error("Audio play failed", e));
    }
    setAppState('loading');
  };

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setAppState('main');
    }, 2500); // 2.5s cinematic transition
  };

  return (
    <div className="w-full h-screen bg-brand-dark overflow-hidden relative">
      <AnimatePresence mode="wait">
        {appState === 'intro' && (
          <IntroScreen key="intro" onStart={handleStart} />
        )}
        
        {appState === 'loading' && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}

        {appState === 'main' && (
          <MainExperience key="main" />
        )}
      </AnimatePresence>
    </div>
  );
}
