import React, { useState } from "react";

import "./LoadingScreen.scss";

import { useProgress } from "@react-three/drei";

import Button from "../Button/Button";

import { music } from "../AudioToggleButton/AudioToggleButton";
import { playSound } from "../../utils/buttonSound";
import { useAudioStore } from "../../Experience/stores/audioStore";

const LoadingScreen = () => {
  const { progress } = useProgress();
  const [isRevealed, setIsRevealed] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const { setIsAudioEnabled } = useAudioStore();

  const handleReveal = () => {
    music.play();
    setIsAudioEnabled(true);
    setIsRevealed(true);
    playSound();
  };

  const handleAnimationFinished = () => {
    setIsAnimationFinished(true);
  };

  if (isAnimationFinished) {
    return null;
  }

  return (
    <>
      <div className="loading-screen">
        <div
          className={`background-top-half ${isRevealed ? "revealed" : ""}`}
          onTransitionEnd={handleAnimationFinished}
        ></div>
        <div
          className={`background-bottom-half ${isRevealed ? "revealed" : ""}`}
        ></div>
        <div className="loading-screen-info-container">
          <div
            className={`intro-message-container ${
              isRevealed ? "revealed" : ""
            }`}
          >
            Hi👋! Thanks for stopping by!! ❤️
          </div>
          <div
            className={`instructions-container ${isRevealed ? "revealed" : ""}`}
          >
            🖱️ Swipe/Scroll Up/Down to Navigate~ 👈
          </div>
          {progress < 100 ? (
            <div className="loading-bar-container">
              <div
                className="loading-bar"
                style={{ width: `${progress}%` }}
              ></div>
              <div className="percentage">{Math.round(progress)}%</div>
            </div>
          ) : !isRevealed ? (
            <Button onClick={handleReveal}>
              &nbsp; &nbsp; &nbsp; Enter World &nbsp; &nbsp; &nbsp;
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
