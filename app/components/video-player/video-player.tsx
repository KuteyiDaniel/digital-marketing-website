import { FaPause, FaPlay } from "react-icons/fa6";
import { useRef, useState } from 'react';
import styles from './video-player.module.scss';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    // When the video ends, show the play icon again
    setIsPlaying(false);
  };

  return (
    <div className={styles.video__container}>
      <video
        ref={videoRef}
        className={styles.video}
        width="100%"
        height="100%"
        src='/mp4/7020106_Vj_Loop_1280x720.mp4'
        loop // Ensure the video repeats when it finishes
        muted
        onEnded={handleVideoEnd} // Reset to paused state when video ends
      >
      </video>

      {/* Show the play/pause icon in the overlay and toggle it on click */}
      <div className={styles.overlay} onClick={togglePlayPause}>
        <div className={styles.play__pause}>
          {isPlaying ? (
            <FaPause /> // Show pause icon when video is playing
          ) : (
            <FaPlay />  // Show play icon when video is paused
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
