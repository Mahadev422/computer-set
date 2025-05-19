import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { OrbitControls, Environment, Html } from '@react-three/drei';

// Computer setup components with improved details
import Desk from './components/Desk';
import Chair from './components/Chair';
import Cpu from './components/Cpu';
import Mouse from './components/Mouse';
import Keyboard from './components/Keyboard';
import Monitor from './components/Monitor';


// Main scene component
const Scene = () => {
  const groupRef = useRef();
  const { camera } = useThree();
  
  // Add subtle animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta*0.5;
    }
  });

  return (
    <>
      <directionalLight 
        position={[0, 0, 2]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Environment preset="city" />
      
      <group position={[0,0,-1.3]} ref={groupRef}>
        <Desk />
        <Monitor />
        <Keyboard />
        <Mouse />
        <Suspense>
          <Chair modelPath="/computer-set/models/chair.gltf" position={[0, -2, -2.2]} />
        </Suspense>
        <Cpu />
      </group>
      
      <OrbitControls 
        enableZoom={false}
        enablePan={true}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        camera={camera}
      />
    </>
  );
};

// Main component
const ComputerSetup3D = () => {
  return (
  <div className="absolute inset-0 w-full">
    <Canvas
      shadows
      camera={{ position: [0, 1, 5]}}
      className="absolute inset-0 w-[70%]"
    >
      <Scene />
    </Canvas>
  </div>
  );
};

export default ComputerSetup3D;