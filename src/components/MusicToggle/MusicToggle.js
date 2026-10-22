import React, { useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import styles from "./MusicToggle.module.css";

const AUDIO_SRC = `${process.env.PUBLIC_URL}/audio/baker-street-ambience.mp3`;
const DEFAULT_VOLUME = 0.3;

function MusicToggle() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      audio.loop = true;
      audio.volume = DEFAULT_VOLUME;
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);
    }
  };

  const label = isPlaying ? "Pause Ambience" : "Baker Street Ambience";

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="none"
      />
      <button
        type="button"
        className={styles.musicToggle}
        onClick={handleToggle}
        aria-pressed={isPlaying}
        aria-label={label}
      >
        <Volume2 size={16} aria-hidden="true" />
        <span>{label}</span>
      </button>
    </>
  );
}

export default MusicToggle;
