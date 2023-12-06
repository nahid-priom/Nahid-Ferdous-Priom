import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Use a simpler ambient light */}
      <ambientLight intensity={0.2} />

      {/* Use a simple point light for basic illumination */}
      <pointLight position={[5, 5, 5]} intensity={0.5} />

      {/* Simplified spot light for basic shading */}
      <spotLight position={[-5, 5, 5]} angle={0.3} penumbra={1} intensity={0.8} />

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
    // Check for mobile devices based on user agent
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <Canvas
      frameloop='demand'
      dpr={window.devicePixelRatio}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: false, antialias: false }}
     
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Use a simple orbit controls */}
        <OrbitControls enableZoom={false} />

        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload assets */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
