import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
  {/* Use a simpler ambient light */}
  <ambientLight intensity={0.1} />

  {/* Use a basic point light for basic illumination */}
  <pointLight position={[5, 5, 5]} intensity={0.5} />

  {/* Simplify the spot light for basic shading */}
  <spotLight position={[-5, 5, 5]} angle={0.3} penumbra={1} intensity={0.5} />

  {/* Use a basic material with no shadows */}
  <meshBasicMaterial attach="material" />

  <primitive
    object={computer.scene}
    scale={isMobile ? 0.5 : 0.6}
    position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
    rotation={[-0.01, -0.2, -0.1]}
  />
</mesh>

  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className=""
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;