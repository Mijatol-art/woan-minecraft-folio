import { React, useEffect, useRef, useState } from "react";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Scene from "./Scene";
import { useModalStore } from "./stores/modalStore";

const Experience = () => {
  const camera1 = useRef();
  const [scrollProgress, setscrollProgress] = useState(0);
  const targetScrollProgress = useRef(0);
  const scrollSpeed = 0.005;
  const lerpFactor = 0.1;
  const isSwiping = useRef(false);
  const mouseOffset = useRef(new THREE.Vector3());
  const { isModalOpen } = useModalStore();

  useEffect(() => {
    const handleWheel = (e) => {
      if (isModalOpen) return;
      targetScrollProgress.current =
        targetScrollProgress.current + Math.sign(e.deltaY) * scrollSpeed;
    };

    const handlePointerDown = () => {
      if (isModalOpen) return;
      isSwiping.current = true;
    };

    const handlePointerMove = (e) => {
      if (!isSwiping.current) return;

      const touchMultiplier = e.pointerType === "touch" ? 0.25 : 0.17;

      targetScrollProgress.current =
        targetScrollProgress.current +
        Math.sign(e.movementY) * scrollSpeed * touchMultiplier;
    };

    const handlePointerUp = () => {
      isSwiping.current = false;
    };

    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = (e.clientY / window.innerHeight) * 2 - 1;

      const sensitivityX = 0.25;
      const sensitivityY = 0.25;

      mouseOffset.current.x = mouseX * sensitivityX;
      mouseOffset.current.y = mouseY * sensitivityY;
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isModalOpen]);

  return (
    <>
      <Canvas eventSource={document.getElementById("root")}>
        <Scene
          camera={camera1}
          scrollProgress={scrollProgress}
          setscrollProgress={setscrollProgress}
          targetScrollProgress={targetScrollProgress}
          lerpFactor={lerpFactor}
          mouseOffset={mouseOffset}
        />
        <PerspectiveCamera
          ref={camera1}
          makeDefault
          fov={70}
          position={[4, 67, 38]}
        />
      </Canvas>
    </>
  );
};

export default Experience;
