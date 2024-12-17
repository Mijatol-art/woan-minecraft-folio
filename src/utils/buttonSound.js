import { useAudioStore } from "../Experience/stores/audioStore";

const buttonsound = new Audio("/audio/sfx/ButtonClick.ogg");

export const playSound = () => {
  const isAudioEnabled = useAudioStore.getState().isAudioEnabled;
  if (!isAudioEnabled) return;

  buttonsound.play().catch((error) => {
    console.error("Error playing sound", error);
  });
};
